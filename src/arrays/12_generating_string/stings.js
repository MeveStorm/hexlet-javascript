/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const buildDefinitionList = (definitions) => {
  if (definitions.length === 0) return '';

  const parts = [];

  for (const item of definitions) {
    const definition = item[0];
    const description = item[1];

    parts.push(`<dt>${definition}</dt><dd>${description}</dd>`);
  }
  const innerValue = parts.join('');
  return `<dl>${innerValue}</dl>`;
};

export default buildDefinitionList;
