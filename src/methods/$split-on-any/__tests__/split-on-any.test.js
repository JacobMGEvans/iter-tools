/**
 * @generated-from ./$split-on-any.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { splitOnAny, map, toArray } from '../../..';
describe('splitOnAny', () => {
  it('should split on an occurance of any value', () => {
    expect(
      toArray(map(group => toArray(group), splitOnAny([null, undefined], [1, null, undefined, 3]))),
    ).toEqual([[1], [], [3]]);
  });
  it('does not split when passed no values', () => {
    expect(toArray(map(group => toArray(group), splitOnAny(null, [1, 2, 3])))).toEqual([[1, 2, 3]]);
  });
  it('passes through the empty iterable', () => {
    expect(toArray(splitOnAny([], null))).toEqual([]);
  });
  it('the empty string is an empty iterable', () => {
    expect(toArray(splitOnAny([], ''))).toEqual([]);
  });
  describe('given a string', () => {
    it('should split on every item which is equal to the on argument', () => {
      expect(toArray(splitOnAny('Ø', '11Ø22Ø33'))).toEqual(['11', '22', '33']);
    });
  });
});
