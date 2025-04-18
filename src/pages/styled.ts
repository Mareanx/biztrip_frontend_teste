import { styled } from "../styles/stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  paddingTop: "2rem",
});

export const Header = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "1128px",
  marginBottom: "2rem",
});

export const ListWrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: "0 $10",
  marginTop: "4rem",
});
