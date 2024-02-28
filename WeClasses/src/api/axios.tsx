/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { login, contact, fullContact } from "../types/userTypes";
import { useEffect, useState } from "react";
import { teacherData } from "../types/teacher";

const URL = import.meta.env.VITE_URL;

async function axiosLogin(credentials: login) {
  return axios.post(`${URL}/students_login`, credentials, {
    withCredentials: true,
  });
}

async function axiosRegisterStudent(data: contact) {
  return axios.post(`${URL}/students_register`, data, {
    withCredentials: true,
  });
}

async function axiosRegisterTeacher(data: teacherData) {
  return axios.post(`${URL}/tutor_register`, data, {
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
async function axiosRecoverPassword(email: string) {
  return axios.post(
    `${URL}/recover`,
    { email },
    {
      withCredentials: true,
    }
  );
}
async function axiosChangePassword(id: string | undefined, password: object) {
  return axios.put(`${URL}/recover/${id}`, password, {
    withCredentials: true,
  });
}
export {
  axiosLogin,
  axiosRegisterStudent,
  axiosRegisterTeacher,
  AxiosGetRemainingData,
  axiosPutRemainingData,
  axiosRecoverPassword,
  axiosChangePassword,
};
