/* eslint-env node, jest */
const { groupBy, asyncGroupBy, asyncToArray } = require('..')

describe.only('groupBy', function () {
  it('groupBy main cursor', function () {
    const iter = groupBy('AAABBAACCCCD')
    let next
    next = iter.next()
    expect(next.value[0]).toBe('A')
    next = iter.next()
    expect(next.value[0]).toBe('B')
    next = iter.next()
    expect(next.value[0]).toBe('A')
    next = iter.next()
    expect(next.value[0]).toBe('C')
    next = iter.next()
    expect(next.value[0]).toBe('D')
    next = iter.next()
    expect(next.done).toBe(true)
  })

  it('groupBy use key function', function () {
    const iter = groupBy((item) => item.toLowerCase(), 'AaaBbaACccCD')
    let next
    next = iter.next()
    expect(next.value[0]).toBe('a')
    next = iter.next()
    expect(next.value[0]).toBe('b')
    next = iter.next()
    expect(next.value[0]).toBe('a')
    next = iter.next()
    expect(next.value[0]).toBe('c')
    next = iter.next()
    expect(next.value[0]).toBe('d')
    next = iter.next()
    expect(next.done).toBe(true)
  })

  it('groupBy main cursor (curried)', function () {
    const iter = groupBy()('AAABBAACCCCD')
    let next
    next = iter.next()
    expect(next.value[0]).toBe('A')
    next = iter.next()
    expect(next.value[0]).toBe('B')
    next = iter.next()
    expect(next.value[0]).toBe('A')
    next = iter.next()
    expect(next.value[0]).toBe('C')
    next = iter.next()
    expect(next.value[0]).toBe('D')
    next = iter.next()
    expect(next.done).toBe(true)
  })

  it('groupBy secondary', function () {
    const iter = groupBy('AAABBAACCCCD')
    let next
    next = iter.next()
    expect(next.value[0]).toBe('A')
    expect(Array.from(next.value[1])).toEqual(['A', 'A', 'A'])
    next = iter.next()
    expect(next.value[0]).toBe('B')
    expect(Array.from(next.value[1])).toEqual(['B', 'B'])
    next = iter.next()
    expect(next.value[0]).toBe('A')
    expect(Array.from(next.value[1])).toEqual(['A', 'A'])
    next = iter.next()
    expect(next.value[0]).toBe('C')
    expect(Array.from(next.value[1])).toEqual(['C', 'C', 'C', 'C'])
    next = iter.next()
    expect(next.value[0]).toBe('D')
    expect(Array.from(next.value[1])).toEqual(['D'])
    next = iter.next()
    expect(next.done).toBe(true)
  })

  it('groupBy secondary (consume partially)', function () {
    const iter = groupBy('AAABBAACCCCD')
    let next
    next = iter.next()
    expect(next.value[0]).toBe('A')
    expect(next.value[1].next().value).toBe('A')
    expect(next.value[1].next().value).toBe('A')
    expect(next.value[1].next().value).toBe('A')
    expect(next.value[1].next().done).toBe(true)
    next = iter.next()
    expect(next.value[0]).toBe('B')
    next = iter.next()
    expect(next.value[0]).toBe('A')
    // ...
  })

  it('groupBy iterables can be consumed in an interleaved manner', function () {
    const iter = groupBy('AABB')
    let next
    const As = iter.next()
    expect(As.value[0]).toBe('A')
    expect(As.value[1].next().value).toBe('A')

    const Bs = iter.next()
    expect(Bs.value[0]).toBe('B')
    expect(Bs.value[1].next().value).toBe('B')

    expect(As.value[1].next().value).toBe('A')
    expect(As.value[1].next().done).toBe(true)

    expect(Bs.value[1].next().value).toBe('B')
    expect(Bs.value[1].next().done).toBe(true)
  })

  it('groupBy using destructuring', function () {
    const [group1, group2, group3] = groupBy('AAABBCCCC')
    expect(group1[0]).toBe('A')
    expect(group2[0]).toBe('B')
    expect(group3[0]).toBe('C')
    expect(Array.from(group1[1])).toEqual(['A', 'A', 'A'])
    expect(Array.from(group2[1])).toEqual(['B', 'B'])
    expect(Array.from(group3[1])).toEqual(['C', 'C', 'C', 'C'])
  })

  it('groupBy of null returns empty iterable', function () {
    expect(Array.from(groupBy(undefined, null))).toEqual([])
  })

  it('groupBy of undefined returns empty iterable', function () {
    expect(Array.from(groupBy(undefined, undefined))).toEqual([])
  })

  it('groupBy of undefined returns empty iterable 2', function () {
    expect(Array.from(groupBy(undefined))).toEqual([])
  })

  it('groupBy of undefined returns empty iterable 3', function () {
    expect(Array.from(groupBy()(undefined))).toEqual([])
  })
})

