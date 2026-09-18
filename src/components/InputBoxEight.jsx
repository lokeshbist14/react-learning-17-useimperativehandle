import React, { forwardRef, useImperativeHandle, useRef } from "react";

const InputBoxEight = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusAndSelect() {
      inputRef.current.focus();
      inputRef.current.select();
    },
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      defaultValue="Focus and Select Me"
    />
  );
});

export default InputBoxEight;