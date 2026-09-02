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
    // PAGINACIÓN
    // =====================================================

    const [page, setPage] = useState(0)

    const [size, setSize] = useState(10)

    const [totalPages, setTotalPages] = useState(0)

    const [totalElements, setTotalElements] = useState(0)


    // =====================================================
    // CARGAR TRABAJADORES
    // =====================================================

    useEffect(() => {

        const cargarTrabajadores = async () => {

            try {

                setLoading(true)
                setError(null)

                const datosTrabajadores =
                    await listarTrabajadores(
                        page,
                        size
                    )


                console.log(
                    'TRABAJADORES:',
                    datosTrabajadores
                )


                setTrabajadores(
                    datosTrabajadores?.content || []
                )


                setTotalPages(
                    datosTrabajadores?.totalPages || 0
                )


                setTotalElements(
                    datosTrabajadores?.totalElements || 0
                )

            } catch (error) {

                console.error(
                    'ERROR CARGANDO TRABAJADORES:',
                    error
                )


                setError(
                    'No se pudieron cargar los trabajadores.'
                )


                setTrabajadores([])

                setTotalPages(0)

                setTotalElements(0)

            } finally {

                setLoading(false)

            }

        }


        cargarTrabajadores()

    }, [page, size])


    // =====================================================
    // CARGAR ÁREAS
    // =====================================================

    useEffect(() => {

        const cargarAreas = async () => {

            try {

                const datosAreas =
                    await listarAreas()


                console.log(
                    'AREAS:',
                    datosAreas
                )


                setAreas(
                    datosAreas || []
                )

            } catch (error) {

                console.error(
                    'ERROR CARGANDO ÁREAS:',
                    error
                )


                setAreas([])

            }

        }


        cargarAreas()

    }, [])


    // =====================================================
    // IR A UNA PÁGINA
    // =====================================================

    const irPagina = (nuevaPagina) => {

        if (nuevaPagina < 0) {

            return

        }


        if (
            totalPages > 0 &&
            nuevaPagina >= totalPages
        ) {

            return

        }


        setPage(nuevaPagina)

    }


    // =====================================================
    // PÁGINA SIGUIENTE
    // =====================================================

    const siguientePagina = () => {

        if (
            page < totalPages - 1
        ) {

            setPage(
                paginaActual =>
                    paginaActual + 1
            )

        }

    }


    // =====================================================
    // PÁGINA ANTERIOR
    // =====================================================

    const paginaAnterior = () => {

        if (page > 0) {

            setPage(
                paginaActual =>
                    paginaActual - 1
            )

        }

    }


    // =====================================================
    // CAMBIAR CANTIDAD POR PÁGINA
    // =====================================================

    const cambiarSize = (nuevoSize) => {

        setSize(
            Number(nuevoSize)
        )

        setPage(0)

    }


    // =====================================================
    // RETORNO
    // =====================================================

    return {

        trabajadores,

        areas,

        loading,

        error,

        page,

        size,

        totalPages,

        totalElements,

        irPagina,

        siguientePagina,

        paginaAnterior,

        cambiarSize

    }

}


export default useTrabajadores