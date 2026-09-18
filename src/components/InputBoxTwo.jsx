import React, { forwardRef, useImperativeHandle, useRef } from "react";

const InputBoxTwo = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    clearInput() {
      inputRef.current.value = "";
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

export default InputBoxTwo;