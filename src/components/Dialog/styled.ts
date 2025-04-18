import { keyframes, styled } from "../../styles/stitches.config";
import * as Dialog from "@radix-ui/react-dialog";

// Animações
const overlayShow = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const contentShow = keyframes({
  from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
  to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

// Overlay
export const DialogOverlay = styled(Dialog.Overlay, {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(2px)",
  zIndex: 50,
  animation: `${overlayShow} 200ms ease-in-out`,
});

export const FieldWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  marginBottom: "16px",
});

// Container Principal do Dialog
export const DialogContent = styled(Dialog.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "$primaryForeground",
  borderRadius: "8px",
  zIndex: 50,
  display: "flex",
  flexDirection: "column",
  padding: 0,
  width: "600px", // desktop padrão
  height: "auto", // altura fluida
  maxHeight: "90vh", // não ultrapassa a altura da tela
  overflowY: "auto", // permite scroll
  animation: `${contentShow} 200ms ease-in-out`,
  boxSizing: "border-box",

  "@media (max-width: 768px)": {
    width: "90vw", // ocupa 90% da largura da viewport
    maxWidth: "100%", // impede ultrapassar a tela
    height: "auto", // deixa a altura fluida
    maxHeight: "90vh", // mantém o limite de altura
    borderRadius: "6px",
  },
});

// Cabeçalho
export const DialogHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px",
  backgroundColor: "$white",
  color: "$black",
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "lighter",
  borderBottom: "1px solid $neutral-100",
  position: "relative",
});

export const DialogSlot = styled("div", {
  flex: 1,
  padding: "24px",
  backgroundColor: "$white",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  overflowY: "auto",
});

// Rodapé
export const DialogFooter = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: "24px 32px",
  gap: "10px",
  borderTop: "1px solid $neutral-100",
  backgroundColor: "$white",
  height: "112px",
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
