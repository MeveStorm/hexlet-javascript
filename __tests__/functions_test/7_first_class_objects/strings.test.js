import run from '../../../src/functions/7_first_class_objects/strings';

test('strings test', () => {
  expect(run('')).toBeNull();
  expect(run('cb')).toBeNull();
  expect(run('power')).toBe('rewo');
  expect(run('kids')).toBe('sdik');
  expect(run('hexlet')).toBe('telx');
});
