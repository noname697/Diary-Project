import axios from "axios";

const relatosAPI = axios.create({ baseURL: "http://localhost:8000/" });

async function getRelatos() {
  const response = await relatosAPI.get("/");

  return response.data;
}

export { getRelatos };
