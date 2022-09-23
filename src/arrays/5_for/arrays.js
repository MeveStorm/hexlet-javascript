const addPrefix = (names, prefix) => {
  const newNames = [];

  for (let i = 0; i < names.length; i += 1) {
    newNames[i] = `${prefix} ${names[i]}`;
  }

  return newNames;
};

export default addPrefix;
