// components/Button/index.tsx
import { forwardRef } from "react";
import { Button } from "./styled";
import type { ButtonProps } from "./types";

export const ButtonElement = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading, icon, children, ...props }, ref) => {
    return (
      <Button ref={ref} aria-disabled={loading || props.disabled} {...props}>
        {icon && <span>{icon}</span>}
        {children}
      </Button>
    );
  }
);

ButtonElement.displayName = "ButtonElement";
