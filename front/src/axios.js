import axios from "axios";

const instance = axios.create({
  baseURL: "https://bikcraft.onrender.com",
});

export default instance;