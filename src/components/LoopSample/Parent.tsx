import React, { useState } from "react";
import Children from "./Children";

const Parent: React.FC = () => {
  const [count, setCount] = useState(0);
  const onCount = (value: number) => {
    setCount(value);
  };
  return (
    <>
      <button onClick={() => onCount(count + 0)}>Reset</button>
      <Children count={count} setCount={onCount} />
    </>
  );
};
export default Parent;
