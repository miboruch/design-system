import React from "react";

import styles from "./button.module.scss";

export type ButtonProps = {
  text: string;
  variant: "primary" | "secondary";
} & React.ButtonHTMLAttributes<any>;

export const Button: React.FC<ButtonProps> = ({ type, text, variant }) => {
  return (
    <button type={type} className={variant === "primary" ? styles.primary : styles.secondary}>
      {text}
    </button>
  );
};
