import React, { forwardRef, useImperativeHandle, useRef } from "react";

const InputBoxThree = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    resetInput() {
      inputRef.current.value = "Default Text";
      inputRef.current.focus();
    },
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      defaultValue="Default Text"
    />
  );
});

export default InputBoxThree;