import apiClient from "../../../services/apiClient";

export const listarAreas = async () => {

    const response = await apiClient.get("/areas");

    return response.data;
    
}

export const crearArea = async (area) => {

    const response = await apiClient.post("/areas", area);

    return response.data;

}

export const actualizarArea = async (id, area) => {

    const response = await apiClient.put(`/areas/${id}`, area);

    return response.data;

}

export const cambiarEstadoArea = async (id) => {

    const response = await apiClient.patch(
        `/areas/${id}/estado`
    )

    return response.data
}