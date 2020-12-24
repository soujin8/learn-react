import React, { createContext } from "react";
import ContextA from "./ContextA";

// createContext
export const UserContext = createContext({ name: "hachi", age: "22" });
export const HobbyContext = createContext("スノーボード");

type Props = {};

const ContextApp: React.FC<Props> = (props: Props) => {
  // eslint-disable-next-line
  const [user, setUser] = React.useState({
    name: "セイラ",
    age: "24",
  });
  // eslint-disable-next-line
  const [hobby, setHobby] = React.useState("キャンプ");

  return (
    <>
      <UserContext.Provider value={user}>
        <HobbyContext.Provider value={hobby}>
          <ContextA />
        </HobbyContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default ContextApp;
