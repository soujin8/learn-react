import React, { useState, useRef, useCallback } from "react";

// const Ref: React.FC = () => {
//   const inputEl = useRef<HTMLDivElement>(null);
//   const [text, changeText] = useState("");
//   const handleClick = useCallback(() => {
//     changeText(inputEl.current?.value);
//   }, []);
//   return (
//     <>
//       <p>text : {text}</p>
//       <input ref={inputEl} type="text" />
//       <button onClick={handleClick}>set text</button>
//     </>
//   );
// };

// export default Ref;
