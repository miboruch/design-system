import React from "react";

type ButtonSize = "small" | "normal" | "large";
type ButtonType = "button" | "submit" | "reset";
type ButtonVariant = "contained" | "outlined" | "text";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  size?: ButtonSize;
  type?: ButtonType;
  variant?: ButtonVariant;
} & Omit<React.HTMLProps<HTMLButtonElement>, "size">;
