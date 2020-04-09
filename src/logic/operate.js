import Big from 'big.js';

export default (() => {
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
    if (operation === '÷') {
      return x.div(y);
    }
    return 0;
  };

  return {
    operate,
  };
})();
