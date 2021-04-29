import axios from "axios";

const api = axios.create({
  baseURL: "https://tccbackende.herokuapp.com",
});

export default api;
