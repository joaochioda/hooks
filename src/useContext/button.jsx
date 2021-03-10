import React, { useContext } from "react";

import { CountContext } from './context';

function ButtonIncrement() {
  const { setCount } = useContext(CountContext);

  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      increment
    </button>
  );
}

export default ButtonIncrement;
