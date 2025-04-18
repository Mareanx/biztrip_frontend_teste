// components/Button/styles.ts
import { styled } from "../../styles/stitches.config";

export const Button = styled("button", {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  position: "relative",

  backgroundColor: "$primary",
  color: "$primaryForeground",
  border: "1px solid $primary",
  borderRadius: "$md",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.2s",

  "&:hover": {
    backgroundColor: "$secondary",
    borderColor: "$secondary",
    color: "$secondaryForeground",
  },

  "&:disabled, &[aria-disabled='true']": {
    opacity: 0.6,
    pointerEvents: "none",
  },

  variants: {
    size: {
      sm: {
        height: "$12", // 3rem
        paddingX: "$4", // 1rem
        fontSize: "$sm", // 0.875rem
        minWidth: "100px", 

      },
      md: {
        height: "$14", // 3.5rem
        paddingX: "$5", // 1.25rem
        fontSize: "$base", // 1rem
        minWidth: "120px", // 

      },
      lg: {
        height: "$16", // 4rem
        paddingX: "$6", // 1.5rem
        fontSize: "$lg", // 1.125rem
        minWidth: "140px", 

      },
    },
    fullWidth: {
      true: {
        width: "100%",
      },
      false: {
        width: "fit-content",
      },
    },

    variant: {
      primary: {
        backgroundColor: "$primary",
        color: "$primaryForeground",
        "&:hover": {
          backgroundColor: "$info-900",
        },
      },
      secondary: {
        border: "none",
        backgroundColor: "$neutral-100",
        color: "$black",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "$neutral-300",
        },
      },
      danger: {
        backgroundColor: "$error-500",
        color: "$primaryForeground",
        "&:hover": {
          backgroundColor: "$error-900",
        },
      },
      ghost: {
        backgroundColor: "transparent",
        color: "$primary",
        "&:hover": {
          backgroundColor: "$neutral-100",
        },
      },
      outline: {
        backgroundColor: "transparent",
        border: "1px solid $primary",
        color: "$primary",
        "&:hover": {
          backgroundColor: "$info-100",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    fullWidth: false,
  },
});
