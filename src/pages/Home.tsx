import { useEffect, useState } from "react";
import {
  getCredentials,
  activateCredential,
  deactivateCredential,
} from "../services/api";
import { Credential } from "../data/model/credential_interface";
import { Header } from "../components/Header";
import { CredentialList } from "../components/CredentialList";
import { Container, ListWrapper } from "./styled";
import { toast } from "react-hot-toast";
import { ConfirmDialog } from "../components/Dialog/ConfirmDialog";
import { Pagination } from "../components/Pagination";
import { CreateCredentialDialog } from "../components/Dialog/CredentialCreateDialog";

export async function fetchCredentials(
  page = 1
): Promise<{ data: Credential[]; totalPages: number } | undefined> {
  try {
    const response = await getCredentials(page);
    return response;
  } catch (error) {
    toast.error("Erro ao carregar credenciais");
    console.error(error);
  }
}

export function Home() {
  const [loading, setLoading] = useState(true);
  const [credentials, setCredentials] = useState<Credential[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCredentials, setFilteredCredentials] = useState<Credential[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const [confirmActive, setConfirmActive] = useState(false);
  const [confirmAction, setConfirmAction] = useState<
    "activate" | "deactivate" | null
  >(null);
  const [selectedCredential, setSelectedCredential] =
    useState<Credential | null>(null);

  const showEmptySearchResult =
    searchTerm.trim() !== "" && filteredCredentials.length === 0;

  const loadCredentials = async (page = 1) => {
    setLoading(true);
    const response = await fetchCredentials(page);
    if (response) {
      setCredentials(response.data);
      setFilteredCredentials(response.data);
      setTotalPages(response.totalPages);
      setCurrentPage(page);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadCredentials();
  }, []);

  useEffect(() => {
    const lowerSearch = searchTerm.toLowerCase().trim();
    const newFiltered = credentials.filter((credential) => {
      const searchText = [
        credential.description?.toLowerCase() || "",
        credential.provider?.name?.toLowerCase() || "",
        credential.provider?.slug?.toLowerCase() || "",
        credential.service_type?.toLowerCase() || "",
      ].join(" ");
      return searchText.includes(lowerSearch);
    });

    setFilteredCredentials([...newFiltered]);
  }, [searchTerm, credentials]);

  const handleRequestToggle = (credential: Credential, active: boolean) => {
    setSelectedCredential(credential);
    setConfirmAction(active ? "activate" : "deactivate");
    setConfirmActive(true);
  };

  const handleConfirmToggle = async () => {
    if (!selectedCredential) return;

    try {
      if (confirmAction === "activate") {
        await activateCredential(selectedCredential.credential_uuid);
        toast.success("Credencial ativada");
      } else {
        await deactivateCredential(selectedCredential.credential_uuid);
        toast.success("Credencial inativada");
      }

      setConfirmActive(false);
      setSelectedCredential(null);
      setConfirmAction(null);
      await loadCredentials();
    } catch (error) {
      toast.error("Erro ao atualizar status");
      console.error(error);
    }
  };

  const handleCredentialCreated = () => {
    toast.success("Credencial criada com sucesso!");
    loadCredentials(); 
  };

  return (
    <Container>
      {/* Diálogo de criação de credencial */}
      <CreateCredentialDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        onCreated={handleCredentialCreated}

      />

      {/* Header com botão de criação */}
      <Header
        onCreateCredential={() => setIsCreateDialogOpen(true)}
        onSearch={setSearchTerm}
        searchTerm={searchTerm}
      />

      {/* Lista de credenciais */}
      <ListWrapper>
        {loading ? (
          <p>Carregando credenciais...</p>
        ) : showEmptySearchResult ? (
          <p>
            Nenhuma credencial encontrada para: <strong>{searchTerm}</strong>
          </p>
        ) : (
          <CredentialList
            data={filteredCredentials}
            onToggleActive={handleRequestToggle}
          />
        )}
      </ListWrapper>

      {/* Diálogo de confirmação para ativar/inativar */}
      <ConfirmDialog
        open={confirmActive}
        onOpenChange={setConfirmActive}
        onConfirm={handleConfirmToggle}
        title={
          confirmAction === "activate"
            ? "Ativar credencial?"
            : "Inativar credencial?"
        }
        description={
          selectedCredential
            ? `Tem certeza que deseja ${
                confirmAction === "activate" ? "ativar" : "inativar"
              } a credencial "${selectedCredential.description}"?`
            : ""
        }
        confirmLabel={confirmAction === "activate" ? "Ativar" : "Inativar"}
      />

      {/* Paginação */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={loadCredentials}
      />
    </Container>
  );
}
