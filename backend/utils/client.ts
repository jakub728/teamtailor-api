import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const apiKey = process.env.API_TOKEN;

export const baseApi = axios.create({
  baseURL: "https://api.teamtailor.com/v1",
  headers: {
    Authorization: `Token token=${apiKey}`,
    "X-Api-Version": "20240904",
  },
});
