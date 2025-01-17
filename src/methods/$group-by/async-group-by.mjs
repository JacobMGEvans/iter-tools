/**
 * @generated-from ./$group-by.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
import { WeakExchange } from '../../internal/queues';

async function fetch(state, getKey, expectedKey = {}) {
  const { iterator, weakExchange } = state;
  const { done, value } = await iterator.next();
  state.done = done;

  if (!done) {
    const key = await getKey(value, state.idx++);
    state.item = {
      value,
      key,
    };

    if (expectedKey !== key) {
      state.consumer = weakExchange.spawnConsumer();
    }

    weakExchange.push(state.item);
  }
}

async function returnIterator(state) {
  const { groupsConsumed, done, idx, nGroups, iterator } = state;

  if (groupsConsumed && !done && idx === nGroups) {
    if (typeof iterator.return === 'function') await iterator.return();
  }
}

async function fetchGroup(state, getKey, key) {
  while (!state.done && state.item.key === key) await fetch(state, getKey, key);
}

async function* generateGroup(state, getKey, key, consumer) {
  try {
    yield 'ensure finally';

    do {
      if (consumer.peek().key !== key) break;
      const cachedItem = consumer.shift();
      if (consumer.isEmpty()) await fetch(state, getKey, key);
      yield cachedItem.value;
    } while (!(state.done && consumer.isEmpty()));
  } finally {
    await returnIterator(state);
  }
}

export async function* asyncGroupBy(source, getKey) {
  const state = {
    iterator: null,
    idx: 0,
    weakExchange: new WeakExchange(),
    consumer: null,
    done: false,
    item: null,
    nGroups: 0,
    groupsConsumed: false,
  };

  const _getKey = getKey == null ? k => k : getKey;

  try {
    state.iterator = source[Symbol.asyncIterator]();
    state.consumer = state.weakExchange.spawnConsumer();
    await fetch(state, _getKey);

    while (!state.done) {
      const { key } = state.item;
      state.nGroups++;
      const group = await generateGroup(state, _getKey, key, state.consumer);
      await group.next(); // ensure finally

      yield [key, group];
      await fetchGroup(state, _getKey, key);
    }
  } finally {
    state.groupsConsumed = true;
    await returnIterator(state);
  }
}
export default asyncIterableCurry(asyncGroupBy);
