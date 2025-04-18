import { styled, keyframes } from "../styles/stitches.config";

const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
});

export const Header = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "1128px",
  padding: "1rem 0",
  position: "fixed",
  top: 0,
  zIndex: 10,
  backgroundColor: "$primaryBackground",
  borderBottom: "1px solid $neutral-200",
  height: "4rem",

  "@media (max-width: 768px)": {
    width: "100%",
    padding: "0.5rem 1rem",
  },
});

export const Body = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  paddingTop: "4rem",
  overflowY: "auto",

  "@media (max-width: 768px)": {
    paddingTop: "3.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
});

export const Footer = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  padding: "0rem 0",
  borderTop: "1px solid $secondaryForeground",
  margin: "0 auto",

  "@media (max-width: 768px)": {
    padding: "0rem 0",
  },
});

export const LoadingContainer = styled("div", {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  flexDirection: "column",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  color: "$neutral-700",
  fontSize: "$base",

  ".spinner": {
    animation: `${spin} 1s linear infinite`,
  },

  "@media (max-width: 768px)": {
    gap: "0.5rem",
  },
});

export const EmptyContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$neutral-700",
  fontSize: "$base",

  "@media (max-width: 768px)": {
    fontSize: "0.875rem",
    textAlign: "center",
  },
});
