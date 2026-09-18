import React, { forwardRef, useImperativeHandle, useRef } from "react";

const InputBoxFive = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    getValue() {
      return inputRef.current.value;
    },
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Type something..."
    />
  );
});

export default InputBoxFive;