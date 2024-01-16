import React from "react";

type InputProps = React.ComponentPropsWithoutRef<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input type="text" className="p-2 outline-none" {...props} ref={ref} />
  );
});

export default Input;
