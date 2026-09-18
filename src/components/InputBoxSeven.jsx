import React, { forwardRef, useImperativeHandle, useRef } from "react";

const InputBoxSeven = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    changeToPassword() {
      inputRef.current.type = "password";
    },

    changeToText() {
      inputRef.current.type = "text";
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

export default InputBoxSeven;