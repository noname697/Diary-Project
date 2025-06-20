import axios from "axios";

async function getRelatos() {

  const response = await axios.get("/api/");
  return response.data;
}

async function postRelatos(dados) {

  const response = await axios.post("/api/", dados);
  console.log(response.data);
}

async function getRelatoEspecifico(id) {

  const response = await axios.get(`/api/${id}`);
  return response.data;
}

async function putRelato(id, dados) {

  const response = await axios.put(`/api/${id}`, dados);
  console.log(response.data);
}

async function deleteRelato(id) {

  const response = await axios.delete(`/api/${id}`);
  console.log(response.data);
}

async function postFavorito(id) {

  const response = await axios.put(`/api/favorito/${id}`);
  console.log(response.data);
}

async function getFavoritos() {

  const response = await axios.get("/api/favoritos");
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