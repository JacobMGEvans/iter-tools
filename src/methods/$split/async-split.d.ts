/**
 * @generated-from ./$split.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { ResultIterable as SyncResultIterable } from '../../types/iterable';
import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';
declare function asyncSplit<T = any>(
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<SyncResultIterable<T>>;
declare function asyncSplit(source: string): string;
export default asyncSplit;
