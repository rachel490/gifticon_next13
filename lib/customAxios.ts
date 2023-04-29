import axios from "axios";

const strapiAxios = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: { Autorization: `Bearer ${process.env.JWT as string}` },
});

export default strapiAxios;
