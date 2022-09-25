/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const calculateAverage = (temperatures) => {
  const quantity = temperatures.length;
  let sum = 0;

  if (quantity === 0) {
    return null;
  }

  for (const temperature of temperatures) {
    sum += temperature;
  }

  return sum / quantity;
};

export default calculateAverage;
