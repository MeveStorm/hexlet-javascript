import { getGcd, getLcm } from './utils.js';

const makeRational = (numer, denom) => {
  const gcd = getGcd(numer, denom);

  return { numer: numer / gcd, denom: denom / gcd };
};

const getNumer = (rat) => rat.numer;

const getDenom = (rat) => rat.denom;

const findNumerCommonDenom = (rat, lcm) => getNumer(rat) * (lcm / getDenom(rat));

const add = (rat1, rat2) => {
  const lcm = getLcm(getDenom(rat1), getDenom(rat2));
  const sum = findNumerCommonDenom(rat1, lcm) + findNumerCommonDenom(rat2, lcm);

  return makeRational(sum, lcm);
};

const sub = (rat1, rat2) => {
  const lcm = getLcm(getDenom(rat1), getDenom(rat2));
  const subtract = findNumerCommonDenom(rat1, lcm) - findNumerCommonDenom(rat2, lcm);

  return makeRational(subtract, lcm);
};

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

export {
  makeRational,
  getNumer,
  getDenom,
  add,
  sub,
  ratToString,
};
