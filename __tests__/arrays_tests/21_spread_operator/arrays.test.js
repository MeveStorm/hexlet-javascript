import { flatten } from '../../../src/arrays/21_spread_operator /arrays';

test('flatten', () => {
  expect(flatten([])).toEqual([]);
  expect(flatten([1, [3, 2], 9])).toEqual([1, 3, 2, 9]);
  expect(flatten([[9, 8], [], [0], 10])).toEqual([9, 8, 0, 10]);
  expect(flatten([1, [[2], [3]], [9]])).toEqual([1, [2], [3], 9]);
});
