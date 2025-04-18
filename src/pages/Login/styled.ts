import { styled } from "../../styles/stitches.config";

export const LoginContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  minWidth: "100vw",
  background: "$neutral-100",
});

export const FormTitle = styled("h2", {
  textAlign: "center",
  marginBottom: "2rem",
  color: "#1f2937",
  fontSize: "1.5rem",
  fontWeight: 600,
});

export const ErrorMessage = styled("span", {
  color: "#f44336",
  fontSize: "0.875rem",
  marginTop: "4px",
  display: "block",
});

export const Label = styled("label", {
  fontSize: "$xs",
  fontWeight: 500,
  color: "$neutral-700",
});

export const PasswordWrapper = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
});

export const TogglePasswordButton = styled("button", {
  all: "unset",
  position: "absolute",
  right: "1rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.5rem",
  color: "$neutral-500",

  "&:hover": {
    color: "$primary",
  },

  svg: {
    width: "20px",
    height: "20px",
  },
});