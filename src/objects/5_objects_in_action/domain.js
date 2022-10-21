const getDomainInfo = (domain) => {
  const isScheme = domain.startsWith('https://');
  const scheme = isScheme ? 'https' : 'http';
  const name = domain.replace(`${scheme}://`, '');

  return { scheme, name };
};

export default getDomainInfo;
