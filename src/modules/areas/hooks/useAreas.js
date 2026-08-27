import { useEffect, useState } from 'react'

import {
    listarAreas,
    crearArea,
    actualizarArea,
    cambiarEstadoArea
} from '../api/areaApi';

import {
    obtenerEstadoServidor,
    suscribirseEstadoServidor
} from '../../../services/serverStatus'


function useAreas() {

    // =====================================================
    // ESTADOS
    // =====================================================

    const [modoEdicion, setModoEdicion] = useState(false)

    const [areaId, setAreaId] = useState(null)

    const [nombre, setNombre] = useState('')

    const [descripcion, setDescripcion] = useState('')

    const [busqueda, setBusqueda] = useState('')

    const [servidorOnline, setServidorOnline] = useState(
        obtenerEstadoServidor()
    )


    // =====================================================
    // ÁREAS
    // =====================================================

    const [areas, setAreas] = useState([])


    // =====================================================
    // LISTAR ÁREAS
    // =====================================================

    useEffect(() => {

        const cancelarSuscripcion =
            suscribirseEstadoServidor(async (estado) => {

                setServidorOnline(estado)

                if (estado) {

                    const datos = await listarAreas()

                    setAreas(datos)

                }

            })

        return cancelarSuscripcion

    }, [])


    // =====================================================
    // FILTRAR
    // =====================================================

    const areasFiltradas = areas.filter(area => {

        const texto = busqueda
            .toLowerCase()
            .trim()

        return (
            area.nombre
                .toLowerCase()
                .includes(texto)

            ||

            area.descripcion
                .toLowerCase()
                .includes(texto)
        )

    })


    // =====================================================
    // GUARDAR / ACTUALIZAR
    // =====================================================

    const guardarArea = async (event) => {

        event.preventDefault()

        const datosArea = {
            nombre,
            descripcion
        }


        if (modoEdicion) {

            const areaActualizada = await actualizarArea(
                areaId,
                datosArea
            )

            setAreas(
                areas.map(area =>
                    area.id === areaActualizada.id
                        ? areaActualizada
                        : area
                )
            )

            cancelarEdicion()

        } else {

            const areaCreada = await crearArea(
                datosArea
            )

            setAreas([
                ...areas,
                areaCreada
            ])

        }

    }


    // =====================================================
    // EDITAR
    // =====================================================

    const editarArea = (area) => {

        setModoEdicion(true)

        setAreaId(area.id)

        setNombre(area.nombre)

        setDescripcion(area.descripcion)

    }


    // =====================================================
    // CANCELAR
    // =====================================================

    const cancelarEdicion = () => {

        setModoEdicion(false)

        setAreaId(null)

        setNombre('')

        setDescripcion('')

    }


    // =====================================================
    // IMPORTAR EXCEL
    // =====================================================

    const importarExcel = (event) => {

        const archivo = event.target.files[0]

        if (!archivo) {
            return
        }

        console.log(
            'Archivo seleccionado:',
            archivo.name
        )

    }

    // =====================================================
    //  CAMBIAR ESTADO
    // =====================================================

    const cambiarEstado = async (id) => {

        const areaActualizada = await cambiarEstadoArea(id)

        setAreas(
            areas.map(area =>
                area.id === areaActualizada.id
                    ? areaActualizada
                    : area
            )
        )
    }


    // =====================================================
    // RETORNO
    // =====================================================

    return {

        modoEdicion,

        nombre,

        descripcion,

        busqueda,

        areasFiltradas,
        
        servidorOnline,

        setNombre,

        setDescripcion,

        setBusqueda,

        guardarArea,

        editarArea,

        cancelarEdicion,

        importarExcel,
        
        cambiarEstado

    }

}

export default useAreas