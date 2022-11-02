import React from "react";

export type BadgeVariant = "success" | "warning" | "info" | "error";

export interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
}
