import { useCallback, useEffect, useState } from 'react'

import {
    listarCargosEspecificos,
    crearCargoEspecifico,
    editarCargoEspecifico,
    cambiarEstadoCargoEspecifico
} from '../api/cargoEspecificoApi'

import {
    listarCargos
} from '../../cargos/api/cargosApi'


// =====================================================
// OBTENER MENSAJE DEL ERROR
// =====================================================

const obtenerMensajeError = (
    error,
    mensajePorDefecto
) => {

    if (error?.response?.data) {

        const data =
            error.response.data


        if (
            typeof data === 'string' &&
            data.trim() !== ''
        ) {

            return data

        }


        if (data.message) {

            return data.message

        }


        if (data.error) {

            return data.error

        }

    }


    if (error?.message) {

        return error.message

    }


    return mensajePorDefecto

}


// =====================================================
// HOOK
// =====================================================

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


    const [
        guardando,
        setGuardando
    ] = useState(false)


    const [
        cambiandoEstado,
        setCambiandoEstado
    ] = useState(false)


    // =====================================================
    // CARGAR CARGOS ESPECÍFICOS
    // =====================================================

    const cargarCargosEspecificos =
        useCallback(async () => {

            const respuesta =
                await listarCargosEspecificos()


            const datos =
                Array.isArray(respuesta)
                    ? respuesta
                    : respuesta?.content || []


            setCargosEspecificos(
                datos
            )

        }, [])


    // =====================================================
    // CARGAR CARGOS
    // =====================================================

    const cargarCargos =
        useCallback(async () => {

            const respuesta =
                await listarCargos()


            const datos =
                Array.isArray(respuesta)
                    ? respuesta
                    : respuesta?.content || []


            setCargos(
                datos
            )

        }, [])


    // =====================================================
    // CARGAR DATOS
    // =====================================================

    const cargarDatos =
        useCallback(async () => {

            try {

                setLoading(true)

                setError(null)


                await Promise.all([

                    cargarCargosEspecificos(),

                    cargarCargos()

                ])

            } catch (error) {

                console.error(
                    'ERROR CARGANDO CARGOS ESPECÍFICOS:',
                    error
                )


                setError(
                    obtenerMensajeError(
                        error,
                        'No se pudieron cargar los cargos específicos.'
                    )
                )

            } finally {

                setLoading(false)

            }

        }, [
            cargarCargosEspecificos,
            cargarCargos
        ])


    // =====================================================
    // CARGA INICIAL
    // =====================================================

    useEffect(() => {

        cargarDatos()

    }, [
        cargarDatos
    ])


    // =====================================================
    // CREAR
    // =====================================================

    const crear = async (
        datos
    ) => {

        setGuardando(true)

        setError(null)


        try {

            const nuevoCargoEspecifico =
                await crearCargoEspecifico(
                    datos
                )


            setCargosEspecificos(
                actuales => [
                    ...actuales,
                    nuevoCargoEspecifico
                ]
            )


            return {

                ok: true,

                data: nuevoCargoEspecifico

            }

        } catch (error) {

            console.error(
                'ERROR CREANDO CARGO ESPECÍFICO:',
                error
            )


            const mensaje =
                obtenerMensajeError(
                    error,
                    'No se pudo registrar el cargo específico.'
                )


            setError(mensaje)


            return {

                ok: false,

                error: mensaje

            }

        } finally {

            setGuardando(false)

        }

    }


    // =====================================================
    // EDITAR
    // =====================================================

    const editar = async (
        id,
        datos
    ) => {

        setGuardando(true)

        setError(null)


        try {

            const cargoActualizado =
                await editarCargoEspecifico(
                    id,
                    datos
                )


            setCargosEspecificos(
                actuales =>
                    actuales.map(
                        cargoEspecifico =>
                            cargoEspecifico.id === id
                                ? cargoActualizado
                                : cargoEspecifico
                    )
            )


            return {

                ok: true,

                data: cargoActualizado

            }

        } catch (error) {

            console.error(
                'ERROR EDITANDO CARGO ESPECÍFICO:',
                error
            )


            const mensaje =
                obtenerMensajeError(
                    error,
                    'No se pudo actualizar el cargo específico.'
                )


            setError(mensaje)


            return {

                ok: false,

                error: mensaje

            }

        } finally {

            setGuardando(false)

        }

    }


    // =====================================================
    // CAMBIAR ESTADO
    // =====================================================

    const cambiarEstado = async (
        id
    ) => {

        setCambiandoEstado(true)

        setError(null)


        try {

            const cargoActualizado =
                await cambiarEstadoCargoEspecifico(
                    id
                )


            setCargosEspecificos(
                actuales =>
                    actuales.map(
                        cargoEspecifico =>
                            cargoEspecifico.id === id
                                ? cargoActualizado
                                : cargoEspecifico
                    )
            )


            return {

                ok: true,

                data: cargoActualizado

            }

        } catch (error) {

            console.error(
                'ERROR CAMBIANDO ESTADO DEL CARGO ESPECÍFICO:',
                error
            )


            const mensaje =
                obtenerMensajeError(
                    error,
                    'No se pudo cambiar el estado del cargo específico.'
                )


            setError(mensaje)


            return {

                ok: false,

                error: mensaje

            }

        } finally {

            setCambiandoEstado(false)

        }

    }


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
                        cargoEspecifico.cargoNombre
                        || cargoEncontrado?.nombre
                        || '-'

                }

            }
        )


    // =====================================================
    // RETORNO
    // =====================================================

    return {

        cargosEspecificos:
            cargosEspecificosConCargo,

        cargos,

        loading,

        error,

        guardando,

        cambiandoEstado,

        cargarDatos,

        crear,

        editar,

        cambiarEstado

    }

}


export default useCargoEspecificos