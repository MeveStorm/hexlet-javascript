import fs from 'fs';
import getJsonFileData from '../../../src/object/2_syntax/object';

it('getJsonFileData', () => {
  const actual = getJsonFileData();
  const fileContent = fs.readFileSync('./src/object/2_syntax/example.json', 'utf-8');
  const expected = JSON.parse(fileContent);
  expect(actual).toEqual(expected);
});
