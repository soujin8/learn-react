import React, { createContext } from "react";
import ContextApp from "./components/ContextSample/ContextApp";
import Counter from "./components/StateSample/Counter";

const App: React.FC = () => {
  return (
    <>
      {/* <ContextApp /> */}
      <Counter />
    </>
  );
};
export default App;
