const make = (name, property) => {
  const defaultProperty = {
    state: 'moderating',
    createdAt: Date.now(),
  };
  return { ...defaultProperty, ...property, name };
};

export default make;
