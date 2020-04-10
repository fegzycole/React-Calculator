/* eslint-disable import/extensions */
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let x;
  let y;

  if (numberOne) {
    x = new Big(numberOne);
  }

  if (numberTwo) {
    y = new Big(numberTwo);
  }

  if (operation === '-') {
    return x.minus(y).valueOf();
  }

  if (operation === '+') {
    return x.plus(y).valueOf();
  }

  if (operation === 'X') {
    return x.mul(y).valueOf();
  }

  if (operation === '÷' && numberTwo === '0') {
    return 'NaN';
  }

  if (operation === '%') {
    if (numberOne) {
      return x.mul(0.01).valueOf();
    }
    if (numberTwo) {
      return y.mul(0.01).valueOf();
    }
  }

  return x.div(y).valueOf();
};

export default operate;
