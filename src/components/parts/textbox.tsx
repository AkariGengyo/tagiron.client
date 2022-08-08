import React, { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"input">;

const Textbox: React.FC<Props> = ({ className, ...props }) => {
  return (
    <input
      className={`min-h-[40px] w-full rounded border bg-gray-100 px-3 py-1.5 ${className}`}
      {...props}
    />
  );
};

export default Textbox;
