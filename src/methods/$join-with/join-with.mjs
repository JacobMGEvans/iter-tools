/**
 * @generated-from ./$join-with.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import { joinWith_ } from '../$join-with_/join-with_';
const config = {
  subseq: false,
};
export function joinWith(source, with_) {
  return joinWith_(source, config, with_);
}
export default iterableCurry(joinWith);
