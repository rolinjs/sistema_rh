import apiClient from "../../../services/apiClient"


// =====================================================
// LISTAR TRABAJADORES
// =====================================================

export const listarTrabajadores = async (
    page = 0,
    size = 10
) => {

    const response = await apiClient.get(
        "/trabajadores",
        {
            params: {
                page,
                size
            }
        }
    )

    return response.data

}


// =====================================================
// REGISTRAR TRABAJADOR
// =====================================================

export const registrarTrabajador = async (
    trabajador
) => {

    const response = await apiClient.post(
        "/trabajadores",
        trabajador
    )

    return response.data

}