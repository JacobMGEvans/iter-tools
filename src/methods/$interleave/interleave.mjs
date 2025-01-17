/**
 * @generated-from ./$interleave.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { ensureIterable, iterableCurry } from '../../internal/iterable';
import InterleaveBuffer from './internal/buffer';
import makeCanTakeAny from './internal/can-take-any';
export function* interleave(sources, generatorFn, options) {
  const buffers = sources.map(
    (iterable, i) => new InterleaveBuffer(ensureIterable(iterable)[Symbol.iterator](), i),
  );

  try {
    const canTakeAny = makeCanTakeAny(buffers);
    yield* options !== undefined
      ? generatorFn(options, canTakeAny, ...buffers)
      : generatorFn(canTakeAny, ...buffers);
  } finally {
    for (const buffer of buffers) {
      if (buffer.canTake() && typeof buffer._iterator.return === 'function') {
        buffer._iterator.return();
      }
    }
  }
}
export default iterableCurry(interleave, {
  variadic: true,
  optionalArgsAtEnd: true,
  minArgs: 1,
  maxArgs: 2,
});
