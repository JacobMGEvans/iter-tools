/**
 * @generated-from ./$reverse.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncReverse, asyncToArray, asyncWrap } from '../../..';
describe('asyncReverse', () => {
  it('Reverses an iterable', async () => {
    expect(await asyncToArray(asyncReverse(asyncWrap([1, 2, 3])))).toEqual([3, 2, 1]);
  });
});
