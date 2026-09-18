import React, { forwardRef, useImperativeHandle, useRef } from "react";

const InputBoxSix = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    disableInput() {
      inputRef.current.disabled = true;
    },

    enableInput() {
      inputRef.current.disabled = false;
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

export default InputBoxSix;