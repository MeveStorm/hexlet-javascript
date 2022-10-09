/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

export default (companyOne, companyTwo) => {
  const keys = ['name', 'state', 'website'];

  for (const key of keys) {
    if (companyOne[key] !== companyTwo[key]) {
      return false;
    }
  }
  return true;
};
