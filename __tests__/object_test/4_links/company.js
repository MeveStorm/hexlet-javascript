import is from '../../../src/object/4_links/company';

it('is 1', () => {
  const company1 = {};
  const company2 = {};
  expect(is(company1, company2)).toBe(true);
});

it('is 2', () => {
  const company1 = { name: 'Hexlet' };
  const company2 = { name: 'Google' };
  expect(is(company1, company2)).toBe(false);
});

it('is 3', () => {
  const company1 = { name: 'Hexlet' };
  const company2 = { name: 'Hexlet' };
  expect(is(company1, company2)).toBe(true);
});

it('is 4', () => {
  const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
  const company2 = { name: 'Hexlet', state: 'published', website: 'https://code-basics.com' };
  expect(is(company1, company2)).toBe(false);
});

it('is 5', () => {
  const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
  const company2 = { name: 'Hexlet', website: 'https://hexlet.io', state: 'published' };
  expect(is(company1, company2)).toBe(true);
});
