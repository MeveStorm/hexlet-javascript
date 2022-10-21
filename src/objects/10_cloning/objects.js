/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
import isObject from 'lodash/isObject.js';

const cloneDeep = (obj) => {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    result[key] = isObject(value) ? cloneDeep(value) : value;
  }
  return result;
};

export default cloneDeep;
