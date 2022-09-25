/* eslint-disable no-param-reassign, import/prefer-default-export */
const reverse = (array) => {
  const lastIndex = array.length - 1;
  const middleIndex = array.length / 2;

  for (let i = 0; i < middleIndex; i += 1) {
    const replaceElement = array[lastIndex - i];

    array[lastIndex - i] = array[i];
    array[i] = replaceElement;
  }
};

export { reverse };
