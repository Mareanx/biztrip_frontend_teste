import { styled } from "@stitches/react";
import * as Form from "@radix-ui/react-form";

export const FormRoot = styled(Form.Root, {
  width: "100%",
  maxWidth: "400px",
  minHeight: "400px", // altura mínima aumentada
  backgroundColor: "#fff",
  padding: "2rem",
  borderRadius: "8px",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});