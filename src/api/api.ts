import axios from "axios";

export const ApiInstance = axios.create({
  baseURL: "https://futurioninterview.azurewebsites.net/",
  headers: {
    "content-type": "application/json",
  },
  timeout: 100000,
});
