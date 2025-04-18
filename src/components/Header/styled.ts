import { styled } from "../../styles/stitches.config";

export const HeaderContainer = styled("header", {
  position: "fixed",
  top: 0,
  zIndex: 10,
  gap: "16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 32px",
  width: "100%",
  backgroundColor: "$primaryForeground",
  borderBottom: "1px solid $neutral-200",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  fontFamily: "system-ui",
  fontSize: "$base",
});

export const LeftSide = styled("div", {
  display: "flex",
  alignItems: "center",
  marginLeft: "16px",
});

export const RightSide = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginRight: "16px",
});
