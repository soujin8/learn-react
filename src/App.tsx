import React from "react";
import ContextApp from "./components/ContextSample/ContextApp";
import Reducer from "./components/ReducerSample/Reducer";
import Counter from "./components/StateSample/Counter";
import Callback from "./components/CallbackSample/Callback";
import Ref from "./components/RefSample/Ref";

const App: React.FC = () => {
  return (
    <>
      {/* <ContextApp /> */}
      {/* <Counter /> */}
      {/* <Reducer /> */}
      {/* <Callback /> */}
      <Ref />
    </>
  );
};
export default App;
