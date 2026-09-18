import React, { useRef } from "react";
import InputBox from "./components/InputBox";
import InputBoxTwo from "./components/InputBoxTwo";
import InputBoxThree from "./components/InputBoxThree";
import InputBoxFour from "./components/InputBoxFour";
import InputBoxFive from "./components/InputBoxFive";
import InputBoxSix from "./components/InputBoxSix";
import InputBoxSeven from "./components/InputBoxSeven";
import InputBoxEight from "./components/InputBoxEight";
import InputBoxNine from "./components/InputBoxNine";
import InputBoxTen from "./components/InputBoxTen";

function App() {
  // Example 1
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focusInput();
  };

  // Example 2
  const clearRef = useRef();

  const handleClear = () => {
    clearRef.current.clearInput();
  };

  // Example 3
  const resetRef = useRef();

  const handleReset = () => {
    resetRef.current.resetInput();
  };

  // Example 4
  const selectRef = useRef();

  const handleSelect = () => {
    selectRef.current.selectInput();
  };

  // Example 5
  const valueRef = useRef();

  const handleGetValue = () => {
    const value = valueRef.current.getValue();
    alert(value);
  };

  // Example 6
  const disableRef = useRef();

  const handleDisable = () => {
    disableRef.current.disableInput();
  };

  const handleEnable = () => {
    disableRef.current.enableInput();
  };

  // Example 7
  const typeRef = useRef();

  const handlePassword = () => {
    typeRef.current.changeToPassword();
  };

  const handleText = () => {
    typeRef.current.changeToText();
  };

  // Example 8
  const focusSelectRef = useRef();

  const handleFocusAndSelect = () => {
    focusSelectRef.current.focusAndSelect();
  };

  // Example 9
  const fontRef = useRef();

  const handleIncreaseFont = () => {
    fontRef.current.increaseFontSize();
  };

  // Example 10
  const backgroundRef = useRef();

  const handleChangeBackground = () => {
    backgroundRef.current.changeBackground();
  };

  return (
    <div>
      {/* Example 1 */}
      <div>
        <h2>useImperativeHandle Example 1</h2>

        <InputBox ref={inputRef} />

        <br />

        <button onClick={handleFocus}>
          Focus Input
        </button>
      </div>

      <hr />

      {/* Example 2 */}
      <div>
        <h2>useImperativeHandle Example 2</h2>

        <InputBoxTwo ref={clearRef} />

        <br />

        <button onClick={handleClear}>
          Clear Input
        </button>
      </div>

      <hr />

      {/* Example 3 */}
      <div>
        <h2>useImperativeHandle Example 3</h2>

        <InputBoxThree ref={resetRef} />

        <br />

        <button onClick={handleReset}>
          Reset Input
        </button>
      </div>

      <hr />

      {/* Example 4 */}
      <div>
        <h2>useImperativeHandle Example 4</h2>

        <InputBoxFour ref={selectRef} />

        <br />

        <button onClick={handleSelect}>
          Select Input
        </button>
      </div>

      <hr />

      {/* Example 5 */}
      <div>
        <h2>useImperativeHandle Example 5</h2>

        <InputBoxFive ref={valueRef} />

        <br />

        <button onClick={handleGetValue}>
          Get Input Value
        </button>
      </div>

      <hr />

      {/* Example 6 */}
      <div>
        <h2>useImperativeHandle Example 6</h2>

        <InputBoxSix ref={disableRef} />

        <br />

        <button onClick={handleDisable}>
          Disable Input
        </button>

        <button onClick={handleEnable}>
          Enable Input
        </button>
      </div>

      <hr />

      {/* Example 7 */}
      <div>
        <h2>useImperativeHandle Example 7</h2>

        <InputBoxSeven ref={typeRef} />

        <br />

        <button onClick={handlePassword}>
          Change to Password
        </button>

        <button onClick={handleText}>
          Change to Text
        </button>
      </div>

      <hr />

      {/* Example 8 */}
      <div>
        <h2>useImperativeHandle Example 8</h2>

        <InputBoxEight ref={focusSelectRef} />

        <br />

        <button onClick={handleFocusAndSelect}>
          Focus and Select
        </button>
      </div>

      <hr />

      {/* Example 9 */}
      <div>
        <h2>useImperativeHandle Example 9</h2>

        <InputBoxNine ref={fontRef} />

        <br />

        <button onClick={handleIncreaseFont}>
          Increase Font Size
        </button>
      </div>

      <hr />

      {/* Example 10 */}
      <div>
        <h2>useImperativeHandle Example 10</h2>

        <InputBoxTen ref={backgroundRef} />

        <br />

        <button onClick={handleChangeBackground}>
          Change Background
        </button>
      </div>
    </div>
  );
}

export default App;