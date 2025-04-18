import * as Dialog from "@radix-ui/react-dialog";
import { Loader2 } from "lucide-react";
import { Overlay, Content, SpinnerContainer, SpinnerText } from "./styled";

export function LoginLoadingOverlay() {
  return (
    <Dialog.Root open>
      <Dialog.Overlay asChild>
        <Overlay />
      </Dialog.Overlay>
      <Dialog.Content asChild>
        <Content>
          <SpinnerContainer>
            <Loader2 size={48} className="spinner" />
            <SpinnerText>Carregando...</SpinnerText>
          </SpinnerContainer>
        </Content>
      </Dialog.Content>
    </Dialog.Root>
  );
}
