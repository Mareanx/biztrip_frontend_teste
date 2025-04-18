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
});

export const Footer = styled("div", {
  width: "100%",
  height: "4rem",
  display: "flex",
  justifyContent: "center",
  padding: "2px 8px",
  borderTop: "1px solid $neutral-200",
});

export const LoadingContainer = styled("div", {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  color: "$neutral-700",
  fontSize: "$base",

  ".spinner": {
    animation: `${spin} 1s linear infinite`,
  },
});

export const EmptyContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$neutral-700",
  fontSize: "$base",
});
