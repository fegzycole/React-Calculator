import React, { useState } from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const [buttons] = useState([
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ]);

  return (
    <div className="panel">
      {buttons.map((group, outterIndex) => (
        <div className="btn-group" key={}>
          {group.map}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;
