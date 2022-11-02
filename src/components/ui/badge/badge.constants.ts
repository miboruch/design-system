import { Variant } from "./badge.types";

import styles from "./badge.module.scss";

export const variantOptions: Record<Variant, { className: string }> = {
  success: { className: styles.successBadge },
  warning: { className: styles.warningBadge },
  info: { className: styles.badge },
  error: { className: styles.errorBadge },
};
