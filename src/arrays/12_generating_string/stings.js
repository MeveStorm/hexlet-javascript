/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const buildDefinitionList = (definitions) => {
  if (definitions.length === 0) return '';

  const parts = [];

  for (const [definition, description] of definitions) {
    parts.push(`<dt>${definition}</dt><dd>${description}</dd>`);
  }
  const innerValue = parts.join('');
  return `<dl>${innerValue}</dl>`;
};

export default buildDefinitionList;
