/**
 * @generated-from ./$batch.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable, ResultIterable } from '../../types/iterable';
declare function batch(size: number): <T>(source: SourceIterable<T>) => ResultIterable<T[]>;
declare function batch<T = any>(size: number, source: SourceIterable<T>): ResultIterable<T[]>;
export default batch;
