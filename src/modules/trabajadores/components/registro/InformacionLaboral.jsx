import SelectCampo from './SelectCampo'


function InformacionLaboral({

    area,
    setArea,

    subArea,
    setSubArea,

    cargo,
    setCargo,

    cargoEspecifico,
    setCargoEspecifico,

    tipoTrabajador,
    setTipoTrabajador,

    regimenLaboral,
    setRegimenLaboral,

    modalidad,
    setModalidad,

    fechaIngreso,
    setFechaIngreso,

    fechaCese,
    setFechaCese,

    areas,
    subAreasFiltradas,
    cargosFiltrados,
    cargosEspecificosFiltrados,
    tiposTrabajador,
    regimenesLaborales,
    modalidades

}) {

    const estiloLabel = {
        fontSize: '12px',
        fontWeight: 600,
        color: '#5a5a5a'
    }


    // =====================================================
    // CAMBIAR ÁREA
    // =====================================================

    const manejarCambioArea = (event) => {

        const nuevoAreaId =
            event.target.value


        setArea(
            nuevoAreaId
        )


        // Al cambiar de área,
        // la subárea deja de ser válida.

        setSubArea('')


        // El cargo anterior también deja
        // de ser válido.

        setCargo('')


        // El cargo específico anterior también
        // deja de ser válido.

        setCargoEspecifico('')

    }


    // =====================================================
    // CAMBIAR SUBÁREA
    // =====================================================

    const manejarCambioSubArea = (event) => {

        const nuevaSubAreaId =
            event.target.value


        setSubArea(
            nuevaSubAreaId
        )


        // Al cambiar de subárea,
        // el cargo anterior deja de ser válido.

        setCargo('')


        // El cargo específico anterior también
        // deja de ser válido.

        setCargoEspecifico('')

    }


    // =====================================================
    // CAMBIAR CARGO
    // =====================================================

    const manejarCambioCargo = (event) => {

        const nuevoCargoId =
            event.target.value


        setCargo(
            nuevoCargoId
        )


        // Al cambiar de cargo,
        // el cargo específico anterior
        // deja de ser válido.

        setCargoEspecifico('')

    }


    return (

        <>

            <hr />


            <h4 className="w3-text-dark-grey">

                <i className="fa fa-briefcase"></i>

                &nbsp;

                Información laboral

            </h4>


            {/* =================================================
                FILA 1
            ================================================= */}

            <div className="w3-row-padding">

                <div className="w3-col l3 m6 s12">

                    <SelectCampo

                        label="Área"

                        value={area}

                        onChange={
                            manejarCambioArea
                        }

                        opciones={
                            areas
                        }

                    />

                </div>


                <div className="w3-col l3 m6 s12">

                    <SelectCampo

                        label="Sub Área"

                        value={subArea}

                        onChange={
                            manejarCambioSubArea
                        }

                        opciones={
                            subAreasFiltradas
                        }

                    />

                </div>


                <div className="w3-col l3 m6 s12">

                    <SelectCampo

                        label="Cargo"

                        value={cargo}

                        onChange={
                            manejarCambioCargo
                        }

                        opciones={
                            cargosFiltrados
                        }

                    />

                </div>


                <div className="w3-col l3 m6 s12">

                    <SelectCampo

                        label="Cargo específico"

                        value={
                            cargoEspecifico
                        }

                        onChange={(event) =>
                            setCargoEspecifico(
                                event.target.value
                            )
                        }

                        opciones={
                            cargosEspecificosFiltrados
                        }

                    />

                </div>

            </div>


            {/* =================================================
                FILA 2
            ================================================= */}

            <div className="w3-row-padding w3-margin-top">

                <div className="w3-col l3 m6 s12">

                    <SelectCampo

                        label="Tipo de trabajador"

                        value={
                            tipoTrabajador
                        }

                        onChange={(event) =>
                            setTipoTrabajador(
                                event.target.value
                            )
                        }

                        opciones={
                            tiposTrabajador
                        }

                    />

                </div>


                <div className="w3-col l3 m6 s12">

                    <SelectCampo

                        label="Régimen laboral"

                        value={
                            regimenLaboral
                        }

                        onChange={(event) =>
                            setRegimenLaboral(
                                event.target.value
                            )
                        }

                        opciones={
                            regimenesLaborales
                        }

                    />

                </div>


                <div className="w3-col l3 m6 s12">

                    <SelectCampo

                        label="Modalidad"

                        value={
                            modalidad
                        }

                        onChange={(event) =>
                            setModalidad(
                                event.target.value
                            )
                        }

                        opciones={
                            modalidades
                        }

                    />

                </div>


                <div className="w3-col l3 m6 s12">

                    <label style={estiloLabel}>

                        Fecha de ingreso

                    </label>


                    <input
                        className="w3-input w3-border w3-round-small"
                        type="date"
                        value={
                            fechaIngreso
                        }
                        onChange={(event) =>
                            setFechaIngreso(
                                event.target.value
                            )
                        }
                    />

                </div>

            </div>


            {/* =================================================
                FECHA CESE
            ================================================= */}

            <div className="w3-row-padding w3-margin-top">

                <div className="w3-col l3 m6 s12">

                    <label style={estiloLabel}>

                        Fecha de cese

                    </label>


                    <input
                        className="w3-input w3-border w3-round-small"
                        type="date"
                        value={
                            fechaCese
                        }
                        onChange={(event) =>
                            setFechaCese(
                                event.target.value
                            )
                        }
                    />

                </div>

            </div>

        </>

    )

}


export default InformacionLaboral