import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.teamtailor.com/v1",
  headers: {
    Authorization: `Token token=${process.env.API_TOKEN}`,
    "X-Api-Version": "20210101",
  },
});
