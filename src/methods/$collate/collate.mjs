/**
 * @generated-from ./$collate.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import { interleave } from '../$interleave/interleave';

function* byPosition({ start, step }, canTakeAny, ...buffers) {
  start = start % buffers.length;

  for (let i = start; canTakeAny(); i = (i + step) % buffers.length) {
    if (buffers[i].canTake()) yield buffers[i].take();
  }
}

function* byComparison({ comparator }, canTakeAny, ...buffers) {
  let candidateBuffer;

  while ((candidateBuffer = canTakeAny())) {
    let candidateItem = candidateBuffer.peek();

    for (const buffer of buffers) {
      const item = buffer.peek();

      if (buffer.canTake() && comparator(candidateItem, item) < 0) {
        candidateItem = item;
        candidateBuffer = buffer;
      }
    }

    yield candidateBuffer.take();
  }
}

const defaultOptions = {
  start: 0,
  step: 1,
};
export function collate(sources, start = 0, stepOrComparatorOrOptions = 1) {
  let by;
  let options;

  if (typeof stepOrComparatorOrOptions === 'function') {
    by = byComparison;
    options = {
      comparator: stepOrComparatorOrOptions,
    };
  } else if (typeof stepOrComparatorOrOptions === 'number' && typeof start === 'number') {
    by = byPosition;
    options = {
      start,
      step: stepOrComparatorOrOptions,
    };
  } else if (stepOrComparatorOrOptions && typeof stepOrComparatorOrOptions === 'object') {
    by = byPosition;
    options = { ...defaultOptions, ...stepOrComparatorOrOptions };
  } else {
    throw new TypeError(
      'collate was passed an invalid value which could not be interpreted as a step, a comparator, or an options object',
    );
  }

  return interleave(sources, by, options);
}
export default iterableCurry(collate, {
  variadic: true,
  minArgs: 0,
  maxArgs: 2,
});
