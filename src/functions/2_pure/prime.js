/* eslint-disable no-console */
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const sayPrimeOrNot = (num) => {
  const result = isPrime(num) ? 'yes' : 'no';
  console.log(result);
};

export default sayPrimeOrNot;
