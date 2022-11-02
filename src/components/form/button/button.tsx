import React from "react";
import classNames from "classnames";

import { ButtonProps } from "./button.types";

import styles from "./button.module.scss";

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  size = "normal",
  className,
  variant = "contained",
  ...attributes
}) => {
  const buttonClassNames = classNames(styles.button, styles[size], styles[variant], className);

  return (
    <button type={type} {...attributes} className={buttonClassNames}>
      {children}
    </button>
  );
};
