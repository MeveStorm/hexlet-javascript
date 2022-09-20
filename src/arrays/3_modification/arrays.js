const swap = (array) => {
  const newArray = array;
  const firstElement = newArray[0];
  const lastIndex = newArray.length - 1;

  if (newArray.length < 2) {
    return newArray;
  }

  newArray[0] = newArray[lastIndex];
  newArray[lastIndex] = firstElement;

  return newArray;
};

export default swap;
