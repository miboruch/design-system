import React from "react";

import styles from "./button.module.scss";

export type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary";
} & React.ButtonHTMLAttributes<any>;

export const Button: React.FC<ButtonProps> = ({ type, variant, children, ...rest }) => {
  return (
    <button
      type={type}
      className={variant === "primary" ? styles.primary : styles.secondary}
      {...rest}
    >
      {children}
    </button>
  );
};
