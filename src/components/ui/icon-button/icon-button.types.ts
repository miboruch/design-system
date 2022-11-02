import React from "react";

export type IconButtonVariant = "add" | "edit" | "delete";
export type IconButtonSize = "small" | "normal" | "large";

export interface IconButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  className?: string;
}
