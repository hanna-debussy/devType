import { React, useState } from "react";
import $ from 'jquery';

const CodeInput = (props) => {
  const codeline = [];
  for (let index = 1; index < 30; index++) {
    codeline.push(index);
  }

  const [inputValue, setInputValue] = useState([]);

  const inputChangeHandler = (event, idx) => {
    var newInput = [...inputValue];
    newInput[idx] = event.target.value;
    console.log(newInput);
    setInputValue(newInput);
  };

  const nextLineHandler = (event, idx) => {
    if (event.key === "Enter") {
      // document.getElementsByClassName(`tab-window__input${idx + 1}`).focus()
      $(`.tab-window__input${idx + 1}`).focus()
    }
  }

  return (
    <div className="code-dictation">
      <div className="tab-bar">
        <div className="tab-bar__tab">
          <div className="tab-bar__tab-name">TypeSpeed.jsx</div>
          <div className="tab-bar__tab-close">
            {/* <i className="far fa-times"></i> */}x
          </div>
        </div>
      </div>
      <div className="tab-window">
        <div className="tab-window__wrapper tab-indow__right">
          <div className="tab-window__line">
            {codeline.map((input) => (
              <span className="tab-window__line-num" key={input}>
                {input}
              </span>
            ))}
          </div>
          <div className="tab-window__write">
            <div className="tab-window__code">
              {props.codes.map((input, idx) => (
                <span className="tab-window__code" key={idx}>
                  {inputValue[idx]}
                </span>
              ))}
            </div>
            <div className="tab-window__input">
              {props.codes.map((code, idx) => (
                <input
                  className={`tab-window__input${idx}`}
                  type="text"
                  onChange={(event) => inputChangeHandler(event, idx)}
                  onKeyPress={(event) => nextLineHandler(event, idx)}
                  key={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeInput;
