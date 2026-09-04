import { useMemo, useState } from 'react'

import useCargos from '../hooks/useCargos'

import CargoForm from '../components/CargoForm'

import CargoTable from '../components/CargoTable'


function CargosPage() {

    const {
        cargos,
        subAreas,
        loading,
        error,
        guardando,
        cambiandoEstado,
        crear,
        editar,
        cambiarEstado
    } = useCargos()


    // =====================================================
    // FORMULARIO
    // =====================================================

    const [nombre, setNombre] = useState('')

    const [subAreaId, setSubAreaId] =
        useState('')

    const [descripcion, setDescripcion] =
        useState('')


    // =====================================================
    // BÚSQUEDA
    // =====================================================

    const [busqueda, setBusqueda] =
        useState('')


    // =====================================================
    // CARGO EN EDICIÓN
    // =====================================================

    const [cargoEditando, setCargoEditando] =
        useState(null)


    // =====================================================
    // FILTRAR CARGOS
    // =====================================================

    const cargosFiltrados = useMemo(() => {

        const texto =
            busqueda
                .trim()
                .toLowerCase()


        if (!texto) {

            return cargos

        }


        return cargos.filter(
            cargo =>

                cargo.nombre
                    ?.toLowerCase()
                    .includes(texto)

                ||

                cargo.SubAreaNombre
                    ?.toLowerCase()
                    .includes(texto)

                ||

                cargo.subAreaNombre
                    ?.toLowerCase()
                    .includes(texto)

                ||

                cargo.descripcion
                    ?.toLowerCase()
                    .includes(texto)

        )

    }, [
        cargos,
        busqueda
    ])


    // =====================================================
    // LIMPIAR FORMULARIO
    // =====================================================

    const limpiarFormulario = () => {

        setNombre('')

        setSubAreaId('')

        setDescripcion('')

        setCargoEditando(null)

    }


    // =====================================================
    // GUARDAR / ACTUALIZAR
    // =====================================================

    const manejarGuardar = async (
        datos
    ) => {

        let resultado


        // =================================================
        // EDITAR
        // =================================================

        if (cargoEditando) {

            resultado =
                await editar(
                    cargoEditando.id,
                    datos
                )


            if (resultado.ok) {

                window.alert(
                    'Cargo actualizado correctamente.'
                )

                limpiarFormulario()

            }


            return resultado

        }


        // =================================================
        // CREAR
        // =================================================

        resultado =
            await crear(
                datos
            )


        if (resultado.ok) {

            window.alert(
                'Cargo registrado correctamente.'
            )

            limpiarFormulario()

        }


        return resultado

    }


    // =====================================================
    // EDITAR
    // =====================================================

    const manejarEditar = (
        cargo
    ) => {

        console.log(
            'CARGO SELECCIONADO PARA EDITAR:',
            cargo
        )


        setCargoEditando(
            cargo
        )


        setNombre(
            cargo.nombre || ''
        )


        /*
         * El backend puede entregar subAreaId.
         * Se usa directamente para cargar
         * el select correspondiente.
         */

        setSubAreaId(
            cargo.subAreaId || ''
        )


        setDescripcion(
            cargo.descripcion || ''
        )


        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }


    // =====================================================
    // CAMBIAR ESTADO
    // =====================================================

    const manejarCambiarEstado = async (
        cargo
    ) => {

        const resultado =
            await cambiarEstado(
                cargo.id
            )


        if (resultado.ok) {

            const nuevoEstado =
                resultado.data?.estado


            window.alert(

                nuevoEstado === 'ACTIVO'

                    ? 'Cargo activado correctamente.'

                    : 'Cargo desactivado correctamente.'

            )

        }


        return resultado

    }


    return (

        <>

            <div className="w3-margin-bottom">

                <h4 className="w3-text-dark-grey">

                    <i className="fa fa-briefcase"></i>

                    &nbsp;

                    Cargos

                </h4>


                <p className="w3-text-grey">

                    Administración de los cargos de la empresa.

                </p>

            </div>


            <CargoForm

                nombre={nombre}

                setNombre={setNombre}

                subAreaId={subAreaId}

                setSubAreaId={setSubAreaId}

                descripcion={descripcion}

                setDescripcion={setDescripcion}

                subAreas={subAreas}

                onGuardar={manejarGuardar}

                guardando={guardando}

            />


            <div
                className="w3-margin-top w3-small w3-margin-bottom"
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}
            >

                <div
                    style={{
                        width: '240px',
                        position: 'relative'
                    }}
                >

                    <i
                        className="fa fa-search"
                        style={{
                            position: 'absolute',
                            left: '10px',
                            top: '9px',
                            color: '#000',
                            zIndex: 1
                        }}
                    ></i>


                    <input
                        className="w3-input w3-border"
                        type="text"
                        placeholder="Buscar..."
                        value={busqueda}
                        onChange={(event) =>
                            setBusqueda(
                                event.target.value
                            )
                        }
                        style={{
                            paddingLeft: '30px'
                        }}
                    />

                </div>

            </div>


            <CargoTable

                cargosFiltrados={
                    cargosFiltrados
                }

                loading={
                    loading
                }

                error={
                    error
                }

                onEditar={
                    manejarEditar
                }

                onCambiarEstado={
                    manejarCambiarEstado
                }

                cambiandoEstado={
                    cambiandoEstado
                }

            />

        </>

    )

}


export default CargosPage