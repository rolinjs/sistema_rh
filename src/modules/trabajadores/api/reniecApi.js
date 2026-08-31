const API_URL = 'http://localhost:8080/api/reniec'


export const consultarDni = async (dni) => {

    const response = await fetch(
        `${API_URL}/${dni}`
    )


    const resultado =
        await response.json()


    if (!response.ok) {

        throw new Error(
            resultado.message ||
            'No se pudo consultar el DNI.'
        )

    }


    if (!resultado.success) {

        throw new Error(
            resultado.message ||
            'No se encontró información del DNI.'
        )

    }


    return resultado.data

}