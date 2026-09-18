import React, { forwardRef, useImperativeHandle, useRef } from "react";

const InputBoxFour = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    selectInput() {
      inputRef.current.select();
    },
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      defaultValue="Select this text"
    />
  );
});

export default InputBoxFour;