import countUniqChars from '../../../src/arrays/15_set_theory/string';

it('countUniqChars', () => {
  const text1 = 'You know nothing Jon Snow';
  const actual1 = countUniqChars(text1);
  expect(actual1).toBe(13);

  const text2 = 'Fear cuts deeper than swords.';
  const actual2 = countUniqChars(text2);
  expect(actual2).toBe(16);

  const text3 = '';
  const actual3 = countUniqChars(text3);
  expect(actual3).toBe(0);

  const text4 = '0';
  const actual4 = countUniqChars(text4);
  expect(actual4).toBe(1);
});
