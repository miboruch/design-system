import React from "react";

export interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  containerClassName?: string;
  boxClassName?: string;
}
