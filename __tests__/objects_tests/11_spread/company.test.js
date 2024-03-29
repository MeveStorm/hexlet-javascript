import make from '../../../src/objects/11_spread/company';

it('make 1', () => {
  const company = make('Hexlet');
  const now = Date.now();
  const expected = {
    name: 'Hexlet',
    state: 'moderating',
    createdAt: expect.any(Number),
  };
  expect(company).toMatchObject(expected);
  expect(company.createdAt).toBeLessThanOrEqual(now);
});

it('make 2', () => {
  const company = make('Hexlet', { website: 'hexlet.io', state: 'published' });
  const now = Date.now();
  const expected = {
    name: 'Hexlet',
    state: 'published',
    createdAt: expect.any(Number),
    website: 'hexlet.io',
  };
  expect(company).toMatchObject(expected);
  expect(company).toMatchObject(expected);
  expect(company.createdAt).toBeLessThanOrEqual(now);
});
