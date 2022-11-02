import React from "react";

export type Variant = "success" | "warning" | "info" | "error";

export interface BadgeProps {
  variant?: Variant;
  children: React.ReactNode;
}
