import * as Dialog from "@radix-ui/react-dialog";
import { Loader2 } from "lucide-react";
import { Overlay, Content, LoadingContainer } from "./styled";

export function LoginLoadingOverlay() {
  return (
    <Dialog.Root open>
      <Dialog.Overlay asChild>
        <Overlay />
      </Dialog.Overlay>
      <Dialog.Content asChild>
        <Content>
          <LoadingContainer>
            <Loader2 size={48} className="spinner" />
            <p>Carregando...</p>
          </LoadingContainer>
        </Content>
      </Dialog.Content>
    </Dialog.Root>
  );
}
