const make = (name, properties) => {
  const defaultProperties = {
    state: 'moderating',
    createdAt: Date.now(),
  };
  return { ...defaultProperties, ...properties, name };
};

export default make;
