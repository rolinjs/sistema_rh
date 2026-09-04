import { useCallback, useEffect, useState } from 'react'

import {
    listarCargos,
    crearCargo,
    editarCargo,
    cambiarEstadoCargo
} from '../api/cargosApi'

import apiClient from '../../../services/apiClient'


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

    const [guardando, setGuardando] = useState(false)

    const [cambiandoEstado, setCambiandoEstado] =
        useState(false)


    // =====================================================
    // CARGAR CARGOS
    // =====================================================

    const cargarCargos = useCallback(async () => {

        try {

            const respuesta =
                await listarCargos()

            setCargos(
                Array.isArray(respuesta)
                    ? respuesta
                    : []
            )

        } catch (error) {

            console.error(
                'ERROR CARGANDO CARGOS:',
                error
            )

            throw error

        }

    }, [])


    // =====================================================
    // CARGAR SUBÁREAS
    // =====================================================

    const cargarSubAreas = useCallback(async () => {

        try {

            const response =
                await apiClient.get(
                    '/subareas'
                )

            setSubAreas(
                Array.isArray(response.data)
                    ? response.data
                    : []
            )

        } catch (error) {

            console.error(
                'ERROR CARGANDO SUBÁREAS:',
                error
            )

            throw error

        }

    }, [])


    // =====================================================
    // CARGAR DATOS INICIALES
    // =====================================================

    const cargarDatos = useCallback(async () => {

        setLoading(true)

        setError(null)


        try {

            await Promise.all([
                cargarCargos(),
                cargarSubAreas()
            ])

        } catch (error) {

            console.error(
                'ERROR CARGANDO DATOS DE CARGOS:',
                error
            )

            setError(
                obtenerMensajeError(
                    error,
                    'No se pudieron cargar los cargos.'
                )
            )

        } finally {

            setLoading(false)

        }

    }, [
        cargarCargos,
        cargarSubAreas
    ])


    // =====================================================
    // EJECUTAR AL CARGAR
    // =====================================================

    useEffect(() => {

        cargarDatos()

    }, [
        cargarDatos
    ])


    // =====================================================
    // CREAR CARGO
    // =====================================================

    const crear = async (datos) => {

        setGuardando(true)

        setError(null)


        try {

            const cargoCreado =
                await crearCargo(datos)


            setCargos((actuales) => [

                ...actuales,

                cargoCreado

            ])


            return {

                ok: true,

                data: cargoCreado

            }

        } catch (error) {

            console.error(
                'ERROR CREANDO CARGO:',
                error
            )


            const mensaje =
                obtenerMensajeError(
                    error,
                    'No se pudo registrar el cargo.'
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
    // EDITAR CARGO
    // =====================================================

    const editar = async (
        id,
        datos
    ) => {

        setGuardando(true)

        setError(null)


        try {

            const cargoActualizado =
                await editarCargo(
                    id,
                    datos
                )


            setCargos((actuales) =>

                actuales.map(
                    cargo =>
                        cargo.id === id
                            ? cargoActualizado
                            : cargo
                )

            )


            return {

                ok: true,

                data: cargoActualizado

            }

        } catch (error) {

            console.error(
                'ERROR EDITANDO CARGO:',
                error
            )


            const mensaje =
                obtenerMensajeError(
                    error,
                    'No se pudo actualizar el cargo.'
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
                await cambiarEstadoCargo(
                    id
                )


            setCargos((actuales) =>

                actuales.map(
                    cargo =>
                        cargo.id === id
                            ? cargoActualizado
                            : cargo
                )

            )


            return {

                ok: true,

                data: cargoActualizado

            }

        } catch (error) {

            console.error(
                'ERROR CAMBIANDO ESTADO DEL CARGO:',
                error
            )


            const mensaje =
                obtenerMensajeError(
                    error,
                    'No se pudo cambiar el estado del cargo.'
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
    // RETORNO
    // =====================================================

    return {

        cargos,

        subAreas,

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


export default useCargos