import React from "react";
import classNames from "classnames";
import { useField } from "formik";

import { InputProps } from "./form-input.types";

import styles from "./form-input.module.scss";

export const FormInput = ({
  name,
  label,
  type = "text",
  multiline,
  minRows = 4,
  maxRows = 8,
  helperText,
  containerClassName,
  className,
  size = "normal",
  ...rest
}: InputProps) => {
  const [field, { touched, error }] = useField(name);

  const textareaMinHeight: React.CSSProperties = minRows ? { minHeight: `${minRows * 25}px` } : {};
  const textareaMaxHeight: React.CSSProperties = maxRows ? { maxHeight: `${maxRows * 25}px` } : {};

  const textareaStyles = { ...textareaMinHeight, ...textareaMaxHeight };

  const showError = touched && Boolean(error);

  const inputClassNames = classNames(styles.input, className, { [styles.inputError]: showError }, styles[size]);
  const textareaClassNames = classNames(styles.textarea, className, { [styles.inputError]: showError }, styles[size]);

  return (
    <div className={classNames(styles.container, containerClassName)}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {multiline && <textarea id={name} {...field} className={textareaClassNames} style={textareaStyles} {...rest} />}
      {!multiline && <input id={name} {...field} className={inputClassNames} type={type} {...rest} />}
      {Boolean(helperText) && <p className={styles.helper}>{helperText}</p>}
      {touched && Boolean(error) && <p className={styles.errorHelper}>{error}</p>}
    </div>
  );
};
