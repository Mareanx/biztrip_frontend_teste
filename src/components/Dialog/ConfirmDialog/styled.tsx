import { styled } from "../../../styles/stitches.config";
import * as Dialog from "@radix-ui/react-dialog";
import * as Separator from "@radix-ui/react-separator";

export const DialogOverlay = styled(Dialog.Overlay, {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(2px)",
  zIndex: 20,
});

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: "white",
  borderRadius: "$lg",
  padding: "$6",
  boxShadow: "$lg",
  width: "100%",
  maxWidth: "480px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 30,
});

export const DialogHeader = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  marginBottom: "$4",
});

export const DialogTitle = styled(Dialog.Title, {
  fontSize: "$xl",
  fontWeight: "bold",
  color: "$black",
});

export const DialogDescription = styled(Dialog.Description, {
  fontSize: "$base",
  color: "$gray700",
});

export const DialogFooter = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  gap: "$4",
  marginTop: "$4",
});

export const CloseButton = styled("button", {
    all: "unset",
    position: "absolute",
    top: "16px",
    right: "16px",
    padding: "4px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#6B7280",
    lineHeight: 0,
  
    "&:hover": {
      color: "#374151", // tom mais escuro ao passar o mouse (opcional)
    },
  });
  export const DialogSeparator = styled(Separator.Root, {
    height: "1px",
    backgroundColor: "$neutral-300", // Escolha a cor que mais combina com seu tema
    width: "100%", // Garante que ocupe toda a largura do modal
  });

export const DialogClose = Dialog.Close;
