import axios from "axios";
const apiKey = import.meta.env.VITE_API_TOKEN;

export const api = axios.create({
  baseURL: "https://api.teamtailor.com/v1",
  headers: {
    Authorization: `Token token=${apiKey}`,
    "X-Api-Version": "20240904",
  },
});
