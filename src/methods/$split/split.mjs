/**
 * @generated-from ./$split.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { map } from '../$map/map';

function* iterableOf(...items) {
  yield* items;
}

export function split(source) {
  // String iterators already return an exploded version of the string.
  if (typeof source === 'string') {
    return source;
  } else {
    return map(source, item => iterableOf(item));
  }
}
export default split;
