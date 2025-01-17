import { $MaybePromise } from '../../../generate/async.macro';

import { $ResultIterable } from '../../types/$iterable';

declare function $execute<T, Args extends any[] = any[]>(
  func: (...args: Args) => $MaybePromise<T>,
  ...args: Args
): $ResultIterable<T>;

export default $execute;
