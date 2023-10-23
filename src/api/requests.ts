import axios from "axios";


const baseURL = 'http://localhost:3000/';



function loginRequestStudent(user: object) {
    return axios.post(`${baseURL}v1/students_login`, user)
        .catch(error => {
            console.error("Request error:", error);
            throw error;
        });
}

function registerRequestStudent(user: object) {

    return axios.post(`${baseURL}v1/students_register`, user)
        .catch(error => {
            console.error("Request error:", error);
            throw error;
        });
}


const requests = { loginRequestStudent, registerRequestStudent }

export default requests;