import axios from "axios";

import {
    establecerEstadoServidor
} from "./serverStatus";


const apiClient = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
});


apiClient.interceptors.response.use(

    (response) => {

        establecerEstadoServidor(true)

        return response

    },

    (error) => {

        if (!error.response) {

            establecerEstadoServidor(false)

        }

        return Promise.reject(error)

    }

)


export default apiClient;