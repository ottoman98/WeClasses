import axios from "axios";
import { useState, useEffect } from "react";

import { classe } from "../types/classeTypes";

const URL = import.meta.env.VITE_URL;

function GetAllClasses(): Array<classe> | undefined {
  const [first, setFirst] = useState();
  useEffect(() => {
    axios
      .get(`${URL}/classes`, {
        withCredentials: true,
      })
      .then((x) => {
        setFirst(x.data);
      });
  }, []);

  return first;
}
function GetAllClassesTeacher(): Array<classe> | undefined {
  const [first, setFirst] = useState();
  useEffect(() => {
    axios
      .get(`${URL}/classesPosted`, {
        withCredentials: true,
      })
      .then((x) => {
        setFirst(x.data);
      });
  }, []);

  return first;
}

function GetAllPurchaseClasses(): Array<classe> | undefined {
  const [first, setFirst] = useState();
  useEffect(() => {
    axios
      .get(`${URL}/purchaseClasses`, {
        withCredentials: true,
      })
      .then((x) => {
        setFirst(x.data);
      });
  }, []);

  return first;
}
function GetAllBookedClassesTeacher():
  | { classes: Array<classe>; students: Array<string> }
  | undefined {
  const [first, setFirst] = useState();
  useEffect(() => {
    axios
      .get(`${URL}/booked`, {
        withCredentials: true,
      })
      .then((x) => {
        setFirst(x.data);
      });
  }, []);

  return first;
}

function GetAllClassesProfile(
  id: string | undefined
): Array<classe> | undefined {
  const [first, setFirst] = useState();
  useEffect(() => {
    axios
      .get(`${URL}/classes_profile/${id}`, {
        withCredentials: true,
      })
      .then((x) => {
        setFirst(x.data);
      });
  }, []);

  return first;
}

function GetClasseById(id: string | undefined): classe | undefined {
  const [first, setFirst] = useState();
  useEffect(() => {
    axios
      .get(`${URL}/classes/${id}`, {
        withCredentials: true,
      })
      .then((x) => {
        setFirst(x.data);
      });
  }, []);

  return first;
}

function postClasse(data: classe) {
  return axios.post(`${URL}/classes`, data, {
    withCredentials: true,
  });
}

function putClasse(id: string | undefined, data: classe) {
  return axios.put(`${URL}/classes/${id}`, data, {
    withCredentials: true,
  });
}

export {
  GetAllClasses,
  postClasse,
  GetClasseById,
  putClasse,
  GetAllClassesTeacher,
  GetAllPurchaseClasses,
  GetAllClassesProfile,
  GetAllBookedClassesTeacher,
};
