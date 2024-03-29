import cloneDeep from '../../../src/objects/10_cloning/objects';

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

it('deepClone', () => {
  const clonedData = cloneDeep(data);
  expect(clonedData).toEqual(data);
  expect(clonedData).not.toBe(data);
  expect(clonedData.key2).not.toBe(data.key2);
  expect(clonedData.key2.innerKey).not.toBe(data.key2.innerKey);
});
