import { styled } from "../../styles/stitches.config";

export const PaginationContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 32px 0 32px",
  position: "relative",
  width: "100%",
  backgroundColor: "$primaryForeground",
  fontFamily: "system-ui",
});

export const PageButton = styled("button", {
  background: "$primaryForeground",
  border: "none",
  borderRadius: "8px",
  padding: "8px 25px",
  color: "$neutral-500",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.2s ease",

  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.5,
  },

  variants: {
    active: {
      true: {
        backgroundColor: "#dbeafe",
        color: "#1d4ed8",
        fontWeight: 700,
      },
    },
  },
});

export const PaginationWrapper = styled("div", {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  backgroundColor: "white",
  borderTop: "1px solid #e0e0e0",
  display: "flex",
  justifyContent: "center",
  padding: "1rem",
  zIndex: 10,
});

export const PageNumbersWrapper = styled("div", {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "8px",
});
