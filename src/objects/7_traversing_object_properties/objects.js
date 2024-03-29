/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const pick = (data, expectedProperties) => {
  if (expectedProperties.length === 0) {
    return {};
  }

  const entries = Object.entries(data);
  const result = {};

  for (const [key, value] of entries) {
    if (expectedProperties.includes(key)) {
      result[key] = value;
    }
  }
  return result;
};

export default pick;
