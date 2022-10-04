import bubbleSort from '../../../src/arrays/16_sorting_arrays/arrays';

it('bubbleSort', () => {
  expect(bubbleSort([])).toEqual([]);
  expect(bubbleSort([10, 1, 3])).toEqual([1, 3, 10]);
  expect(bubbleSort([0, 4, 0, 10, -3])).toEqual([-3, 0, 0, 4, 10]);
});
