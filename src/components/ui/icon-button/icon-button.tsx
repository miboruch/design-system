import React from "react";
import classNames from "classnames";

import { IconButtonProps } from "./icon-button.types";
import { variantOptions } from "./icon-button.constants";

import styles from "./icon-button.module.scss";

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  onClick,
  variant = "add",
  size = "normal",
  className,
}) => {
  const buttonClassNames = classNames(variantOptions[variant].className, styles[size], className);

  return (
    <button type="button" onClick={onClick} className={buttonClassNames}>
      {variantOptions[variant].icon}
      {children}
    </button>
  );
};
