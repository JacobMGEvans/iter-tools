/**
 * @generated-from ./$group-by.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable, ResultIterable } from '../../types/iterable';
declare function groupBy(
  key: null | undefined,
): <T = any>(source: SourceIterable<T>) => ResultIterable<[T, ResultIterable<T>]>;
declare function groupBy<K, T = any>(
  key: (item: T) => K,
): (source: SourceIterable<T>) => ResultIterable<[K, ResultIterable<T>]>;
declare function groupBy<T = any>(
  key: null | undefined,
  source: SourceIterable<T>,
): ResultIterable<[T, ResultIterable<T>]>;
declare function groupBy<K, T = any>(
  key: (item: T) => K,
  source: SourceIterable<T>,
): ResultIterable<[K, ResultIterable<T>]>;
export default groupBy;
