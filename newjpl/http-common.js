import axios from "axios";

export default axios.create({
  // baseURL: "localhost:8000",
  baseURL: "https://api.juniorsuperlig.com",
  headers: {
    "Content-type": "application/json"
  }
});