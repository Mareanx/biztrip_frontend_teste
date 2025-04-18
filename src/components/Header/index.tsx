import { HeaderContainer, LeftSide, RightSide } from "./styled";
import { Input } from "../../components/Input";
import { ButtonElement } from "../../components/Button";
import { MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";

interface HeaderProps {
  onCreateCredential: () => void;
  onSearch: (searchTerm: string) => void;
  searchTerm: string;
}

export const Header = ({ 
  onCreateCredential, 
  onSearch, 
  searchTerm 
}: HeaderProps) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <HeaderContainer>
      <LeftSide>
        <h1>Credenciais</h1>
      </LeftSide>

      <RightSide>
        <Input
          inputSize="sm"
          placeholder="Buscar credencial"
          id="busca"
          value={searchTerm}
          iconLeft={<MagnifyingGlassIcon />}
          onChange={handleSearchChange}
        />
        <ButtonElement size="sm" onClick={onCreateCredential}>
          <PlusIcon />
          Nova credencial
        </ButtonElement>
      </RightSide>
    </HeaderContainer>
  );
};