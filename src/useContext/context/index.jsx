import React, { createContext, useState } from "react";

export const CountContext = createContext();

export function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  const user = 'joao';

  return (
    <CountContext.Provider value={{ user, count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export default CountProvider;
