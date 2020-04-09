import operateModule from './operate';

const { operate } = operateModule;

export default (() => {
  const calculate = (calculator, buttonName) => {
    const operations = ['+', '-', 'X', '÷'];

    let { total, next, operation } = calculator;

    if (buttonName === '+/-') {
      if (next) {
        next = (+next * -1);
      }
      total = (+total * -1);
    }

    if (buttonName === '%') {
      if (next) {
        next *= 0.01;
      } else {
        total *= 0.01;
      }
    }

    if (buttonName === '=') {
      if (next) {
        total = operate(total, next, operation);
        next = null;
      }

      operation = buttonName;
    }

    if (operations.includes(buttonName)) {
      if (total && next) {
        total = operate(total, next, buttonName);
        next = null;
        operation = null;
      }
    }

    if (buttonName === 'AC') {
      total = null;
      next = null;
      operation = null;
    }
  };

  return {
    calculate,
  };
})();
