/**
 * @generated-from ./$every.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable } from '../../types/iterable';
declare function every<T = any>(
  func: (item: T) => boolean,
): (iterable: SourceIterable<T>) => boolean;
declare function every<T = any>(func: (item: T) => boolean, iterable: SourceIterable<T>): boolean;
export default every;
