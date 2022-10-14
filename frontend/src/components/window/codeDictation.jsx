const codeDictation = (props) => {
  const codeline = []
  for (let index = 1; index < 30; index++) {
    codeline.push(index)
  }

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
    <div className="code-dictation">
      <div className="tab-bar">
        <div className="tab-bar__tab">
          <div className="tab-bar__tab-name">
            TypeSpeed.jsx
          </div>
          <div className="tab-bar__tab-close">
            {/* <i className="far fa-times"></i> */}
            x
          </div>
        </div>
      </div>
      <div className="tab-window">
        <div className="tab-window__wrapper">
          <div className="tab-window__line">
          {codeline.map((line) => (
              <span className="tab-window__line-num" key={line}>{line}</span>
          ))}
          </div>
          <div className="tab-window__input">
            {codes.map((code) => (
                <span className="tab-window__code" key={code}>{code}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default codeDictation