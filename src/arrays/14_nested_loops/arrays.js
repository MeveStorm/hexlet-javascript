/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
import _ from 'lodash';

const numberDuplicates = (searchItem, array) => {
  let count = 0;
  for (const item of array) {
    if (searchItem === item) {
      count += 1;
    }
  }
  return count;
};

const getSameCount = (arrayOne, arrayTwo) => {
  let count = 0;
  const uniqArrayOne = _.uniq(arrayOne);
  const uniqArrayTwo = _.uniq(arrayTwo);

  for (const itemOne of uniqArrayOne) {
    count += numberDuplicates(itemOne, uniqArrayTwo);
  }

  return count;
};

export default getSameCount;
