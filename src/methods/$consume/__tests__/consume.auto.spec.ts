/**
 * @generated-from ./consume.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { consume } from '../../..';
describe('consume', () => {
  it('consumes an iterable', () => {
    const arr: Array<number> = [];
    consume(item => arr.push(item), [1, 2, 3]);
    expect(arr).toEqual([1, 2, 3]);
  });
  it('consumes an iterable using a promise', () => {
    const arr: Array<number> = [];
    consume(
      item => {
        arr.push(item);
        return Promise.resolve(0);
      },
      [1, 2, 3],
    );
    expect(arr).toEqual([1, 2, 3]);
  });
  it('consumes an iterable (curried)', () => {
    const arr: Array<number> = [];
    const consumePush = consume(item => arr.push(item));
    consumePush([1, 2, 3]);
    expect(arr).toEqual([1, 2, 3]);
  });
});