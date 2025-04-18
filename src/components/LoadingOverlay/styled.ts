import { styled, keyframes } from "../../styles/stitches.config";

const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const Overlay = styled("div", {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(4px)",
  zIndex: 50,
});

export const Content = styled("div", {
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 50,
});

export const LoadingContainer = styled("div", {
  width: "8rem",
  height: "8rem",
  backgroundColor: "white",
  borderRadius: "0.75rem",
  boxShadow: "0 4px 8px $primary",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
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
