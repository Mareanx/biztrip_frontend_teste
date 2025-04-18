import { forwardRef } from "react";
import type { InputProps } from "./types";
import {
  InputWrapper,
  Label,
  InputContainer,
  StyledInput,
  IconWrapper,
  ErrorMessage,
} from "./styled";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputSize,
      label,
      errorMessage,
      iconLeft,
      iconRight,
      fullWidth,
      css,
      id,
      onChange, 
      ...props
    },
    ref
  ) => {
    const hasError = !!errorMessage;

    return (
      <InputWrapper fullWidth={fullWidth} css={css}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <InputContainer size={inputSize} error={hasError} fullWidth={fullWidth}>
          {iconLeft && <IconWrapper>{iconLeft}</IconWrapper>}
          <StyledInput
            ref={ref}
            id={id}
            onChange={onChange} 
            {...props} 
          />
          {iconRight && <IconWrapper>{iconRight}</IconWrapper>}
        </InputContainer>
        {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </InputWrapper>
    );
  }
);

Input.displayName = "Input";
