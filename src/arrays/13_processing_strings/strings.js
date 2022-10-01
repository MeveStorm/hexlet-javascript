/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const makeCensored = (sentence, stopWords) => {
  const separator = ' ';
  const words = sentence.split(separator);
  const newSentence = [];

  for (const word of words) {
    const newWord = stopWords.includes(word) ? '$#%!' : word;
    newSentence.push(newWord);
  }
  return newSentence.join(separator);
};

export default makeCensored;
