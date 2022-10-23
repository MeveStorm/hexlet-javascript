/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const get = (obj, path) => {
  let result = obj;
  for (const key of path) {
    const hasProperty = Object.prototype.hasOwnProperty.call(result, key);
    if (!hasProperty) {
      return null;
    }
    result = result[key];
  }

  return result;
};

export default get;
