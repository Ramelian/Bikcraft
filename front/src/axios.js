import axios from "axios";

const instance = axios.create({
  baseURL: "https://bikcraft-ochre-two.vercel.app",
});

export default instance;