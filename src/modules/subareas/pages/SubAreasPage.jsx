import { useMemo, useState } from 'react'

import { useSubAreas } from '../hooks/useSubAreas'

import SubAreaForm from '../components/SubAreaForm'
import SubAreaTable from '../components/SubAreaTable'

const SubAreasPage = () => {

    const {
        subAreas,
        areas,
        loading,
        error,
        guardando,
        editando,
        cambiandoEstado,
        crear,
        editar,
        cambiarEstado
    } = useSubAreas()

    const [nombre, setNombre] = useState('')
    const [areaId, setAreaId] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const [busqueda, setBusqueda] = useState('')

    const [subAreaEditando, setSubAreaEditando] = useState(null)

    const subAreasFiltradas = useMemo(() => {

        const texto = busqueda
            .trim()
            .toLowerCase()

        if (!texto) {
            return subAreas
        }

        return subAreas.filter((subArea) =>
            (subArea.nombre || '')
                .toLowerCase()
                .includes(texto)
            ||
            (subArea.areaNombre || '')
                .toLowerCase()
                .includes(texto)
            ||
            (subArea.descripcion || '')
                .toLowerCase()
                .includes(texto)
        )

    }, [subAreas, busqueda])

    const limpiarFormulario = () => {

        setNombre('')
        setAreaId('')
        setDescripcion('')
        setSubAreaEditando(null)
    }

    const manejarGuardar = async (datos) => {

        let resultado

        if (subAreaEditando) {

            resultado = await editar(
                subAreaEditando.id,
                datos
            )

            if (resultado.ok) {

                window.alert(
                    'Subárea actualizada correctamente.'
                )

                limpiarFormulario()
            }

        } else {

            resultado = await crear(datos)

            if (resultado.ok) {

                window.alert(
                    'Subárea registrada correctamente.'
                )

                limpiarFormulario()
            }
        }

        return resultado
    }

    const manejarEditar = (subArea) => {

        console.log(
            'Cargando subárea para editar:',
            subArea
        )

        setSubAreaEditando(subArea)

        setNombre(
            subArea.nombre || ''
        )

        setAreaId(
            subArea.areaId || ''
        )

        setDescripcion(
            subArea.descripcion || ''
        )

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const manejarCancelarEdicion = () => {

        limpiarFormulario()
    }

    const manejarCambiarEstado = async (subArea) => {

        const resultado = await cambiarEstado(
            subArea.id
        )

        if (resultado.ok) {

            const nuevoEstado =
                resultado.data?.estado

            window.alert(
                nuevoEstado === 'ACTIVO'
                    ? 'Subárea activada correctamente.'
                    : 'Subárea desactivada correctamente.'
            )
        }
    }

    return (
        <div className="w3-container">

            {/* TÍTULO */}

            <div className="w3-margin-bottom">

                <h2 className="w3-text-dark-grey">

                    <i className="fa fa-sitemap w3-margin-right"></i>

                    SubÁreas

                </h2>

                <p className="w3-text-grey">
                    Gestión de subáreas de la organización.
                </p>

            </div>

            {/* FORMULARIO */}

            <SubAreaForm
                nombre={nombre}
                setNombre={setNombre}
                areaId={areaId}
                setAreaId={setAreaId}
                descripcion={descripcion}
                setDescripcion={setDescripcion}
                areas={areas}
                onGuardar={manejarGuardar}
                guardando={guardando || editando}
                editando={!!subAreaEditando}
                onCancelar={manejarCancelarEdicion}
            />

            {/* BUSCADOR */}

            <div className="w3-row w3-margin-bottom">

                <div className="w3-col l12 m12 s12">

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}
                    >

                        <div
                            style={{
                                width: '240px'
                            }}
                        >

                            <div className="w3-display-container">

                                <input
                                    type="text"
                                    className="w3-input w3-border w3-round"
                                    placeholder="Buscar..."
                                    value={busqueda}
                                    onChange={(e) =>
                                        setBusqueda(e.target.value)
                                    }
                                />

                                <i
                                    className="fa fa-search w3-display-right w3-margin-right"
                                    style={{
                                        color: '#777'
                                    }}
                                ></i>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* TABLA */}

            <SubAreaTable
                subAreasFiltradas={subAreasFiltradas}
                loading={loading}
                error={error}
                onEditar={manejarEditar}
                onCambiarEstado={manejarCambiarEstado}
                cambiandoEstado={cambiandoEstado}
            />

        </div>
    )
}

export default SubAreasPage