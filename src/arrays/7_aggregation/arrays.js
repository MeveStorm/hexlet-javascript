/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const calculateSum = (array) => {
  let sum = 0;

  for (const number of array) {
    if (number % 3 === 0) {
      sum += number;
    }
  }
  return sum;
};

export default calculateSum;
