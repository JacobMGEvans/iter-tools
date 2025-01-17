/**
 * @generated-from ./$split-on.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncSplitOn, asyncMap, asyncToArray } from '../../..';
describe('asyncSplitOn', () => {
  it('should split between every item which is equal to the on argument', async () => {
    expect(
      await asyncToArray(
        asyncMap(group => asyncToArray(group), asyncSplitOn(null, [1, null, 2, null, 3])),
      ),
    ).toEqual([[1], [2], [3]]);
  });
  it('should yield [] between two separators', async () => {
    expect(
      await asyncToArray(
        asyncMap(group => asyncToArray(group), asyncSplitOn(null, [1, null, null, 3])),
      ),
    ).toEqual([[1], [], [3]]);
  });
  it('should yield [], [] when only separator', async () => {
    expect(
      await asyncToArray(asyncMap(group => asyncToArray(group), asyncSplitOn(null, [null]))),
    ).toEqual([[], []]);
  });
  it('passes through the empty iterable', async () => {
    expect(await asyncToArray(asyncSplitOn(0, null))).toEqual([]);
  });
});
