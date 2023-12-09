import axios from "axios";
import { useState, useEffect } from "react";
import URL from "./url";
import { classe } from "../types/classeTypes";

function GetAllClasses(): Array<classe> | undefined {
  const [first, setfirst] = useState();
  useEffect(() => {
    axios
      .get(`${URL}/classes`, {
        withCredentials: true,
      })
      .then((x) => {
        setfirst(x.data);
      });
  }, []);

  return first;
}

function postClasse(data: classe) {
  return axios.post(`${URL}/classes`, data, {
    withCredentials: true,
  });
}

export { GetAllClasses, postClasse };
