/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getSuperSeriesWinner = (scores) => {
  const canada = 0;
  const ussr = 1;
  let winner = 0;

  for (const score of scores) {
    winner += Math.sign(score[canada] - score[ussr]);
  }

  if (winner === 0) {
    return null;
  }

  return winner >= 1 ? 'canada' : 'ussr';
};

export default getSuperSeriesWinner;
