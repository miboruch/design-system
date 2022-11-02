import React from "react";

type Size = "small" | "normal" | "large";
type ButtonType = "button" | "submit" | "reset";
type Variant = "contained" | "outlined" | "text";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  size?: Size;
  type?: ButtonType;
  variant?: Variant;
} & Omit<React.HTMLProps<HTMLButtonElement>, "size">;
