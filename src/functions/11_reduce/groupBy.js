const groupBy = (objArr, propertyGroup) => {
  const cb = (acc, obj) => {
    if (!Object.hasOwn(acc, obj[propertyGroup])) {
      acc[obj[propertyGroup]] = [];
    }
    acc[obj[propertyGroup]].push(obj);
    return acc;
  };

  return objArr.reduce(cb, {});
};

export default groupBy;
