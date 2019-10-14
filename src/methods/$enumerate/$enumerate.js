import { $iterableCurry } from '../../internal/$iterable';
import { range } from '../range/range';
import { $zip } from '../$zip/$zip';
import { $wrap } from '../$wrap/$wrap';

export function $enumerate(source, start = 0) {
  return $zip([$wrap(range(start, Infinity)), source]);
}

export default $iterableCurry($enumerate, {
  minArgs: 0,
  maxArgs: 1,
});
