/* eslint-disable no-param-reassign */
import _ from 'lodash';

const normalize = (obj) => {
  obj.name = _.capitalize(obj.name);
  obj.description = obj.description.toLowerCase();
};

export default normalize;
