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