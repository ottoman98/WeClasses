import axios from "axios";
import { useState, useEffect } from "react";
import { classeStatus } from "../types/classeTypes";

const URL = import.meta.env.VITE_URL;

function postPurchaseClasse(data: { classe: string | undefined }) {
  return axios.post(`${URL}/purchaseClass`, data, {
    withCredentials: true,
  });
}

function GetAllPurchaseNames(id: string): string | undefined {
  const [first, setFirst] = useState();
  useEffect(() => {
    axios
      .get(`${URL}/user/name/${id}`, {
        withCredentials: true,
      })
      .then((x) => {
        setFirst(x.data);
      });
  }, []);

  return first;
}

function GetClasseStatus(id: string | undefined): classeStatus | undefined {
  const [first, setFirst] = useState();
  useEffect(() => {
    axios
      .get(`${URL}/purchaseClassStatus/${id}`, {
        withCredentials: true,
      })
      .then((x) => {
        setFirst(x.data);
      });
  }, []);

  return first;
}

export { postPurchaseClasse, GetAllPurchaseNames, GetClasseStatus };
