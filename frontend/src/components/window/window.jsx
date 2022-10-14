import React from "react";

import CodeDictation from "./codeDictation";
// import CodeInput from "./codeInput";

import "./window.css"

const Window = (props) => {
  return (
    <div className="window">
      <CodeDictation />
      <CodeDictation />
    </div>
  );
};

export default Window;
