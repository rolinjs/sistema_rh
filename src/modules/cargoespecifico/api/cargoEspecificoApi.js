import apiClient from '../../../services/apiClient'


// =====================================================
// LISTAR CARGOS ESPECÍFICOS
// =====================================================

export const listarCargosEspecificos = async (
    page = 0,
    size = 20
) => {

    const response = await apiClient.get(
        '/cargos-especificos',
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
// OBTENER CARGO ESPECÍFICO
// =====================================================

export const obtenerCargoEspecifico = async (
    id
) => {

    const response = await apiClient.get(
        `/cargos-especificos/${id}`
    )


    return response.data

}


// =====================================================
// CREAR CARGO ESPECÍFICO
// =====================================================

export const crearCargoEspecifico = async (
    datos
) => {

    const response = await apiClient.post(
        '/cargos-especificos',
        datos
    )


    return response.data

}


// =====================================================
// EDITAR CARGO ESPECÍFICO
// =====================================================

export const editarCargoEspecifico = async (
    id,
    datos
) => {

    const response = await apiClient.put(
        `/cargos-especificos/${id}`,
        datos
    )


    return response.data

}


// =====================================================
// CAMBIAR ESTADO
// =====================================================

export const cambiarEstadoCargoEspecifico = async (
    id
) => {

    const response = await apiClient.patch(
        `/cargos-especificos/${id}/estado`
    )


    return response.data

}