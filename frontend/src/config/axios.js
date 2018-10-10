import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:3040/api",
  headers: {
    "Content-Type": "application/json"
  }
})