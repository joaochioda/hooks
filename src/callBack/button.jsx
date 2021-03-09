import { render } from "@testing-library/react";
import React, { useState, useEffect, memo } from "react";

function Button({ upState }) {

  useEffect(() => {
    console.log("re-render-button");
  });

  //problem
  useEffect(() => {
    console.log("Button: on Click change");
  }, [upState]);

  return <button onClick={upState}>Increment</button>;
}

export default memo(Button);
