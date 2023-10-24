import axios from "axios";
const baseURL = 'http://localhost:3000/';

async function storyPost(user) {

    return axios.post(`${baseURL}v1/story`, user,{ withCredentials: true })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error("Request error:", error);
            throw error;
        });
}

const requests={storyPost}

export default requests