import React, { useState, useEffect, useCallback } from "react";
import Button from "./button";

function CallBack() {
  const [count, setCount] = useState(1);
  const [changeColor, setChangeColor] = useState(false);

  useEffect(() => {
    console.log("re-render");
  });

  return (
    <div>
      <div>
        {/* <Button upState={() => setCount(prev => prev + 1)} fixed={'fixed'}/> */}
        <Button upState={useCallback(() => setCount((prev) => prev + 1), [])} />
        <span>{count}</span>
      </div>
    </div>
  );
}

export default CallBack;
