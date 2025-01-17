/**
 * @generated-from ./$take-sorted.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';
declare function asyncTakeSorted<T = any>(iterable: AsyncSourceIterable<T>): AsyncResultIterable<T>;
declare function asyncTakeSorted<T = any>(
  n: number,
): (source: AsyncSourceIterable<T>) => AsyncResultIterable<T>;
declare function asyncTakeSorted<T = any>(
  n: number,
  func: (a: T, b: T) => number,
): (source: AsyncSourceIterable<T>) => AsyncResultIterable<T>;
declare function asyncTakeSorted<T = any>(
  func: (a: T, b: T) => number,
): (source: AsyncSourceIterable<T>) => AsyncResultIterable<T>;
declare function asyncTakeSorted<T = any>(
  n: number,
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<T>;
declare function asyncTakeSorted<T = any>(
  n: number,
  func: (a: T, b: T) => number,
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<T>;
declare function asyncTakeSorted<T = any>(
  func: (a: T, b: T) => number,
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<T>;
export default asyncTakeSorted;
