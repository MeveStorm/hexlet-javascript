const getDomainInfo = (domain) => {
  const hasScheme = domain.startsWith('https://');
  const scheme = hasScheme ? 'https' : 'http';
  const name = domain.replace(`${scheme}://`, '');

  return { scheme, name };
};

export default getDomainInfo;
