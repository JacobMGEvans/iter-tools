/**
 * @generated-from ./$split-on-any-subseq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import { splitOn_ } from '../$split-on_/split-on_';
const config = {
  any: true,
  subseq: true,
};

function splitOnAnySubseq(iterable, subseqs) {
  return splitOn_(iterable, config, subseqs);
}

export default iterableCurry(splitOnAnySubseq);