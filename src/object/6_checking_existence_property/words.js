/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
import _ from 'lodash';

const countWords = (sentence) => {
  const sentenceLower = sentence.toLowerCase();
  const words = _.words(sentenceLower);
  const result = {};

  for (const word of words) {
    result[word] = (result[word] ?? 0) + 1;
  }

  return result;
};

export default countWords;
