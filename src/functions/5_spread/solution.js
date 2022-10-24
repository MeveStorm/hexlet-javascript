/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const convert = (...dates) => {
  const strDate = [];

  for (const date of dates) {
    strDate.push(new Date(...date).toDateString());
  }
  return strDate;
};

export default convert;
