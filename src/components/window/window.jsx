import React from "react";

import CodeDictation from "./codeDictation";
import CodeInput from "./codeInput";

import "./window.css"

const Window = (props) => {


  const codes = [
    "import React, { useState } from 'react';",
    "",
    "function Example() {",
    "const [count, setCount] = useState(0);",
    "return (",
    "<div>",
    "<p>You clicked {count} times</p>",
    "<button onClick={() => setCount(count + 1)}>",
    "Click me",
    "</button>",
    "</div>",
    ");",
    "}"
  ]

  return (
    <div className="window">
      <CodeDictation codes={codes} />
      <CodeInput codes={codes} />
    </div>
  );
};

export default Window;
