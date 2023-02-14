import fs from 'fs';
import getJsonFileData from '../../../src/objects/2_syntax/objects';

it('getJsonFileData', () => {
  const actual = getJsonFileData();
  const fileContent = fs.readFileSync('./src/objects/2_syntax/example.json', 'utf-8');
  const expected = JSON.parse(fileContent);
  expect(actual).toEqual(expected);
});
