import React from "react";

import { BadgeProps } from "./badge.types";
import { variantOptions } from "./badge.constants";

export const Badge: React.FC<BadgeProps> = ({ variant = "info", children }) => {
  return <div className={variantOptions[variant].className}>{children}</div>;
};
