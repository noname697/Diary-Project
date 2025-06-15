import axios from "axios";

const relatosAPI = axios.create({ baseURL: "http://localhost:8000/" });

async function getRelatos() {
  const response = await relatosAPI.get("/");

  return response.data;
}

async function postRelatos(dados) {
  const response = await axios.post("https://localhost:8000/", dados);

  console.log(response.data)
}

export { getRelatos, postRelatos };
