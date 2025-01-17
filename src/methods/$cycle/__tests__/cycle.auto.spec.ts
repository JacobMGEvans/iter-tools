/**
 * @generated-from ./cycle.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { cycle, slice, toArray, wrap, range } from '../../..';
describe('cycle', () => {
  it('return infinite cycle', () => {
    expect(toArray(slice(0, 6, cycle(wrap([1, 2, 3]))))).toEqual([1, 2, 3, 1, 2, 3]);
  });
  it('can be reused', () => {
    const myCycle = cycle(range(1, 4));
    expect(toArray(slice(0, 7, myCycle))).toEqual([1, 2, 3, 1, 2, 3, 1]);
    expect(toArray(slice(0, 7, myCycle))).toEqual([1, 2, 3, 1, 2, 3, 1]);
  });
  it('can cycle a limited number of times', () => {
    expect(toArray(cycle(3, wrap([1, 2, 3])))).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
  });
});
