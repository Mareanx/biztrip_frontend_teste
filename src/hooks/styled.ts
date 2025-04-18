import { styled } from "../styles/stitches.config";

export const FieldWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  marginBottom: "16px",
});

export const Label = styled("label", {
  fontSize: "$xs",
  fontWeight: 500,
  color: "$gray800",

  "& > span": {
    fontSize: "$xs",
    color: "$warning-900",
    fontWeight: 500,
    marginLeft: "8px",
  },
});
