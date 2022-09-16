const fib = (n) => {
  if (n === 0) return 0;

  let firstNum = 0;
  let secondNum = 1;

  for (let i = 1; i < n; i += 1) {
    const num = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = num;
  }
  return secondNum;
};

export default fib;
