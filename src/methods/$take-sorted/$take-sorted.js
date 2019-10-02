import { $async, $await } from '../../../generate/async.macro';

import Heap from 'little-ds-toolkit/lib/heap';
import { $iterableCurry } from '../../internal/$iterable';
import defaultCompare from '../../internal/compare';

$async;
export function* $takeSorted(source, comparator = defaultCompare, number = Infinity) {
  const heap = new Heap(comparator);
  $await;
  for (const item of source) {
    heap.push(item);
    if (heap.size() > number) {
      heap.pop();
    }
  }
  const len = heap.size();
  for (let i = 0; i < len; i++) {
    yield heap.pop();
  }
}

export default $iterableCurry($takeSorted, { minArgs: 0, maxArgs: 2 });
