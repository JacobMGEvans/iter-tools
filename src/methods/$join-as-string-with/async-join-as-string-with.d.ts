/**
 * @generated-from ./$join-as-string-with.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable } from '../../types/async-iterable';
declare function asyncJoinAsStringWith(
  value: string,
  strings: AsyncSourceIterable<string>,
): string | Promise<string>;
declare function asyncJoinAsStringWith(
  value: string,
  strings: AsyncSourceIterable<AsyncSourceIterable<string>>,
): string | Promise<string>;
declare function asyncJoinAsStringWith(
  value: string,
): (strings: AsyncSourceIterable<string>) => string | Promise<string>;
declare function asyncJoinAsStringWith(
  value: string,
): (strings: AsyncSourceIterable<AsyncSourceIterable<string>>) => string | Promise<string>;
export default asyncJoinAsStringWith;
