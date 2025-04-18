import { styled } from "../../styles/stitches.config";

export const InputWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
  width: "fit-content",

  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
  },
});
export const Label = styled("label", {
  fontSize: "14px",
  color: "$text",
});

export const InputContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  backgroundColor: "$surface",
  border: "1px solid $neutral-400",
  borderRadius: "$sm",
  transition: "border-color 0.2s ease",

  "&:focus-within": {
    borderColor: "$primary",
  },

  variants: {
    size: {
      sm: { height: "40px", padding: "0 12px" },
      md: { height: "48px", padding: "0 16px" },
      lg: { height: "56px", padding: "0 20px" },
    },
    error: {
      true: {
        borderColor: "$danger",
      },
    },
    fullWidth: {
      true: {
        width: "100%",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});

export const StyledInput = styled("input", {
  flex: 1,
  border: "1px solid $muted",
  outline: "none",
  fontSize: "14px",
  backgroundColor: "transparent",
  color: "$text",
  height: "100%",

  "&::placeholder": {
    fontSize: "12px",
    color: "$neutral-400",
  },
});

export const IconWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ErrorMessage = styled("span", {
  fontSize: "12px",
  color: "$danger",
});
