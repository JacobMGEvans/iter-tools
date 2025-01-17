/**
 * @generated-from ./$join-as-string-with.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
export async function asyncJoinAsStringWith(strings, separator) {
  let result = '';
  let first = true;

  for await (const str of strings) {
    if (!first && separator !== '') result += separator;
    result += str;
    first = false;
  }

  return result;
}
export default asyncIterableCurry(asyncJoinAsStringWith, {
  reduces: true,
});
