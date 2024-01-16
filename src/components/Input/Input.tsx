import React from "react";

function Input(props: React.ComponentPropsWithoutRef<"input">) {
  return <input type="text" className="p-2 outline" {...props} />;
}

export default Input;
