import React, { forwardRef, useImperativeHandle, useRef } from "react";

const InputBoxTen = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    changeBackground() {
      inputRef.current.style.backgroundColor = "lightblue";
    },
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      defaultValue="Change My Background"
    />
  );
});

export default InputBoxTen;