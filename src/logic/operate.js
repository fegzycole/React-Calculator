import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = new Big(numberOne);
  const y = new Big(numberTwo);

  if (operation === '-') {
    return x.minus(y);
  }

  if (operation === '+') {
    return x.plus(y);
  }

  if (operation === 'X') {
    return x.mul(y);
  }

  return x.div(y);
};

export default operate;
