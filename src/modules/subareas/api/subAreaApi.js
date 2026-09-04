import apiClient from '../../../services/apiClient'

export const listarSubAreas = async () => {
    const response = await apiClient.get('/subareas')
    return response.data
}

export const obtenerSubArea = async (id) => {
    const response = await apiClient.get(`/subareas/${id}`)
    return response.data
}

export const crearSubArea = async (datos) => {
    const response = await apiClient.post('/subareas', datos)
    return response.data
}

export const editarSubArea = async (id, datos) => {
    const response = await apiClient.put(`/subareas/${id}`, datos)
    return response.data
}

export const cambiarEstadoSubArea = async (id) => {
    const response = await apiClient.patch(`/subareas/${id}/estado`)
    return response.data
}