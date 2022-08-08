import React, { ComponentPropsWithoutRef } from "react";

type Props = {
  styleType?: "outlined" | "filled";
} & ComponentPropsWithoutRef<"button">;

const Button: React.FC<Props> = ({
  children,
  className,
  styleType = "filled",
  ...props
}) => {
  let colorStyle = "";
  switch (styleType) {
    case "filled":
      colorStyle = `bg-gray-700 text-white ${
        props.disabled ? "opacity-50" : "hover:opacity-50"
      }`;
      break;
    case "outlined":
      colorStyle = `text-gray-700 border-2 border-gray-700 ${
        props.disabled ? "opacity-50" : "hover:opacity-50"
      }`;
      break;
  }
  return (
    <button
      className={
        `min-h-[40px] w-full rounded px-4 py-1.5 font-bold ${colorStyle} ` +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
