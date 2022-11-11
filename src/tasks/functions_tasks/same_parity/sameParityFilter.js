const isEven = (number) => number % 2 === 0;

const sameParity = (numbers) => {
  const [desiredNumber] = numbers;
  const desiredParity = isEven(desiredNumber);

  return numbers.filter((number) => desiredParity === isEven(number));
};

export default sameParity;
