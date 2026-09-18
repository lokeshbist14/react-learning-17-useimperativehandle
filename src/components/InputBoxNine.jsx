import React, { forwardRef, useImperativeHandle, useRef } from "react";

const InputBoxNine = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    increaseFontSize() {
      inputRef.current.style.fontSize = "30px";
    },
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      defaultValue="Increase My Font Size"
    />
  );
});

export default InputBoxNine;