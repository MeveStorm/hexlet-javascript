/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
/* eslint-disable no-continue */

const getTotalAmount = (wallet, currencyMask) => {
  let sum = 0;

  for (const money of wallet) {
    const currency = money.slice(0, 3);
    const amountMoney = Number(money.slice(4));

    if (currency !== currencyMask) {
      continue;
    }
    sum += amountMoney;
  }
  return sum;
};

export default getTotalAmount;

// -----------------------------------------------------
// const getTotalAmount = (wallet, currencyMask) => {
//   let sum = 0;
//
//   for (const money of wallet) {
//     const currency = money.slice(0, 3);
//     const amountMoney = Number(money.slice(4));
//
//     if (currency === currencyMask) {
//       sum += amountMoney;
//     }
//   }
//   return sum;
// };
//
// export default getTotalAmount;
