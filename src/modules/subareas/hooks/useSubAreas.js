import { useCallback, useEffect, useState } from 'react'
import {
    listarSubAreas,
    crearSubArea,
    editarSubArea,
    cambiarEstadoSubArea
} from '../api/subAreaApi'
import { listarAreas } from '../../areas/api/areaApi'

const obtenerMensajeError = (error, mensajePorDefecto) => {
    if (error?.response?.data) {
        const data = error.response.data

        if (typeof data === 'string' && data.trim() !== '') {
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

export const useSubAreas = () => {

    const [subAreas, setSubAreas] = useState([])
    const [areas, setAreas] = useState([])

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const [guardando, setGuardando] = useState(false)
    const [editando, setEditando] = useState(false)
    const [cambiandoEstado, setCambiandoEstado] = useState(false)

    const cargarDatos = useCallback(async () => {

        setLoading(true)
        setError('')

        try {

            const [subAreasData, areasData] = await Promise.all([
                listarSubAreas(),
                listarAreas()
            ])

            setSubAreas(Array.isArray(subAreasData) ? subAreasData : [])
            setAreas(Array.isArray(areasData) ? areasData : [])

        } catch (error) {

            console.error('Error cargando subáreas:', error)

            setError(
                obtenerMensajeError(
                    error,
                    'No se pudieron cargar las subáreas.'
                )
            )

        } finally {

            setLoading(false)
        }

    }, [])

    useEffect(() => {
        cargarDatos()
    }, [cargarDatos])

    const crear = async (datos) => {

        setGuardando(true)
        setError('')

        try {

            const nuevaSubArea = await crearSubArea(datos)

            setSubAreas((actuales) => [
                ...actuales,
                nuevaSubArea
            ])

            return {
                ok: true,
                data: nuevaSubArea
            }

        } catch (error) {

            console.error('Error creando subárea:', error)

            const mensaje = obtenerMensajeError(
                error,
                'No se pudo registrar la subárea.'
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

    const editar = async (id, datos) => {

        setEditando(true)
        setError('')

        try {

            const subAreaActualizada = await editarSubArea(id, datos)

            setSubAreas((actuales) =>
                actuales.map((subArea) =>
                    subArea.id === id
                        ? subAreaActualizada
                        : subArea
                )
            )

            return {
                ok: true,
                data: subAreaActualizada
            }

        } catch (error) {

            console.error('Error editando subárea:', error)

            const mensaje = obtenerMensajeError(
                error,
                'No se pudo actualizar la subárea.'
            )

            setError(mensaje)

            return {
                ok: false,
                error: mensaje
            }

        } finally {

            setEditando(false)
        }
    }

    const cambiarEstado = async (id) => {

        setCambiandoEstado(true)
        setError('')

        try {

            const subAreaActualizada =
                await cambiarEstadoSubArea(id)

            setSubAreas((actuales) =>
                actuales.map((subArea) =>
                    subArea.id === id
                        ? subAreaActualizada
                        : subArea
                )
            )

            return {
                ok: true,
                data: subAreaActualizada
            }

        } catch (error) {

            console.error('Error cambiando estado:', error)

            const mensaje = obtenerMensajeError(
                error,
                'No se pudo cambiar el estado de la subárea.'
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

    return {
        subAreas,
        areas,
        loading,
        error,
        guardando,
        editando,
        cambiandoEstado,
        cargarDatos,
        crear,
        editar,
        cambiarEstado
    }
}