/**
 * @generated-from ./$filter.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncFilter, asyncToArray, range } from '../../..';
describe('asyncFilter', () => {
  it('returns filtered iterable', async () => {
    const iter = asyncFilter(item => item % 2 === 0, [1, 2, 3, 4, 5, 6]);
    expect(await asyncToArray(iter)).toEqual([2, 4, 6]);
  });
  it('returns filtered iterable from iterable', async () => {
    const iter = asyncFilter(
      item => item % 2 === 0,
      range({
        start: 1,
        end: 7,
      }),
    );
    expect(await asyncToArray(iter)).toEqual([2, 4, 6]);
  });
  it('returns filtered iterable (curried version)', async () => {
    const iter = asyncFilter(item => item % 2 === 0);
    expect(
      await asyncToArray(
        iter(
          range({
            start: 1,
            end: 7,
          }),
        ),
      ),
    ).toEqual([2, 4, 6]);
  });
  it('returns empty iterable from null', async () => {
    expect(await asyncToArray(asyncFilter(item => item, null))).toEqual([]);
  });
  it('returns filtered iterable (using a promise)', async () => {
    const iter = asyncFilter(item => Promise.resolve(item % 2 === 0), [1, 2, 3, 4, 5, 6]);
    expect(await asyncToArray(iter)).toEqual([2, 4, 6]);
  });
});
