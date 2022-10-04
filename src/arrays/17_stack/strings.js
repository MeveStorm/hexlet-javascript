/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
import _ from 'lodash';

const isBracketStructureBalanced = (brackets) => {
  const openingBrackets = ['(', '[', '{', '<'];
  const closingBrackets = [')', ']', '}', '>'];
  const stack = [];

  for (const bracket of brackets) {
    if (openingBrackets.includes(bracket)) {
      stack.push(openingBrackets.indexOf(bracket));
    } else if (_.last(stack) === closingBrackets.indexOf(bracket)) {
      stack.pop();
    } else return false;
  }
  return stack.length === 0;
};

export default isBracketStructureBalanced;
