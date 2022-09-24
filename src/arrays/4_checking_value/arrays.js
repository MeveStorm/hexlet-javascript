const getValueByIndex = (array, index, defaultValue = null) => {
  const lastIndex = array.length - 1;
  const isPositive = index >= 0;

  return index <= lastIndex && isPositive ? array[index] : defaultValue;
};

export default getValueByIndex;
