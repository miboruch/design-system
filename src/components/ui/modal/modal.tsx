import React from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";

import { ModalProps } from "./modal.types";

import Close from "assets/icons/close.svg";

import styles from "./modal.module.scss";

/*
  Create a new node in public/index.html with id='modals'
 */

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  handleClose,
  children,
  containerClassName,
  boxClassName,
}) => {
  const containerClasses = classNames(
    styles.container,
    containerClassName,
    { [styles.open]: isOpen },
    { [styles.close]: !isOpen },
  );

  const boxClasses = classNames(styles.box, boxClassName);

  const modalDomNode = document.getElementById("modals") || document.body;

  return createPortal(
    <div className={containerClasses}>
      <div className={boxClasses}>
        <button type="button" onClick={handleClose} className={styles.iconButton}>
          <Close />
        </button>
        {children}
      </div>
    </div>,
    modalDomNode,
  );
};
