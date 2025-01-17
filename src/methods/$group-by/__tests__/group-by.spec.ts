/**
 * @generated-from ./$group-by.spec.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import assert from 'static-type-assert';
import { Iterable, ResultIterable } from '../../../types/iterable';
import { groupBy } from '../../..';
declare const Ø: never;
assert<ResultIterable<[string, ResultIterable<string>]>>(groupBy(null)(Ø as string));
assert<ResultIterable<[number, ResultIterable<number>]>>(groupBy(null)(Ø as Iterable<number>));
assert<ResultIterable<[string, ResultIterable<string>]>>(groupBy(null, Ø as string));
assert<ResultIterable<[number, ResultIterable<number>]>>(groupBy(null, Ø as Iterable<number>));
assert<ResultIterable<[string, ResultIterable<number>]>>(
  groupBy(Ø as (x: number) => string)(Ø as Iterable<number>),
);
assert<ResultIterable<[string, ResultIterable<number>]>>(
  groupBy(Ø as (x: number) => string, Ø as Iterable<number>),
);
