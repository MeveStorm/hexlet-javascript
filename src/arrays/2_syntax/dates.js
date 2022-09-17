const getWeekends = (formReturn) => {
  const weekendLong = ['saturday', 'sunday'];
  const weekendShort = ['sat', 'sun'];

  return formReturn === 'short' ? weekendShort : weekendLong;
};

export default getWeekends;
