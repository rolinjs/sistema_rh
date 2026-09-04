import apiClient from '../../../services/apiClient'


// =====================================================
// LISTAR CARGOS
// =====================================================

export const listarCargos = async () => {

    const response = await apiClient.get(
        '/cargos'
    )

    return response.data

}


// =====================================================
// OBTENER CARGO POR ID
// =====================================================

export const obtenerCargo = async (id) => {

    const response = await apiClient.get(
        `/cargos/${id}`
    )

    return response.data

}


// =====================================================
// CREAR CARGO
// =====================================================

export const crearCargo = async (datos) => {

    const response = await apiClient.post(
        '/cargos',
        datos
    )

    return response.data

}


// =====================================================
// EDITAR CARGO
// =====================================================

export const editarCargo = async (id, datos) => {

    const response = await apiClient.put(
        `/cargos/${id}`,
        datos
    )

    return response.data

}


// =====================================================
// CAMBIAR ESTADO
// =====================================================

export const cambiarEstadoCargo = async (id) => {

    const response = await apiClient.patch(
        `/cargos/${id}/estado`
    )

    return response.data

}