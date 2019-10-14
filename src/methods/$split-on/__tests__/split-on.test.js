/**
 * @generated-from ./$split-on.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { splitOn, map, toArray } from '../../..';
describe('splitOn', () => {
  it('should split between every item which is equal to the on argument', () => {
    expect(toArray(map(group => toArray(group), splitOn(null, [1, null, 2, null, 3])))).toEqual([
      [1],
      [2],
      [3],
    ]);
  });
  it('should yield [] between two separators', () => {
    expect(toArray(map(group => toArray(group), splitOn(null, [1, null, null, 3])))).toEqual([
      [1],
      [],
      [3],
    ]);
  });
  it('should yield [], [] when only separator', () => {
    expect(toArray(map(group => toArray(group), splitOn(null, [null])))).toEqual([[], []]);
  });
  it('passes through the empty iterable', () => {
    expect(toArray(splitOn(0, null))).toEqual([]);
  });
  it('passes through the empty string', () => {
    expect(toArray(splitOn(' ', ''))).toEqual([]);
  });
  describe('given a string', () => {
    it('should split on every item which is equal to the on argument', () => {
      expect(toArray(splitOn('Ø', '11Ø22Ø33'))).toEqual(['11', '22', '33']);
    });
  });
});
