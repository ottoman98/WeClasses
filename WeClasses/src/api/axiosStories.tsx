import axios from "axios";
import { useState, useEffect } from "react";
import { story } from "../types/storyTypes";

const URL = import.meta.env.VITE_URL;

function postStory(data: story) {
  return axios.post(`${URL}/story`, data, {
    withCredentials: true,
  });
}

function GetAllStories(): Array<story> | undefined {
  const [first, setFirst] = useState();
  useEffect(() => {
    axios
      .get(`${URL}/story`, {
        withCredentials: true,
      })
      .then((x) => {
        setFirst(x.data);
      });
  }, []);

  return first;
}

function GetStoryById(id: string | undefined): story | undefined {
  const [first, setFirst] = useState<story>();
  useEffect(() => {
    axios
      .get(`${URL}/story/${id}`, {
        withCredentials: true,
      })
      .then((x) => {
        setFirst(x.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return first;
}

function GetStoriesByLanguage(
  language: string | undefined
): Array<story> | undefined {
  const [first, setFirst] = useState<story[]>();
  useEffect(() => {
    axios
      .get(`${URL}/stories/${language}`, {
        withCredentials: true,
      })
      .then((x) => {
        setFirst(x.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return first;
}
function putStory(id: string | undefined, data: story) {
  return axios.put(`${URL}/story/${id}`, data, {});
}

function deleteStory(id: string) {
  return axios.delete(`${URL}/story/${id}`, {
    withCredentials: true,
  });
}

export {
  // eslint-disable-next-line react-refresh/only-export-components
  postStory,
  GetAllStories,
  // eslint-disable-next-line react-refresh/only-export-components
  deleteStory,
  GetStoryById,
  // eslint-disable-next-line react-refresh/only-export-components
  putStory,
  GetStoriesByLanguage,
};
