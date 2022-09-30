import getWeekends from '../../../src/arrays/2_syntax/dates';

test('get', () => {
  expect(getWeekends()).toEqual(['saturday', 'sunday']);
  expect(getWeekends('long')).toEqual(['saturday', 'sunday']);
  expect(getWeekends('short')).toEqual(['sat', 'sun']);
});
