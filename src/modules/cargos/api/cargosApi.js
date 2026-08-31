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