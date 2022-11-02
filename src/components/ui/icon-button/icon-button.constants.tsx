import React from "react";

import { Variant } from "./icon-button.types";

import { ReactComponent as AddCircle } from "assets/icons/add-circle.svg";
import { ReactComponent as Edit } from "assets/icons/edit.svg";
import { ReactComponent as Delete } from "assets/icons/delete.svg";

import styles from "./icon-button.module.scss";

export const variantOptions: Record<Variant, { icon: React.ReactNode; className: string }> = {
  add: { icon: <AddCircle />, className: styles.button },
  edit: { icon: <Edit />, className: styles.button },
  delete: { icon: <Delete />, className: styles.deleteButton },
};
