import buildDefinitionList from '../../../src/arrays/12_generating_string/stings';

it('StringsTest', () => {
  const definitions1 = [
    ['key', 'value'],
    ['key2', 'value2'],
  ];

  const actual1 = buildDefinitionList(definitions1);
  const expected1 = '<dl><dt>key</dt><dd>value</dd><dt>key2</dt><dd>value2</dd></dl>';
  expect(actual1).toBe(expected1);

  const actual2 = buildDefinitionList([]);
  expect(actual2).toBe('');
});
