import React, { forwardRef, useImperativeHandle, useRef } from "react";

const InputBox = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current.focus();
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

export default InputBox;