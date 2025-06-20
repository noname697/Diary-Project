import axios from "axios";

const relatosAPI = axios.create({ baseURL: "http://localhost:8000/" });

async function getRelatos() {
  const response = await relatosAPI.get("/");

  return response.data;
}

async function postRelatos(dados) {
  const response = await axios.post("http://localhost:8000/", dados);

  console.log(response.data);
}

async function getRelatoEspecifico(id) {
  const response = await axios.get(`http://localhost:8000/${id}`);

  return response.data;
}

async function putRelato(id, dados) {
  const response = await axios.put(`http://localhost:8000/${id}`, dados);

  console.log(response.data);
}

async function deleteRelato(id) {
  const response = await axios.delete(`http://localhost:8000/${id}`);

  console.log(response.data);
}

async function postFavorito(id) {
  const response = await axios.put(`http://localhost:8000/favorito/${id}`);

  console.log(response.data);
}

async function getFavoritos() {
  const response = await axios.get("http://localhost:8000/favoritos");

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
