import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  CloseButton,
  DialogSeparator,
} from "./styled";
import { ButtonElement } from "../../Button";
import { Cross1Icon } from "@radix-ui/react-icons";

interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  onConfirm: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
}

export function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  onConfirm,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
}: ConfirmDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
            <Dialog.Close asChild>
              <CloseButton>
                <Cross1Icon width={20} height={20} />
              </CloseButton>
            </Dialog.Close>
          </DialogHeader>

          <DialogSeparator />

          <DialogFooter>
            <DialogClose asChild>
              <ButtonElement variant="secondary" size="sm">
                {cancelLabel}
              </ButtonElement>
            </DialogClose>
            <DialogClose asChild>
              <ButtonElement variant="primary" size="sm" onClick={onConfirm}>
                {confirmLabel}
              </ButtonElement>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
