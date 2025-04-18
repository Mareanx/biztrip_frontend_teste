import axios, { AxiosInstance } from "axios";
import {
  CreateCredentialPayload,
  EditCredentialPayload,
} from "../data/model/credential_interface";

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Buscar Credenciais
export const getCredentials = async (page = 1) => {
  try {
    const response = await api.get(`/credentials?page=${page}`);
    
    return {
      data: response.data["data"],
      totalPages: response.data["meta"]?.["last_page"] ?? 1, // <-- ajuste aqui dependendo da estrutura real
    };
  } catch (error) {
    console.error("Erro ao buscar credenciais:", error);
    throw error;
  }
};


export const createCredential = async (
  providerUuid: string,
  data: CreateCredentialPayload
) => {
  const response = await api.post(
    `/credentials/providers/${providerUuid}`,
    data
  );
  return response.data;
};

export const editCredential = async (
  data: EditCredentialPayload
) => {
  console.log("Payload enviado para o servidor:", data); // Verifica o payload

  const response = await api.put(`/credentials`, data);
  return response.data;
};

export const getProviders = async () => {
  const response = await api.get("/providers");
  return response.data;
};

export const getParametersProvider = async (providerUuid: string) => {
  const response = await api.get(
    `/credentials/providers/${providerUuid}/parameters`
  );
  return response.data;
};

export const activateCredential = async (credential_uuid: string) => {
  const response = await api.patch(`/credentials/${credential_uuid}/active`);
  return response.data;
};

export const deactivateCredential = async (credential_uuid: string) => {
  const response = await api.patch(`/credentials/${credential_uuid}/inactive`);
  return response.data;
};

export default api;
