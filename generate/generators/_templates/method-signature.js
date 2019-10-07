'use strict';

const param = ({ name, isRest, isIterable, isAsync, properties }) => {
  if (isIterable) {
    name = `[${name}](#${isAsync ? 'async' : ''}sourceiterable)`;
  }
  if (isRest) return `...${name}`;
  if (name !== null) return name;
  return `{ ${properties.join(', ')} }`;
};

module.exports = ({ methodName, params }) => {
  return `**${methodName}(${params.map(param).join(', ')})**`;
};
