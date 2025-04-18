import { getCredentials } from "./api";
import { Credential } from "../data/model/credential_interface";

export const loadCredentials = async (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setCredentials: React.Dispatch<React.SetStateAction<Credential[]>>
) => {
  setLoading(true);
  try {
    const data = await getCredentials();
    setCredentials(data);
  } catch (error) {
    console.error("Erro ao buscar credenciais", error);
  } finally {
    setLoading(false);
  }
};