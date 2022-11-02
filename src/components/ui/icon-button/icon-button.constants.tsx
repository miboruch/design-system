import React from "react";

import { IconButtonVariant } from "./icon-button.types";

import AddCircle from "assets/icons/add-circle.svg";
import Edit from "assets/icons/edit.svg";
import Delete from "assets/icons/delete.svg";

import styles from "./icon-button.module.scss";

export const variantOptions: Record<IconButtonVariant, { icon: React.ReactNode; className: string }> = {
  add: { icon: <AddCircle />, className: styles.button },
  edit: { icon: <Edit />, className: styles.button },
  delete: { icon: <Delete />, className: styles.deleteButton },
};
