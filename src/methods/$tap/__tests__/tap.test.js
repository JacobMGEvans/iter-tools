/**
 * @generated-from ./$tap.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { tap, toArray, range } from '../../..';
describe('tap', () => {
  it('return tapped iterable', () => {
    const iter = tap(item => item * 2, [1, 2, 3]);
    expect(toArray(iter)).toEqual([1, 2, 3]);
  });
  it('return tapped iterable from iterable', () => {
    const iter = tap(
      item => item * 2,
      range({
        start: 1,
        end: 4,
      }),
    );
    expect(toArray(iter)).toEqual([1, 2, 3]);
  });
  it('return tapped iterable (curried version)', () => {
    const iter = tap(item => item * 2);
    expect(
      toArray(
        iter(
          range({
            start: 1,
            end: 4,
          }),
        ),
      ),
    ).toEqual([1, 2, 3]);
  });
});
