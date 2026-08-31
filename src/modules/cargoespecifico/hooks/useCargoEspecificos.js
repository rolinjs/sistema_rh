import { useEffect, useState } from 'react'

import {
    listarCargosEspecificos
} from '../api/cargoEspecificoApi'

import {
    listarCargos
} from '../../cargos/api/cargosApi'


function useCargoEspecificos() {

    // =====================================================
    // CARGOS ESPECÍFICOS
    // =====================================================

    const [
        cargosEspecificos,
        setCargosEspecificos
    ] = useState([])


    // =====================================================
    // CARGOS
    // =====================================================

    const [
        cargos,
        setCargos
    ] = useState([])


    // =====================================================
    // ESTADOS
    // =====================================================

    const [
        loading,
        setLoading
    ] = useState(true)


    const [
        error,
        setError
    ] = useState(null)


    // =====================================================
    // CARGAR DATOS
    // =====================================================

    useEffect(() => {

        const cargarDatos = async () => {

            try {

                setLoading(true)

                setError(null)


                const [
                    respuestaCargosEspecificos,
                    respuestaCargos
                ] = await Promise.all([

                    listarCargosEspecificos(),

                    listarCargos()

                ])


                const datosCargosEspecificos =
                    Array.isArray(
                        respuestaCargosEspecificos
                    )
                        ? respuestaCargosEspecificos
                        : respuestaCargosEspecificos.content || []


                const datosCargos =
                    Array.isArray(
                        respuestaCargos
                    )
                        ? respuestaCargos
                        : respuestaCargos.content || []


                setCargosEspecificos(
                    datosCargosEspecificos
                )


                setCargos(
                    datosCargos
                )


            } catch (error) {

                console.error(
                    'ERROR CARGANDO CARGOS ESPECÍFICOS:',
                    error
                )


                setError(
                    'No se pudieron cargar los cargos específicos.'
                )

            } finally {

                setLoading(false)

            }

        }


        cargarDatos()

    }, [])


    // =====================================================
    // AGREGAR NOMBRE DEL CARGO
    // =====================================================

    const cargosEspecificosConCargo =
        cargosEspecificos.map(
            cargoEspecifico => {

                const cargoEncontrado =
                    cargos.find(
                        cargo =>
                            cargo.id ===
                            cargoEspecifico.cargoId
                    )


                return {

                    ...cargoEspecifico,

                    cargoNombre:
                        cargoEncontrado?.nombre
                        || '-'

                }

            }
        )


    return {

        cargosEspecificos:
            cargosEspecificosConCargo,

        cargos,

        loading,

        error

    }

}


export default useCargoEspecificos