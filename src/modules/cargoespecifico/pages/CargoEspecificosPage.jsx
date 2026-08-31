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

        error

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
    // GUARDAR
    // =====================================================

    const guardarCargoEspecifico = (
        event
    ) => {

        event.preventDefault()


        const datos = {

            nombre,

            cargoId

        }


        console.log(
            'CARGO ESPECÍFICO:',
            datos
        )


        alert(
            'Cargo específico listo para guardar.'
        )

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

            />

        </>

    )

}


export default CargoEspecificosPage