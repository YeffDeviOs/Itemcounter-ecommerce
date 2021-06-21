import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import './itemCount.css';

function Counter() {
  const [number, setNumber] = useState(0);

  const handleUp = () => {
    setNumber(number + 1);
  };

  const handleDown = () => {
    setNumber(number - 1);
  };

  return (
    <div className="Counter">
      <h1>Añadir al Carrito</h1>
      <p>{number}</p>
      <Button attached="left" onClick={handleDown}>-</Button>
      <Button attached="right"onClick={handleUp}>+</Button>
    </div>
  );
}

export default Counter;
