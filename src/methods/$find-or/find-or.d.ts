/**
 * @generated-from ./$find-or.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { InputIterable } from '../../internal/iterable';
declare function findOr<NF, S extends T, T = any>(
  notFoundValue: NF,
  predicate: (item: T, i: number) => item is S,
): (iterable: InputIterable<T>) => S | NF;
declare function findOr<NF, T = any>(
  notFoundValue: NF,
  predicate: (item: T, i: number) => boolean,
): (iterable: InputIterable<T>) => T | NF;
declare function findOr<NF, S extends T, T = any>(
  notFoundValue: NF,
  predicate: (item: T, i: number) => item is S,
  iterable: InputIterable<T>,
): S | NF;
declare function findOr<NF, T = any>(
  notFoundValue: NF,
  predicate: (item: T, i: number) => boolean,
  iterable: InputIterable<T>,
): T | NF;
export default findOr;