import React from "react";

import CodeDictation from "./codeDictation";
import CodeInput from "./codeInput";

const Window = (props) => {
  return (
    <React.Fragment>
      <CodeDictation />
      <CodeInput />
    </React.Fragment>
  );
};

export default Window;
