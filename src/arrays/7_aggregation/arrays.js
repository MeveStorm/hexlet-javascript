/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const calculateSum = (arrays) => {
  let sum = 0;

  for (const number of arrays) {
    if (number % 3 === 0) {
      sum += number;
    }
  }
  return sum;
};

export default calculateSum;
