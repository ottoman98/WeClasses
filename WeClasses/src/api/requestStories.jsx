import axios from "axios";
import { useEffect, useState } from "react";
const baseURL = "http://localhost:3000/";

async function storyPost(user) {
  return axios
    .post(`${baseURL}v1/story`, user, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Request error:", error);
      throw error;
    });
}

function storyGetAll() {
  const baseURL = "http://localhost:3000/";
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`${baseURL}v1/story`, { withCredentials: true }).then((x) => {
      setData(x.data);
    });
  }, []);

  return data;
}

const requests = { storyPost, storyGetAll };

export default requests;
