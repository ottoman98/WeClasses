import { useState, useEffect } from "react";
import axios from "axios";
import { fullContact } from "../types/userTypes";
import { teacherData } from "../types/teacher";

const URL = import.meta.env.VITE_URL;

function GetAllStudents(): Array<fullContact> | undefined {
  const [first, setFirst] = useState();
  useEffect(() => {
    axios
      .get(`${URL}/studentsList`, {
        withCredentials: true,
      })
      .then((x) => {
        setFirst(x.data);
      });
  }, []);

  return first;
}
function GetAllTeachers(): Array<teacherData> | undefined {
  const [first, setFirst] = useState();
  useEffect(() => {
    axios
      .get(`${URL}/teachersList`, {
        withCredentials: true,
      })
      .then((x) => {
        setFirst(x.data);
      });
  }, []);

  return first;
}
function GetAllApplicants(): Array<teacherData> | undefined {
  const [first, setFirst] = useState();
  useEffect(() => {
    axios
      .get(`${URL}/applicants`, {
        withCredentials: true,
      })
      .then((x) => {
        setFirst(x.data);
      });
  }, []);

  return first;
}

function approbation(id: string | undefined, data: { approved: boolean }) {
  return axios.put(`${URL}/approving/${id}`, data, {
    withCredentials: true,
  });
}
function desactiveAccount(id: string | undefined) {
  return axios.put(`${URL}/desactive/${id}`, {
    withCredentials: true,
  });
}

export {
  GetAllStudents,
  GetAllTeachers,
  GetAllApplicants,
  approbation,
  desactiveAccount,
};
