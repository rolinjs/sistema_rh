import apiClient from '../../../services/apiClient'


export const listarSubAreas = async () => {

    const response = await apiClient.get(
        '/subareas'
    )

    return response.data
}