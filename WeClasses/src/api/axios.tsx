import axios from "axios";
import { login } from "../types/userTypes";

const URL = "http://localhost:3000/v1";

async function axiosLogin(credentials: login) {
  return axios.post(`${URL}/students_login`, credentials, {
    withCredentials: true,
  });
}

async function axiosContact(credentials: login) {
  return axios.post(`${URL}/students_register`, credentials, {
    withCredentials: true,
  });
}

export { axiosLogin, axiosContact };
