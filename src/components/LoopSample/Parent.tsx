import React, { useState } from "react";
import Children from "./Children";
import Brother from "./Brother";

const Parent: React.FC = () => {
  const [count, setCount] = useState(0);
  const onCount = (value: number) => {
    setCount(value);
  };
  return (
    <>
      <Children count={count} setCount={onCount} />
      <Brother count={count} setCount={onCount} />
    </>
  );
};
export default Parent;
