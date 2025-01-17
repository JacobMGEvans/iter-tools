import { $Promise } from '../../../generate/async.macro';

import { $SourceIterable } from '../../types/$iterable';

declare function $last<T = any>(iterable: $SourceIterable<T>): $Promise<T | undefined>;

export default $last;
