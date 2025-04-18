import { Pencil1Icon } from "@radix-ui/react-icons";
import { Switch } from "../Switch";
import {
  Wrapper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  DataItemContainer,
  DataItem,
  Header,
  DataSpan,
  ActionContainer,
} from "./styled";
import * as S from "./styled";
import {
  Credential,
  EditCredential,
} from "../../data/model/credential_interface";
import { Bed, BusFront, Car, CloudAlert, PlaneTakeoff } from "lucide-react";
import { EditCredentialDialog } from "../../hooks/useEditCredential";
import { useState } from "react";
import toast from "react-hot-toast";

// Tipagem do tipo CredentialValue
type CredentialValue = {
  uuid: string;
  name: string;
  value: unknown;
  parameter: {
    uuid: string;
    title: string;
    input_type: string;
    description: string;
    required: boolean;
  };
};

type CredentialListProps = {
  data: Credential[];
  onToggleActive: (credential: Credential, active: boolean) => void;
  onEdited: () => void;
};

const SERVICE_TYPES: Record<string, React.ReactNode> = {
  road: <BusFront />,
  airway: <PlaneTakeoff />,
  hotel: <Bed />,
  vehicle: <Car />,
};

export const CredentialList = ({
  data,
  onToggleActive,
  onEdited,
}: CredentialListProps) => {
  const [dialogEditOpen, setDialogEditOpen] = useState(false);
  const [selectedCredential, setSelectedCredential] =
    useState<EditCredential | null>(null);

  const handleEditClick = (credential: Credential) => {
    try {
      if (!Array.isArray(credential.credential_values)) {
        throw new Error("Credencial não possui valores para edição");
      }

      const values = credential.credential_values.map(
        (item: CredentialValue) => ({
          uuid: item.uuid || "",
          name: item.name ?? "",
          value: item.value ?? null,
          parameter: item.parameter || [],
        })
      );

      setSelectedCredential({
        credential_description: credential.description,
        service_type: credential.service_type,
        provider_uuid: credential.provider.uuid,
        credential_values: values,
      });

      setDialogEditOpen(true);
    } catch (error) {
      console.error("Erro na conversão:", error);
      toast.error(
        `Falha ao carregar dados: ${
          error instanceof Error ? error.message : "Erro desconhecido"
        }`
      );
    }
  };

  return (
    <Wrapper>
      <Table>
        <TableBody>
          {data.map((credential) => (
            <TableRow
              key={credential.credential_uuid}
              active={credential.active}
            >
              <TableCell type="data" align="top">
                <DataItemContainer>
                  <DataItem>
                    <Header>Nome</Header>
                    <DataSpan>{credential.description || "Sem nome"}</DataSpan>
                  </DataItem>
                </DataItemContainer>
              </TableCell>

              <TableCell type="data" align="top">
                <DataItemContainer>
                  <DataItem>
                    <Header>Fornecedor</Header>
                    <DataSpan>
                      {credential.provider.name} ({credential.provider.slug})
                    </DataSpan>
                  </DataItem>
                </DataItemContainer>
              </TableCell>

              <TableCell type="data">
                <DataItemContainer>
                  <DataItem>
                    <Header>Serviço</Header>
                    <DataSpan>
                      {SERVICE_TYPES[credential.service_type] || <CloudAlert />}
                    </DataSpan>
                  </DataItem>
                </DataItemContainer>
              </TableCell>

              <TableCell type="action">
                <ActionContainer>
                  <S.IconButton
                    onClick={() => handleEditClick(credential)}
                    title="Editar credencial"
                  >
                    <Pencil1Icon />
                  </S.IconButton>

                  <Switch
                    checked={credential.active}
                    onChange={(checked) => onToggleActive(credential, checked)}
                  />

                  <span>{credential.active ? "Ativo" : "Inativo"}</span>
                </ActionContainer>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <EditCredentialDialog
        open={dialogEditOpen}
        onOpenChange={(open) => {
          setDialogEditOpen(open);
          if (!open) setSelectedCredential(null);
        }}
        onEdited={() => {
          setDialogEditOpen(false);
          onEdited();
          //TODO: Implementar função de atualizar lista ao finalizar edição
        }}
        initialData={
          selectedCredential || {
            credential_description: "",
            service_type: "",
            provider_uuid: "",
            credential_values: [],
          }
        }
      />
    </Wrapper>
  );
};
