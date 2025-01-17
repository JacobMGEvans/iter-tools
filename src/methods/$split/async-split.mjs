/**
 * @generated-from ./$split.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncMap } from '../$map/async-map';

function* iterableOf(...items) {
  yield* items;
}

export function asyncSplit(source) {
  // String iterators already return an exploded version of the string.
  if (typeof source === 'string') {
    return source;
  } else {
    return asyncMap(source, item => iterableOf(item));
  }
}
export default asyncSplit;
