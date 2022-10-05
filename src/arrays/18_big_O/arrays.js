import _ from 'lodash';

const getIntersectionOfSortedArrays = (arrayOne, arrayTwo) => {
  const arrayIntersections = [];
  let indexOne = 0;
  let indexTwo = 0;
  const arrayOneUniq = _.uniq(arrayOne);
  const arrayTwoUniq = _.uniq(arrayTwo);

  while (indexOne < arrayOneUniq.length) {
    if (arrayOneUniq[indexOne] === arrayTwoUniq[indexTwo]) {
      arrayIntersections.push(arrayOneUniq[indexOne]);
      indexOne += 1;
      indexTwo += 1;
    } else if (arrayOneUniq[indexOne] > arrayTwoUniq[indexTwo]) {
      indexTwo += 1;
    } else {
      indexOne += 1;
    }
  }
  return arrayIntersections;
};

export default getIntersectionOfSortedArrays;
