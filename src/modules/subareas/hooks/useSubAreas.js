import { useEffect, useState } from 'react'

import {
    listarSubAreas
} from '../api/subAreaApi'

import {
    listarAreas
} from '../../areas/api/areaApi'


function useSubAreas() {

    // =====================================================
    // ESTADOS
    // =====================================================

    const [subAreas, setSubAreas] = useState([])

    const [areas, setAreas] = useState([])

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(null)


    // =====================================================
    // CARGAR DATOS
    // =====================================================

    useEffect(() => {

        const cargarDatos = async () => {

            try {

                setLoading(true)

                setError(null)


                const [
                    datosSubAreas,
                    datosAreas
                ] = await Promise.all([

                    listarSubAreas(),

                    listarAreas()

                ])


                console.log(
                    'SUBÁREAS:',
                    datosSubAreas
                )

                console.log(
                    'ÁREAS:',
                    datosAreas
                )


                setSubAreas(
                    datosSubAreas
                )

                setAreas(
                    datosAreas
                )


            } catch (error) {

                console.error(
                    'ERROR CARGANDO SUBÁREAS:',
                    error
                )


                setError(
                    'No se pudieron cargar las subáreas.'
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

        subAreas,

        areas,

        loading,

        error

    }

}


export default useSubAreas