import axios from "axios";
import { login, contact, fullContact } from "../types/userTypes";
import { useEffect, useState } from "react";
import URL from "./url";

async function axiosLogin(credentials: login) {
  return axios.post(`${URL}/students_login`, credentials, {
    withCredentials: true,
  });
}

async function axiosContact(data: contact) {
  return axios.post(`${URL}/students_register`, data, {
    withCredentials: true,
  });
}

function AxiosGetRemainingData(id: string | undefined) {
  const [data, setData] = useState<fullContact>();

  try {
    useEffect(() => {
      axios
        .get(`${URL}/user/${id}`, {
          withCredentials: true,
        })
        .then((x) => {
          setData(x.data);
        });
    }, [id]);
  } catch (error) {
    console.log(error);
  }

  return data;
}

async function axiosPutRemainingData(
  id: string | undefined,
  remainingData: contact
) {
  return axios.put(`${URL}/user/${id}`, remainingData, {
    withCredentials: true,
  });
}

export {
  axiosLogin,
  axiosContact,
  AxiosGetRemainingData,
  axiosPutRemainingData,
};
