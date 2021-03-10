import React, { useContext } from "react";

import { CountContext } from "./context";

function Counter() {
  const { user, count } = useContext(CountContext);

  return (
    <div>
      <span>{user}</span>
      <span>{count}</span>
    </div>
  );
}

export default Counter;
