import axios from "axios";
import { useState, useEffect } from "react";
import { teacherData } from "../types/teacher";
import { fullContact } from "../types/userTypes";

// eslint-disable-next-line react-refresh/only-export-components
const URL = import.meta.env.VITE_URL;

// eslint-disable-next-line react-refresh/only-export-components
function GetProfileTeacher(id: string | undefined): teacherData | undefined {
  const [first, setFirst] = useState();
  useEffect(() => {
    axios
      .get(`${URL}/tutor_profile/${id}`, {
        withCredentials: true,
      })
      .then((x) => {
        setFirst(x.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return first;
}
function GetProfileStudent(): fullContact | undefined {
  const [first, setFirst] = useState();
  useEffect(() => {
    axios
      .get(`${URL}/profile`, {
        withCredentials: true,
      })
      .then((x) => {
        setFirst(x.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return first;
}
export { GetProfileTeacher, GetProfileStudent };
