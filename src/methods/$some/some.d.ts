/**
 * @generated-from ./$some.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable } from '../../types/iterable';
declare function some<T = any>(
  func: (item: T, i: number) => boolean,
): (iterable: SourceIterable<T>) => boolean;
declare function some<T = any>(
  func: (item: T, i: number) => boolean,
  iterable: SourceIterable<T>,
): boolean;
export default some;
