/**
 * @generated-from ./$zip.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable, ResultIterable } from '../../types/iterable';
declare function zip<T = any>(...sources: Array<SourceIterable<T>>): ResultIterable<T[]>;
export default zip;
