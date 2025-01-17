import { $SourceIterable, $ResultIterable } from '../../types/$iterable';

declare function $zip<T = any>(...sources: Array<$SourceIterable<T>>): $ResultIterable<T[]>;

export default $zip;
