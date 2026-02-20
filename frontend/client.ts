import axios from "axios";

export const api = axios.create({
  baseURL: "ttp://localhost:7777/api",
});
