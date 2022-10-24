import _ from 'lodash';

export default (...num) => (num.length === 0 ? null : _.sum(num) / num.length);
