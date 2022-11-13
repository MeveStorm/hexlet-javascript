const nrzi = (signal) => (signal === '|' ? '' : signal
  .replace(/\|¯|\|_/g, '1')
  .replace(/[_|¯]/g, '0'));

export default nrzi;
