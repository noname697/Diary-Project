import axios from "axios";
import { IRelato } from "../shared/IRelato";

const relatosAPI = axios.create({
  baseURL: "https://diary-api-fbaj.onrender.com/",
});

async function getRelatos() {
  const response = await relatosAPI.get("/");

  return response.data;
}

async function postRelatos(dados: IRelato) {
  const response = await axios.post(
    "https://diary-api-fbaj.onrender.com/",
    dados
  );

  console.log(response.data);
}

async function getRelatoEspecifico(id: string | undefined) {
  const response = await axios.get(`https://diary-api-fbaj.onrender.com/${id}`);

  return response.data;
}

async function putRelato(id: Number | string, dados: IRelato) {
  const response = await axios.put(
    `https://diary-api-fbaj.onrender.com/${id}`,
    dados
  );

  console.log(response.data);
}

async function deleteRelato(id: Number | string) {
  const response = await axios.delete(
    `https://diary-api-fbaj.onrender.com/${id}`
  );

  console.log(response.data);
}

async function postFavorito(id: Number | string) {
  const response = await axios.put(
    `https://diary-api-fbaj.onrender.com/favorito/${id}`
  );

  console.log(response.data);
}

async function getFavoritos() {
  const response = await axios.get(
    "https://diary-api-fbaj.onrender.com/favoritos"
  );

  return response.data;
}

export {
  getRelatos,
  postRelatos,
  getRelatoEspecifico,
  putRelato,
  deleteRelato,
  postFavorito,
  getFavoritos,
};
