import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogHeader,
  DialogFooter,
  DialogOverlay,
  DialogContent,
  DialogSlot,
  CloseButton,
} from "./styled";
import { ButtonElement } from "../Button";
import { ReactNode } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";

interface CustomDialogProps {
  title: string;
  description: string;
  children: ReactNode;
  onConfirm: () => void;
  confirmLabel?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  loading?: boolean;
}

export function CustomDialog({
  title,
  children,
  onConfirm,
  confirmLabel = "Confirmar",
  open,
  onOpenChange,
  
}: CustomDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Close asChild>
              <CloseButton>
                <Cross1Icon width={20} height={20} />
              </CloseButton>
            </Dialog.Close>
          </DialogHeader>
          <DialogSlot>{children}</DialogSlot>

          <DialogFooter>
            <Dialog.Close asChild>
              <ButtonElement variant="secondary" size="sm">
                Cancelar
              </ButtonElement>
            </Dialog.Close>
              <ButtonElement variant="primary" size="sm" onClick={onConfirm}>
                {confirmLabel}
              </ButtonElement>
           
          </DialogFooter>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
