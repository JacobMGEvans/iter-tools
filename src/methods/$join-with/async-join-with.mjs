/**
 * @generated-from ./$join-with.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
import { asyncJoinWith_ } from '../$join-with_/async-join-with_';
const config = {
  subseq: false,
};
export function asyncJoinWith(iterable, with_) {
  return asyncJoinWith_(iterable, config, with_);
}
export default asyncIterableCurry(asyncJoinWith);