import { useMemo, useState } from 'react'

import useCargoEspecificos
    from '../hooks/useCargoEspecificos'

import CargoEspecificoForm
    from '../components/CargoEspecificoForm'

import CargoEspecificoTable
    from '../components/CargoEspecificoTable'


function CargoEspecificosPage() {

    // =====================================================
    // HOOK
    // =====================================================

    const {

        cargosEspecificos,

        cargos,

        loading,

        error,

        guardando,

        cambiandoEstado,

        crear,

        editar,

        cambiarEstado

    } = useCargoEspecificos()


    // =====================================================
    // FORMULARIO
    // =====================================================

    const [
        nombre,
        setNombre
    ] = useState('')


    const [
        cargoId,
        setCargoId
    ] = useState('')


    // =====================================================
    // BÚSQUEDA
    // =====================================================

    const [
        busqueda,
        setBusqueda
    ] = useState('')


    // =====================================================
    // CARGO ESPECÍFICO EN EDICIÓN
    // =====================================================

    const [
        cargoEspecificoEditando,
        setCargoEspecificoEditando
    ] = useState(null)


    // =====================================================
    // FILTRAR
    // =====================================================

    const cargosEspecificosFiltrados =
        useMemo(() => {

            const texto =
                busqueda
                    .trim()
                    .toLowerCase()


            if (!texto) {

                return cargosEspecificos

            }


            return cargosEspecificos.filter(
                cargoEspecifico =>

                    cargoEspecifico.nombre
                        ?.toLowerCase()
                        .includes(texto)

                    ||

                    cargoEspecifico.cargoNombre
                        ?.toLowerCase()
                        .includes(texto)

                    ||

                    cargoEspecifico.estado
                        ?.toLowerCase()
                        .includes(texto)

            )

        }, [
            cargosEspecificos,
            busqueda
        ])


    // =====================================================
    // LIMPIAR FORMULARIO
    // =====================================================

    const limpiarFormulario = () => {

        setNombre('')

        setCargoId('')

        setCargoEspecificoEditando(null)

    }


    // =====================================================
    // CANCELAR EDICIÓN
    // =====================================================

    const cancelarEdicion = () => {

        limpiarFormulario()

    }


    // =====================================================
    // GUARDAR / ACTUALIZAR
    // =====================================================

    const guardarCargoEspecifico =
        async (event) => {

            event.preventDefault()


            if (!nombre.trim()) {

                window.alert(
                    'Ingrese el nombre del cargo específico.'
                )

                return

            }


            if (!cargoId) {

                window.alert(
                    'Seleccione un cargo.'
                )

                return

            }


            const datos = {

                nombre:
                    nombre.trim(),

                cargoId:
                    cargoId

            }


            let resultado


            // =================================================
            // EDITAR
            // =================================================

            if (
                cargoEspecificoEditando
            ) {

                resultado =
                    await editar(
                        cargoEspecificoEditando.id,
                        datos
                    )


                if (resultado.ok) {

                    window.alert(
                        'Cargo específico actualizado correctamente.'
                    )

                    limpiarFormulario()

                }


                return

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
                    'Cargo específico registrado correctamente.'
                )

                limpiarFormulario()

            }

        }


    // =====================================================
    // EDITAR
    // =====================================================

    const manejarEditar = (
        cargoEspecifico
    ) => {

        console.log(
            'CARGO ESPECÍFICO SELECCIONADO:',
            cargoEspecifico
        )


        setCargoEspecificoEditando(
            cargoEspecifico
        )


        setNombre(
            cargoEspecifico.nombre || ''
        )


        setCargoId(
            cargoEspecifico.cargoId || ''
        )


        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }


    // =====================================================
    // CAMBIAR ESTADO
    // =====================================================

    const manejarCambiarEstado =
        async (
            cargoEspecifico
        ) => {

            const resultado =
                await cambiarEstado(
                    cargoEspecifico.id
                )


            if (resultado.ok) {

                const nuevoEstado =
                    resultado.data?.estado


                window.alert(

                    nuevoEstado === 'ACTIVO'

                        ? 'Cargo específico activado correctamente.'

                        : 'Cargo específico desactivado correctamente.'

                )

            }


            return resultado

        }


    // =====================================================
    // IMPORTAR
    // =====================================================

    const importarArchivo = (
        event
    ) => {

        const archivo =
            event.target.files?.[0]


        if (!archivo) {

            return

        }


        console.log(
            'ARCHIVO:',
            archivo
        )

    }


    return (

        <>


            {/* =================================================
                TÍTULO
            ================================================= */}

            <div className="w3-margin-bottom">

                <h4 className="w3-text-dark-grey">

                    <i className="fa fa-id-badge"></i>

                    &nbsp;

                    Cargos específicos

                </h4>


                <p className="w3-text-grey">

                    Administración de los cargos específicos de la empresa.

                </p>

            </div>


            {/* =================================================
                FORMULARIO
            ================================================= */}

            <CargoEspecificoForm

                nombre={
                    nombre
                }

                setNombre={
                    setNombre
                }

                cargoId={
                    cargoId
                }

                setCargoId={
                    setCargoId
                }

                cargos={
                    cargos
                }

                guardarCargoEspecifico={
                    guardarCargoEspecifico
                }

                importarArchivo={
                    importarArchivo
                }

                guardando={
                    guardando
                }

                editando={
                    cargoEspecificoEditando
                }

                onCancelar={
                    cancelarEdicion
                }

            />


            {/* =================================================
                BUSCADOR
            ================================================= */}

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


            {/* =================================================
                TABLA
            ================================================= */}

            <CargoEspecificoTable

                cargosEspecificosFiltrados={
                    cargosEspecificosFiltrados
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


export default CargoEspecificosPage