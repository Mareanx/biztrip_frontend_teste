import { styled } from "../../styles/stitches.config";

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

export const SpinnerContainer = styled("div", {
  width: "8rem",
  height: "8rem",
  backgroundColor: "white",
  borderRadius: "0.75rem",
  boxShadow: "0 4px 8px $primary",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const SpinnerText = styled("p", {
  marginTop: "1rem",
  color: "#4B5563", // Gray-700
  fontWeight: 500,
  fontSize: "1rem",
});

export const Spinner = styled("div", {
  animation: "spin 1s linear infinite",
});
