const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const getLcm = (a, b) => Math.abs(a * b) / getGcd(a, b);

export { getGcd, getLcm };
