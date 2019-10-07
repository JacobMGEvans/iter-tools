'use strict';

const { astMatch, includes, oneOf } = require('./ast-match');

const curryNames = ['iterableCurry', 'asyncIterableCurry'];

function methodUsesIterableCurry(ast) {
  let curryMethod = null;
  let usesIterableCurry = false;
  const iterableCurryOpts = {};

  for (const stmt of ast.program.body) {
    if (
      astMatch(
        {
          type: 'ImportDeclaration',
          specifiers: includes({
            type: 'ImportSpecifier',
            imported: {
              name: oneOf(...curryNames),
            },
          }),
          source: {
            value: oneOf('../../internal/iterable', '../../internal/async-iterable'),
          },
        },
        stmt,
      )
    ) {
      curryMethod = stmt.specifiers.find(specifier => curryNames.includes(specifier.imported.name))
        .imported.name;
    } else if (
      curryMethod &&
      astMatch(
        {
          type: 'ExportDefaultDeclaration',
          declaration: {
            type: 'CallExpression',
            callee: {
              name: curryMethod,
            },
          },
        },
        stmt,
      )
    ) {
      usesIterableCurry = true;
      const [, optsAst] = stmt.declaration.arguments;

      if (optsAst && optsAst.type === 'ObjectExpression') {
        for (const propertyAst of optsAst.properties) {
          if (propertyAst.type === 'ObjectProperty' && /Literal$/.test(propertyAst.value.type)) {
            iterableCurryOpts[propertyAst.key.name] = propertyAst.value.value;
          }
        }
      }
    }
  }
  return { usesIterableCurry, iterableCurryOpts };
}

module.exports = function extractMethodSignature(methodName, ast) {
  const { usesIterableCurry, iterableCurryOpts } = methodUsesIterableCurry(ast);
  let params;

  for (const stmt of ast.program.body) {
    if (
      astMatch(
        {
          type: 'ExportNamedDeclaration',
          declaration: {
            type: 'FunctionDeclaration',
            id: {
              name: methodName,
            },
          },
        },
        stmt,
      )
    ) {
      const methodDeclaration = stmt.declaration;
      params = methodDeclaration.params.map(param => {
        let paramDecl;
        let isRest = false;

        switch (param.type) {
          case 'AssignmentPattern':
            paramDecl = param.left;
            break;
          case 'RestElement':
            paramDecl = param.argument;
            isRest = true;
            break;
          default:
            paramDecl = param;
            break;
        }
        if (paramDecl.type === 'ObjectPattern') {
          return {
            name: null,
            isRest: false,
            properties: paramDecl.properties
              .filter(prop => prop.shorthand)
              .map(prop => prop.key.name),
          };
        } else {
          return { name: paramDecl.name, isRest };
        }
      });
    }
  }

  if (usesIterableCurry && params) {
    params[0].isIterable = true;
    params[0].isAsync = methodName.startsWith('async');

    if (iterableCurryOpts.variadic) {
      params[0].isRest = true;
    }

    const iterable = params.shift();

    if (!iterableCurryOpts.optionalArgsAtEnd) {
      params.reverse();
    }

    params.push(iterable);
  }

  if (methodName && params) {
    return {
      methodName,
      params,
    };
  } else {
    return null;
  }
};
