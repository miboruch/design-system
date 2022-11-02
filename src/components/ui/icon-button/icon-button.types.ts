import React from "react";

export type Variant = "add" | "edit" | "delete";
export type Size = "small" | "normal" | "large";

export interface IconButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}
