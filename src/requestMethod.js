import axios from "axios";

const BASE_URL = "amazon-clone-sepia-one.vercel.app";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

/* export const userRequest = axios.create({
  baseURL: USER_URL,
}); */
