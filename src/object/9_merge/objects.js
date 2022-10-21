import _ from 'lodash';

const fill = (obj, keys, data) => {
  const filteredData = keys.length === 0 ? data : _.pick(data, keys);
  return Object.assign(obj, filteredData);
};

export default fill;
