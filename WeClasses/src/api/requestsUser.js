import axios from "axios";


const baseURL = 'http://localhost:3000/';



async function loginRequestStudent(user) {
    return axios.post(`${baseURL}v1/students_login`, user,{ withCredentials: true })
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error("Request error:", error);
            throw error;
        });
}

async function registerRequestStudent(user) {

    return axios.post(`${baseURL}v1/students_register`, user)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error("Request error:", error);
            throw error;
        });
}




const requests = { loginRequestStudent, registerRequestStudent }

export default requests;