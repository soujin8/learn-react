import React, { useState } from "react";

type Props = {
  count: number;
  setCount: (value: number) => void;
};

const Children: React.FC<Props> = (props: Props) => {
  const { count, setCount } = props;
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};
export default Children;
