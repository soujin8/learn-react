import React, { useState } from "react";
import { Card, CardContent, Button } from "@material-ui/core";

type Props = {
  count: number;
  setCount: (value: number) => void;
};

const Children: React.FC<Props> = (props: Props) => {
  const { count, setCount } = props;
  return (
    <>
      <Card>
        <CardContent>
          <h1>Bro2</h1>
          <p>Count: {count}</p>
          <Button onClick={() => setCount(0)}>Reset</Button>
          <Button onClick={() => setCount(count - 1)}>-</Button>
          <Button onClick={() => setCount(count + 1)}>+</Button>
        </CardContent>
      </Card>
    </>
  );
};
export default Children;
