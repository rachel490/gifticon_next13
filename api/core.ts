import axios from "axios";

const ncncAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 0.001,
});

export default ncncAxios;

ncncAxios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log("ERROR: ", error);
    return Promise.reject(error);
  },
);

ncncAxios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log("ERROR: ", error);
    return Promise.reject(error);
  },
);
