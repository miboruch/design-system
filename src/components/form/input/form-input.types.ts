import { HTMLAttributes } from "react";

type InputAttributes = HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

export type InputProps = {
  name: string;
  label: string;
  type?: string;
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
  helperText?: string;
  containerClassName?: string;
  maxLength?: number;
  size?: "small" | "normal" | "large";
} & InputAttributes;
