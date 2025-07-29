import axios from "axios";

const relatosAPI = axios.create({ baseURL: "https://diary-api-fbaj.onrender.com/" });

async function getRelatos() {
  const response = await relatosAPI.get("/");

  return response.data;
}

async function postRelatos(dados) {
  const response = await axios.post("https://diary-api-fbaj.onrender.com/", dados);

  console.log(response.data);
}

async function getRelatoEspecifico(id) {
  const response = await axios.get(`https://diary-api-fbaj.onrender.com/${id}`);

  return response.data;
}

async function putRelato(id, dados) {
  const response = await axios.put(`https://diary-api-fbaj.onrender.com/${id}`, dados);

  console.log(response.data);
}

async function deleteRelato(id) {
  const response = await axios.delete(`https://diary-api-fbaj.onrender.com/${id}`);

  console.log(response.data);
}

async function postFavorito(id) {
  const response = await axios.put(`https://diary-api-fbaj.onrender.com/favorito/${id}`);

  console.log(response.data);
}

async function getFavoritos() {
  const response = await axios.get("https://diary-api-fbaj.onrender.com/favoritos");

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
