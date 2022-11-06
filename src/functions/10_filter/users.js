const getGirlFriends = (users) => users
  .map(({ friends }) => friends)
  .flat()
  .filter(({ gender }) => gender === 'female');

export default getGirlFriends;
