import axios from "axios";
import { useState, useEffect } from "react";
import { story } from "../types/storyTypes";
const URL = "http://localhost:3000/v1";

function postStory(data: story) {
  return axios.post(`${URL}/story`, data, {
    withCredentials: true,
  });
}

function GetAllStories() {
  const [first, setfirst] = useState();
  useEffect(() => {
    axios
      .get(`${URL}/story`, {
        withCredentials: true,
      })
      .then((x) => {
        setfirst(x.data);
      });
  }, []);

  return first;
}

function GetStoryById(id: string | undefined) {
  const [first, setfirst] = useState();
  useEffect(() => {
    axios
      .get(`${URL}/story/${id}`, {
        withCredentials: true,
      })
      .then((x) => {
        setfirst(x.data);
      });
  }, []);

  return first;
}
function putStory(id: string, data: story) {
  return axios.put(`${URL}/story/${id}`, data, {
    withCredentials: true,
  });
}

function deleteStory(id: string) {
  return axios.delete(`${URL}/story/${id}`, {
    withCredentials: true,
  });
}

export { postStory, GetAllStories, deleteStory, GetStoryById, putStory };
