import swap from '../../src/arrays/3_modification/arrays';

test('get', () => {
  expect(swap([])).toEqual([]);
  expect(swap([1])).toEqual([1]);
  expect(swap([1, 2])).toEqual([2, 1]);
  expect(swap(['one', 'two', 'three'])).toEqual(['three', 'two', 'one']);
  expect(swap(['one', 'two', 'three', 'four'])).toEqual(['four', 'two', 'three', 'one']);
});
