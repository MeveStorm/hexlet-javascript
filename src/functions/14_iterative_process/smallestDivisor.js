const smallestDivisor = (num) => {
  const iter = (acc) => {
    const maxPossibleDiv = num / 2;

    if (acc > maxPossibleDiv) {
      return num;
    }

    if (num % acc === 0) {
      return acc;
    }

    return iter(acc + 1);
  };

  return iter(2);
};
export default smallestDivisor;
