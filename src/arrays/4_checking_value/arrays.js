const getValueByIndex = (array, index, defaultValue = null) => {
  const length = array.length - 1;
  const isPositive = index >= 0;

  return index <= length && isPositive ? array[index] : defaultValue;
};

export default getValueByIndex;
