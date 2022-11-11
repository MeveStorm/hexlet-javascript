const sequenceSum = (begin, end) => {
  if (begin > end) {
    return NaN;
  }
  if (begin === end) {
    return end;
  }
  return begin + sequenceSum(begin + 1, end);
};

export default sequenceSum;
