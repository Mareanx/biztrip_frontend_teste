// components/types.ts
import { ReactNode } from "react";
import { CSS } from "@stitches/react";

export type InputProps = {
  inputSize?: "sm" | "md" | "lg";
  label?: string;
  errorMessage?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  css?: CSS;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value?: string;
  name?: string;
};
