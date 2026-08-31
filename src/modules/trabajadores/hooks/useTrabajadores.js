import { useEffect, useState } from 'react'

import {
    listarTrabajadores
} from '../api/trabajadoresApi'

import {
    listarAreas
} from '../../areas/api/areaApi'


function useTrabajadores() {

    // =====================================================
    // ESTADOS
    // =====================================================

    const [trabajadores, setTrabajadores] = useState([])

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

                const datosTrabajadores =
                    await listarTrabajadores()

                const datosAreas =
                    await listarAreas()


                console.log(
                    'TRABAJADORES:',
                    datosTrabajadores
                )

                console.log(
                    'AREAS:',
                    datosAreas
                )


                setTrabajadores(
                    datosTrabajadores.content
                )

                setAreas(
                    datosAreas
                )

            } catch (error) {

                console.error(
                    'ERROR CARGANDO TRABAJADORES:',
                    error
                )

                setError(
                    'No se pudieron cargar los trabajadores.'
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

        trabajadores,

        areas,

        loading,

        error

    }

}


export default useTrabajadores