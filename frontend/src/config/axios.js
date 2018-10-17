import axios from "axios";

export const client = axios.create({
  baseURL: "https://polar-hamlet-30111.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json"
  }
})