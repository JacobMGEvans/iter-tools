/**
 * @generated-from ./$interpose.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
export function* interpose(source, interposeItem) {
  let first = true;

  for (const item of source) {
    if (!first) {
      yield interposeItem;
    }

    yield item;
    first = false;
  }
}
export default iterableCurry(interpose);
