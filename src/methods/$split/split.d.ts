/**
 * @generated-from ./$split.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { ResultIterable as SyncResultIterable } from '../../types/iterable';
import { SourceIterable, ResultIterable } from '../../types/iterable';
declare function split<T = any>(source: SourceIterable<T>): ResultIterable<SyncResultIterable<T>>;
declare function split(source: string): string;
export default split;
