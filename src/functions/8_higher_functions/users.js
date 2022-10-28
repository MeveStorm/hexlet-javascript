import _ from 'lodash';

const takeOldest = (users, numOutput = 1) => {
  const userSortAge = _.sortBy(users, ({ birthday }) => Date.parse(birthday));
  return userSortAge.slice(0, numOutput);
};

export default takeOldest;
