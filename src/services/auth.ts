import axios from "axios";
const base_url = import.meta.env.VITE_BASE_URL;

export async function login(email: string, password: string) {
  try {
    const response = await axios.post(`${base_url}/login`, {
      email: email,
      password: password,
    });
    const token = response.data["token"]["value"];

    const trueToken = token.split("|")[1];
    localStorage.setItem("ACCESS_TOKEN", trueToken);
    console.log("😽 bem-vindo");

    return trueToken;
  } catch (error) {
    console.error("erro ao fazer login 😿:", error);
    throw error;
  }
}
