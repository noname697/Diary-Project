import axios from "axios";

const relatosAPI = axios.create({ baseURL: "http://localhost:8000/" });

async function getRelatos() {
  const response = await relatosAPI.get("/");

  return response.data;
}

async function postRelatos(dados) {
  const response = await axios.post("http://localhost:8000/", dados);

  console.log(response.data)
}

async function getRelatoEspecifico(id) {
  const response = await axios.get(`http://localhost:8000/${id}`)

  return response.data
}

async function putRelato(id, dados){
  const response = await axios.put(`http://localhost:8000/${id}`, dados)

  console.log(response.data)
}

export { getRelatos, postRelatos, getRelatoEspecifico, putRelato };
