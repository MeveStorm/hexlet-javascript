/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getSameParity = (array) => {
  const isFirstNumberEven = Math.abs(array[0]) % 2 === 0;
  const result = [];

  for (const number of array) {
    const isNumberEven = Math.abs(number) % 2 === 0;
    if (isNumberEven === isFirstNumberEven) {
      result.push(number);
    }
  }
  return result;
};

export default getSameParity;
