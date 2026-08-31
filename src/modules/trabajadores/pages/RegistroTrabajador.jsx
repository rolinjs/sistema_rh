import useRegistroTrabajador
    from '../hooks/useRegistroTrabajador'


import DatosPersonales
    from '../components/registro/DatosPersonales'


import FotografiaTrabajador
    from '../components/registro/FotografiaTrabajador'


import InformacionLaboral
    from '../components/registro/InformacionLaboral'


import InformacionBancaria
    from '../components/registro/InformacionBancaria'


import InformacionPrevisional
    from '../components/registro/InformacionPrevisional'


import AsignacionFamiliar
    from '../components/registro/AsignacionFamiliar'


function RegistroTrabajador() {


    const {

        // =====================================================
        // DATOS PERSONALES
        // =====================================================

        dni,

        setDni,

        nombres,

        setNombres,

        apellidoPaterno,

        setApellidoPaterno,

        apellidoMaterno,

        setApellidoMaterno,

        fechaNacimiento,

        setFechaNacimiento,

        sexo,

        setSexo,

        consultandoDni,

        direccion,

        setDireccion,

        correo,

        setCorreo,

        telefono,

        setTelefono,

        telefonoOpcional,


        // =====================================================
        // MODO DE REGISTRO
        // =====================================================

        registroManual,

        setRegistroManual,


        // =====================================================
        // FOTOGRAFÍA
        // =====================================================

        foto,

        setFoto,

        camaraActiva,

        videoRef,

        canvasRef,

        abrirCamara,

        cerrarCamara,

        capturarFoto,

        tomarOtraFoto,


        // =====================================================
        // INFORMACIÓN LABORAL
        // =====================================================

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


        // =====================================================
        // INFORMACIÓN BANCARIA
        // =====================================================

        banco,

        setBanco,

        tipoCuenta,

        setTipoCuenta,

        cuentaCci,

        setCuentaCci,


        // =====================================================
        // INFORMACIÓN PREVISIONAL
        // =====================================================

        afpOnp,

        setAfpOnp,

        tipoComision,

        setTipoComision,

        cuspp,

        setCuspp,


        // =====================================================
        // ASIGNACIÓN FAMILIAR
        // =====================================================

        hijos,

        setHijos,

        asignacionFamiliar,

        setAsignacionFamiliar,

        fechaAsignacion,

        setFechaAsignacion,

        montoAsignacion,

        setMontoAsignacion,


        // =====================================================
        // MAESTROS
        // =====================================================

        areas,

        subAreasFiltradas,

        cargosFiltrados,

        cargosEspecificosFiltrados,

        tiposTrabajador,

        regimenesLaborales,

        modalidades,

        bancos,

        tiposCuenta,

        sistemasPrevisionales,

        tiposComision,


        // =====================================================
        // FUNCIONES
        // =====================================================

        consultarDni,

        guardarTrabajador,

        nombreCompletoApi

    } = useRegistroTrabajador()


    return (

        <div className="w3-container">


            {/* =================================================
                CABECERA
            ================================================= */}

            <div className="w3-margin-bottom">

                <h3
                    className="w3-text-dark-grey"
                    style={{
                        marginBottom: '5px'
                    }}
                >

                    <i className="fa fa-id-card"></i>

                    &nbsp;

                    Trabajadores

                </h3>


                <p className="w3-text-grey">

                    Administración de los trabajadores de la empresa.

                </p>

            </div>


            {/* =================================================
                TARJETA
            ================================================= */}

            <div
                className="w3-card w3-white w3-margin-bottom w3-round-small"
            >


                {/* =================================================
                    CABECERA DEL FORMULARIO
                ================================================= */}

                <header
                    className="w3-container w3-light-grey w3-round-small"
                    style={{
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0
                    }}
                >

                    <h5
                        className="w3-margin"
                        style={{
                            margin: '10px 0'
                        }}
                    >

                        <i className="fa fa-plus-circle"></i>

                        &nbsp;

                        Registrar trabajador

                    </h5>

                </header>


                {/* =================================================
                    FORMULARIO
                ================================================= */}

                <form
                    className="w3-container w3-padding-16 w3-small"
                    onSubmit={guardarTrabajador}
                >


                    {/* =================================================
                        DATOS PERSONALES
                    ================================================= */}

                    <DatosPersonales

                        dni={dni}

                        setDni={setDni}


                        nombres={nombres}

                        setNombres={setNombres}


                        apellidoPaterno={
                            apellidoPaterno
                        }

                        setApellidoPaterno={
                            setApellidoPaterno
                        }


                        apellidoMaterno={
                            apellidoMaterno
                        }

                        setApellidoMaterno={
                            setApellidoMaterno
                        }


                        fechaNacimiento={
                            fechaNacimiento
                        }

                        setFechaNacimiento={
                            setFechaNacimiento
                        }


                        sexo={sexo}

                        setSexo={setSexo}


                        correo={correo}

                        setCorreo={setCorreo}


                        direccion={direccion}

                        setDireccion={setDireccion}


                        telefono={telefono}

                        setTelefono={setTelefono}


                        consultandoDni={
                            consultandoDni
                        }

                        consultarDni={
                            consultarDni
                        }


                        nombreCompletoApi={
                            nombreCompletoApi
                        }


                        registroManual={
                            registroManual
                        }

                        setRegistroManual={
                            setRegistroManual
                        }

                    />


                    {/* =================================================
                        FOTOGRAFÍA
                    ================================================= */}

                    <FotografiaTrabajador

                        foto={foto}

                        setFoto={setFoto}

                        camaraActiva={
                            camaraActiva
                        }

                        videoRef={videoRef}

                        canvasRef={canvasRef}

                        abrirCamara={
                            abrirCamara
                        }

                        cerrarCamara={
                            cerrarCamara
                        }

                        capturarFoto={
                            capturarFoto
                        }

                        tomarOtraFoto={
                            tomarOtraFoto
                        }

                    />


                    {/* =================================================
                        INFORMACIÓN LABORAL
                    ================================================= */}

                    <InformacionLaboral

                        area={area}

                        setArea={setArea}


                        subArea={subArea}

                        setSubArea={setSubArea}


                        cargo={cargo}

                        setCargo={setCargo}


                        cargoEspecifico={
                            cargoEspecifico
                        }

                        setCargoEspecifico={
                            setCargoEspecifico
                        }


                        tipoTrabajador={
                            tipoTrabajador
                        }

                        setTipoTrabajador={
                            setTipoTrabajador
                        }


                        regimenLaboral={
                            regimenLaboral
                        }

                        setRegimenLaboral={
                            setRegimenLaboral
                        }


                        modalidad={
                            modalidad
                        }

                        setModalidad={
                            setModalidad
                        }


                        fechaIngreso={
                            fechaIngreso
                        }

                        setFechaIngreso={
                            setFechaIngreso
                        }


                        fechaCese={
                            fechaCese
                        }

                        setFechaCese={
                            setFechaCese
                        }


                        // =================================================
                        // CATÁLOGOS LABORALES
                        // =================================================

                        areas={
                            areas
                        }


                        subAreasFiltradas={
                            subAreasFiltradas
                        }


                        cargosFiltrados={
                            cargosFiltrados
                        }


                        cargosEspecificosFiltrados={
                            cargosEspecificosFiltrados
                        }


                        tiposTrabajador={
                            tiposTrabajador
                        }


                        regimenesLaborales={
                            regimenesLaborales
                        }


                        modalidades={
                            modalidades
                        }

                    />


                    {/* =================================================
                        INFORMACIÓN BANCARIA
                    ================================================= */}

                    <InformacionBancaria

                        banco={banco}

                        setBanco={setBanco}


                        tipoCuenta={
                            tipoCuenta
                        }

                        setTipoCuenta={
                            setTipoCuenta
                        }


                        cuentaCci={
                            cuentaCci
                        }

                        setCuentaCci={
                            setCuentaCci
                        }


                        bancos={
                            bancos
                        }


                        tiposCuenta={
                            tiposCuenta
                        }

                    />


                    {/* =================================================
                        INFORMACIÓN PREVISIONAL
                    ================================================= */}

                    <InformacionPrevisional

                        afpOnp={
                            afpOnp
                        }

                        setAfpOnp={
                            setAfpOnp
                        }


                        tipoComision={
                            tipoComision
                        }

                        setTipoComision={
                            setTipoComision
                        }


                        cuspp={
                            cuspp
                        }

                        setCuspp={
                            setCuspp
                        }


                        sistemasPrevisionales={
                            sistemasPrevisionales
                        }

                        tiposComision={
                            tiposComision
                        }

                    />


                    {/* =================================================
                        ASIGNACIÓN FAMILIAR
                    ================================================= */}

                    <AsignacionFamiliar

                        hijos={hijos}

                        setHijos={setHijos}


                        asignacionFamiliar={
                            asignacionFamiliar
                        }

                        setAsignacionFamiliar={
                            setAsignacionFamiliar
                        }


                        fechaAsignacion={
                            fechaAsignacion
                        }

                        setFechaAsignacion={
                            setFechaAsignacion
                        }


                        montoAsignacion={
                            montoAsignacion
                        }

                        setMontoAsignacion={
                            setMontoAsignacion
                        }

                    />


                    {/* =================================================
                        BOTÓN GUARDAR
                    ================================================= */}

                    <div className="w3-margin-top w3-right-align">

                        <button
                            type="submit"
                            className="w3-button w3-flat-midnight-blue w3-round-small"
                        >

                            <i className="fa fa-save"></i>

                            &nbsp;

                            Guardar trabajador

                        </button>

                    </div>


                </form>

            </div>

        </div>

    )

}


export default RegistroTrabajador