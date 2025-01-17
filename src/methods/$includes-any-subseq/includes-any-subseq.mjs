/**
 * @generated-from ./$includes-any-subseq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import { includes_ } from '../$includes_/includes_';
const config = {
  any: true,
  subseq: true,
};
export function includesAnySubseq(iterable, value) {
  return includes_(iterable, config, value);
}
export default iterableCurry(includesAnySubseq, {
  reduces: true,
});
