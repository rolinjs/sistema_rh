import apiClient from "../../../services/apiClient";


export const consultarDni = async (dni) => {

    const response = await apiClient.get(
        `/reniec/${dni}`
    );


    const resultado = response.data;


    if (!response.data) {

        throw new Error(
            "No se pudo obtener información del DNI."
        );

    }


    if (!resultado.success) {

        throw new Error(
            resultado.message ||
            "No se encontró información del DNI."
        );

    }


    return resultado.data;

};