describe('asyncGroupBy', function () {
  it('groupBy main cursor', async function () {
    const iter = asyncGroupBy(undefined, 'AAABBAACCCCD')
    let next
    next = await iter.next()
    expect(next.value[0]).toBe('A')
    next = await iter.next()
    expect(next.value[0]).toBe('B')
    next = await iter.next()
    expect(next.value[0]).toBe('A')
    next = await iter.next()
    expect(next.value[0]).toBe('C')
    next = await iter.next()
    expect(next.value[0]).toBe('D')
    next = await iter.next()
    expect(next.done).toBe(true)
  })

  it('groupBy use key function', async function () {
    const iter = asyncGroupBy((item) => item.toLowerCase(), 'AaaBbaACccCD')
    let next
    next = await iter.next()
    expect(next.value[0]).toBe('a')
    next = await iter.next()
    expect(next.value[0]).toBe('b')
    next = await iter.next()
    expect(next.value[0]).toBe('a')
    next = await iter.next()
    expect(next.value[0]).toBe('c')
    next = await iter.next()
    expect(next.value[0]).toBe('d')
    next = await iter.next()
    expect(next.done).toBe(true)
  })

  it('groupBy use key function (using a promise)', async function () {
    const iter = asyncGroupBy(async (item) => item.toLowerCase(), 'AaaBbaACccCD')
    let next
    next = await iter.next()
    expect(next.value[0]).toBe('a')
    next = await iter.next()
    expect(next.value[0]).toBe('b')
    next = await iter.next()
    expect(next.value[0]).toBe('a')
    next = await iter.next()
    expect(next.value[0]).toBe('c')
    next = await iter.next()
    expect(next.value[0]).toBe('d')
    next = await iter.next()
    expect(next.done).toBe(true)
  })

  it('groupBy main cursor (curried)', async function () {
    const iter = asyncGroupBy()('AAABBAACCCCD')
    let next
    next = await iter.next()
    expect(next.value[0]).toBe('A')
    next = await iter.next()
    expect(next.value[0]).toBe('B')
    next = await iter.next()
    expect(next.value[0]).toBe('A')
    next = await iter.next()
    expect(next.value[0]).toBe('C')
    next = await iter.next()
    expect(next.value[0]).toBe('D')
    next = await iter.next()
    expect(next.done).toBe(true)
  })

  it('groupBy secondary', async function () {
    const iter = asyncGroupBy(undefined, 'AAABBAACCCCD')
    let next
    next = await iter.next()
    expect(next.value[0]).toBe('A')
    expect(await asyncToArray(next.value[1])).toEqual(['A', 'A', 'A'])
    next = await iter.next()
    expect(next.value[0]).toBe('B')
    expect(await asyncToArray(next.value[1])).toEqual(['B', 'B'])
    next = await iter.next()
    expect(next.value[0]).toBe('A')
    expect(await asyncToArray(next.value[1])).toEqual(['A', 'A'])
    next = await iter.next()
    expect(next.value[0]).toBe('C')
    expect(await asyncToArray(next.value[1])).toEqual(['C', 'C', 'C', 'C'])
    next = await iter.next()
    expect(next.value[0]).toBe('D')
    expect(await asyncToArray(next.value[1])).toEqual(['D'])
    next = await iter.next()
    expect(next.done).toBe(true)
  })

  it('groupBy secondary (consume partially)', async function () {
    const iter = asyncGroupBy(undefined, 'AAABBAACCCCD')
    let next
    next = await iter.next()
    expect(next.value[0]).toBe('A')
    expect((await next.value[1].next()).value).toBe('A')
    expect((await next.value[1].next()).value).toBe('A')
    expect((await next.value[1].next()).value).toBe('A')
    expect((await next.value[1].next()).done).toBe(true)
    next = await iter.next()
    expect(next.value[0]).toBe('B')
    // ...
  })

  it('groupBy of null returns empty iterable', async function () {
    expect(await asyncToArray(asyncGroupBy(undefined, null))).toEqual([])
  })
})
