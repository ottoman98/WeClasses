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

export { GetAllStudents, GetAllTeachers, GetAllApplicants };
