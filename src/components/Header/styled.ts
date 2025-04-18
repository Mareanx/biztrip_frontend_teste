import { styled } from "../../styles/stitches.config";

export const HeaderContainer = styled("header", {
  position: "fixed",
  top: 0,
  zIndex: 10,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 32px 16px 32px",
  width: "100%",
  backgroundColor: "$primaryForeground",
  border: "0 0 1 solid $neutral-200",
  boxShadow: "0 0 1px rgba(0,0,0,0.5)",
  fontFamily: "system-ui",
  fontSize: "$base",
});

export const LeftSide = styled("div", {
  marginLeft: "40px",
  display: "flex",
  flexDirection: "column",
});

export const RightSide = styled("div", {
  marginRight: "40px",
  display: "flex",
  alignItems: "center",
  gap: "16px",
});
