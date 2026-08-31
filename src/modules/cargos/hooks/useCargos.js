import { useEffect, useState } from 'react'

import apiClient from '../../../services/apiClient'


function useCargos() {

    // =====================================================
    // DATOS
    // =====================================================

    const [cargos, setCargos] = useState([])

    const [subAreas, setSubAreas] = useState([])


    // =====================================================
    // ESTADOS
    // =====================================================

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(null)


    // =====================================================
    // CARGAR CARGOS Y SUBÁREAS
    // =====================================================

    useEffect(() => {

        const cargarDatos = async () => {

            try {

                setLoading(true)

                setError(null)


                const respuestaCargos =
                    await apiClient.get('/cargos')


                const respuestaSubAreas =
                    await apiClient.get('/subareas')


                setCargos(
                    respuestaCargos.data
                )


                setSubAreas(
                    respuestaSubAreas.data
                )


            } catch (error) {

                console.error(
                    'ERROR CARGANDO CARGOS:',
                    error
                )


                setError(
                    'No se pudieron cargar los cargos.'
                )


            } finally {

                setLoading(false)

            }

        }


        cargarDatos()

    }, [])


    // =====================================================
    // RETORNO
    // =====================================================

    return {

        cargos,

        subAreas,

        loading,

        error

    }

}


export default useCargos