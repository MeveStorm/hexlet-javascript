const findIndexOfNearest = (numbers, findNearest) => {
  if (numbers.length === 0) {
    return null;
  }

  const diffs = numbers.map((number) => Math.abs(findNearest - number));
  const min = Math.min(...diffs);
  return diffs.indexOf(min);
};

export default findIndexOfNearest;
