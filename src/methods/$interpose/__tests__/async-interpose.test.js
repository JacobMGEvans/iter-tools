/**
 * @generated-from ./$interpose.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncInterpose, asyncToArray, range } from '../../..';
describe('asyncInterpose', () => {
  it('interposes items into array', async () => {
    const iter = asyncInterpose(9, [1, 2, 3]);
    expect(await asyncToArray(iter)).toEqual([1, 9, 2, 9, 3]);
  });
  it('interposes items into an iterable', async () => {
    const iter = asyncInterpose(
      null,
      range({
        start: 1,
        end: 4,
      }),
    );
    expect(await asyncToArray(iter)).toEqual([1, null, 2, null, 3]);
  });
  it('returns mapped iterable (curried version)', async () => {
    const iter = asyncInterpose([]);
    expect(
      await asyncToArray(
        iter(
          range({
            start: 1,
            end: 4,
          }),
        ),
      ),
    ).toEqual([1, [], 2, [], 3]);
  });
  it('returns empty iterable from null', async () => {
    expect(await asyncToArray(asyncInterpose('', null))).toEqual([]);
  });
});
