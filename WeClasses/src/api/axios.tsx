/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { login, contact, fullContact } from "../types/userTypes";
import { useEffect, useState } from "react";
import { teacherData, tutorInfo } from "../types/teacher";
import { CredentialResponse } from "@react-oauth/google";

const URL = import.meta.env.VITE_URL;

async function axiosLogin(credentials: login) {
  return axios.post(`${URL}/login`, credentials, {
    withCredentials: true,
  });
}

async function axiosGoogleLogin(credentials: CredentialResponse) {
  return axios.post(`${URL}/google`, credentials, {
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

async function tutorAdmission(id: string | undefined, data: tutorInfo) {
  try {
    const form = new FormData();
    form.append("password", data.password);
    form.append("password2", data.password2);
    form.append("video", data.video);
    form.append("payment", data.payment);
    form.append("photo", data.photo[0]);

    return axios.put(
      `${URL}/tutor_admission/${id}`,

      form,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  } catch (error) {
    console.log(error);
  }
}
async function accountSettingsTutor(id: string | undefined, data: tutorInfo) {
  try {
    const form = new FormData();

    // Check if data.description is defined before appending it to the form
    if (data.description !== undefined) {
      form.append("description", data.description);
    }

    // Assuming data.photo is always defined and contains at least one element
    form.append("photo", data.photo[0]);

    if (!id) {
      throw new Error("ID is not defined");
    }

    return axios.put(`${URL}/account_teacher_settings/${id}`, form, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    console.log(error);
  }
}
async function passwordSettingsTutor(
  id: string | undefined,
  data: { password: string; password2: string; oldPassword: string }
) {
  try {
    return axios.put(`${URL}/password_teacher_settings/${id}`, data, {
      withCredentials: true,
    });
  } catch (error) {
    console.log(error);
  }
}

async function logout() {
  return axios.get(`${URL}/logout`, {
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
  tutorAdmission,
  axiosGoogleLogin,
  accountSettingsTutor,
  passwordSettingsTutor,
  logout,
};
