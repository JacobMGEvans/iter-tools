/**
 * @generated-from ./$compress.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';
declare function asyncCompress<T = any>(
  source: AsyncSourceIterable<T>,
  compress: AsyncSourceIterable<boolean>,
): AsyncResultIterable<T>;
export default asyncCompress;
