import { useEffect, useRef, useState } from 'react'

function TrabajadorPage() {

    // =====================================================
    // API DNI
    // =====================================================

    const TOKEN_DNI = '2118387d70852f2a75b43cb8b6da6c4c14dabcfe71f1fb4f8c64eae05a16'

    const URL_DNI = 'https://api.json.pe/api/dni'


    // =====================================================
    // DATOS PERSONALES
    // =====================================================

    const [dni, setDni] = useState('')

    const [nombres, setNombres] = useState('')

    const [apellidoPaterno, setApellidoPaterno] = useState('')

    const [apellidoMaterno, setApellidoMaterno] = useState('')

    const [fechaNacimiento, setFechaNacimiento] = useState('')

    const [sexo, setSexo] = useState('')

    const [consultandoDni, setConsultandoDni] = useState(false)


    // =====================================================
    // DATOS DE CONTACTO
    // =====================================================

    const [direccion, setDireccion] = useState('')

    const [correo, setCorreo] = useState('')

    const [telefono, setTelefono] = useState('')

    const [telefonoOpcional, setTelefonoOpcional] = useState('')


    // =====================================================
    // CONTACTO DE EMERGENCIA
    // =====================================================

    const [contactoEmergencia, setContactoEmergencia] = useState('')

    const [parentescoEmergencia, setParentescoEmergencia] = useState('')

    const [telefonoEmergencia, setTelefonoEmergencia] = useState('')

    const [telefonoEmergenciaOpcional, setTelefonoEmergenciaOpcional] = useState('')


    // =====================================================
    // FOTOGRAFÍA
    // =====================================================

    const [foto, setFoto] = useState(null)

    const [camaraActiva, setCamaraActiva] = useState(false)

    const videoRef = useRef(null)

    const canvasRef = useRef(null)

    const streamRef = useRef(null)


    // =====================================================
    // INFORMACIÓN LABORAL
    // =====================================================

    const [area, setArea] = useState('')

    const [subArea, setSubArea] = useState('')

    const [cargo, setCargo] = useState('')

    const [cargoEspecifico, setCargoEspecifico] = useState('')

    const [tipoTrabajador, setTipoTrabajador] = useState('')

    const [regimenLaboral, setRegimenLaboral] = useState('')

    const [modalidad, setModalidad] = useState('')

    const [fechaIngreso, setFechaIngreso] = useState('')

    const [fechaCese, setFechaCese] = useState('')


    // =====================================================
    // INFORMACIÓN BANCARIA
    // =====================================================

    const [banco, setBanco] = useState('')

    const [tipoCuenta, setTipoCuenta] = useState('')

    const [cuentaCci, setCuentaCci] = useState('')


    // =====================================================
    // INFORMACIÓN PREVISIONAL
    // =====================================================

    const [afpOnp, setAfpOnp] = useState('')

    const [tipoComision, setTipoComision] = useState('')

    const [cuspp, setCuspp] = useState('')


    // =====================================================
    // ASIGNACIÓN FAMILIAR
    // =====================================================

    const [hijos, setHijos] = useState('')

    const [asignacionFamiliar, setAsignacionFamiliar] = useState('')

    const [fechaAsignacion, setFechaAsignacion] = useState('')

    const [montoAsignacion, setMontoAsignacion] = useState('')


    // =====================================================
    // MAESTROS TEMPORALES
    // =====================================================

    const areas = [
        'Producción',
        'Administración',
        'Gerencia'
    ]

    const subAreas = [
        'Recepción',
        'Calibrado',
        'Hidrotérmico',
        'Packing',
        'Logística',
        'Recursos Humanos'
    ]

    const cargos = [
        'Gerente',
        'Jefe de Planta',
        'Supervisor',
        'Administrador',
        'Operario'
    ]

    const cargosEspecificos = [
        'Supervisor de Producción',
        'Operario de Recepción',
        'Operario de Calibrado',
        'Operario de Packing',
        'Asistente Administrativo'
    ]

    const tiposTrabajador = [
        'Empleado',
        'Obrero',
        'Temporada'
    ]

    const regimenesLaborales = [
        'Régimen Agrario',
        'Régimen General'
    ]

    const modalidades = [
        'Tiempo completo',
        'Tiempo parcial',
        'Temporal'
    ]

    const bancos = [
        'BCP',
        'BBVA',
        'Scotiabank',
        'Interbank'
    ]

    const tiposCuenta = [
        'Cuenta corriente',
        'Cuenta de ahorros'
    ]

    const sistemasPrevisionales = [
        'AFP',
        'ONP'
    ]

    const tiposComision = [
        'Flujo',
        'Mixta',
        'Saldo'
    ]


    // =====================================================
    // CONSULTAR DNI
    // =====================================================

    const consultarDni = async () => {

        if (!/^\d{8}$/.test(dni)) {

            alert(
                'El DNI debe contener exactamente 8 dígitos.'
            )

            return
        }


        setConsultandoDni(true)


        try {

            const options = {

                method: 'POST',

                headers: {

                    Authorization: `Bearer ${TOKEN_DNI}`,

                    'Content-Type': 'application/json'

                },

                body: JSON.stringify({
                    dni: dni
                })

            }


            const response = await fetch(
                URL_DNI,
                options
            )


            const resultado =
                await response.json()


            console.log(
                'Respuesta JSON.pe:',
                resultado
            )


            if (!response.ok) {

                alert(
                    resultado.message ||
                    'Ocurrió un error al consultar el DNI.'
                )

                return
            }


            if (!resultado.success) {

                alert(
                    resultado.message ||
                    'No se encontró información del DNI.'
                )

                return
            }


            const persona = resultado.data


            setNombres(
                persona.nombres || ''
            )

            setApellidoPaterno(
                persona.apellido_paterno || ''
            )

            setApellidoMaterno(
                persona.apellido_materno || ''
            )

            setDireccion(
                persona.direccion_completa ||
                persona.direccion ||
                ''
            )


        } catch (error) {

            console.error(
                'Error consultando DNI:',
                error
            )

            alert(
                'No se pudo conectar con el servicio de DNI.'
            )


        } finally {

            setConsultandoDni(false)

        }

    }


    // =====================================================
    // CÁMARA
    // =====================================================

    const abrirCamara = async () => {

        try {

            if (
                !navigator.mediaDevices ||
                !navigator.mediaDevices.getUserMedia
            ) {

                alert(
                    'Este navegador no permite utilizar la cámara.'
                )

                return
            }


            cerrarCamara()


            const stream =
                await navigator.mediaDevices.getUserMedia({

                    video: {

                        facingMode: 'user',

                        width: {
                            ideal: 640
                        },

                        height: {
                            ideal: 640
                        }

                    },

                    audio: false

                })


            streamRef.current = stream

            setCamaraActiva(true)


        } catch (error) {

            console.error(
                'Error al acceder a la cámara:',
                error
            )


            if (error.name === 'NotAllowedError') {

                alert(
                    'El acceso a la cámara fue bloqueado.'
                )

            } else if (error.name === 'NotFoundError') {

                alert(
                    'No se encontró ninguna cámara.'
                )

            } else {

                alert(
                    'No se pudo acceder a la cámara.'
                )

            }

        }

    }


    // =====================================================
    // CONECTAR STREAM
    // =====================================================

    useEffect(() => {

        const video = videoRef.current

        const stream = streamRef.current


        if (
            video &&
            stream &&
            camaraActiva
        ) {

            video.srcObject = stream


            video.onloadedmetadata = () => {

                video.play().catch(error => {

                    console.error(
                        'Error reproduciendo cámara:',
                        error
                    )

                })

            }

        }

    }, [camaraActiva])


    // =====================================================
    // CAPTURAR FOTO
    // =====================================================

    const capturarFoto = () => {

        const video = videoRef.current

        const canvas = canvasRef.current


        if (!video || !canvas) {
            return
        }


        if (
            video.readyState < 2 ||
            video.videoWidth === 0 ||
            video.videoHeight === 0
        ) {

            alert(
                'La cámara todavía está iniciando.'
            )

            return
        }


        canvas.width = video.videoWidth

        canvas.height = video.videoHeight


        const contexto =
            canvas.getContext('2d')


        contexto.drawImage(
            video,
            0,
            0,
            canvas.width,
            canvas.height
        )


        const imagen =
            canvas.toDataURL(
                'image/jpeg',
                0.90
            )


        setFoto(imagen)

        cerrarCamara()

    }


    // =====================================================
    // CERRAR CÁMARA
    // =====================================================

    const cerrarCamara = () => {

        if (streamRef.current) {

            const tracks =
                streamRef.current.getTracks()


            tracks.forEach(track => {
                track.stop()
            })


            streamRef.current = null

        }


        if (videoRef.current) {

            videoRef.current.srcObject = null

        }


        setCamaraActiva(false)

    }


    // =====================================================
    // TOMAR OTRA FOTO
    // =====================================================

    const tomarOtraFoto = () => {

        setFoto(null)

        abrirCamara()

    }


    // =====================================================
    // LIMPIAR CÁMARA
    // =====================================================

    useEffect(() => {

        return () => {

            if (streamRef.current) {

                streamRef.current
                    .getTracks()
                    .forEach(track => track.stop())

            }

        }

    }, [])


    // =====================================================
    // GUARDAR
    // =====================================================

    const guardarTrabajador = (event) => {

        event.preventDefault()


        const trabajador = {

            dni,

            nombres,

            apellidoPaterno,

            apellidoMaterno,

            fechaNacimiento,

            sexo,

            direccion,

            correo,

            telefono,

            telefonoOpcional,

            contactoEmergencia,

            parentescoEmergencia,

            telefonoEmergencia,

            telefonoEmergenciaOpcional,

            foto,

            area,

            subArea,

            cargo,

            cargoEspecifico,

            tipoTrabajador,

            regimenLaboral,

            modalidad,

            fechaIngreso,

            fechaCese,

            banco,

            tipoCuenta,

            cuentaCci,

            afpOnp,

            tipoComision,

            cuspp,

            hijos,

            asignacionFamiliar,

            fechaAsignacion,

            montoAsignacion

        }


        console.log(
            'Trabajador:',
            trabajador
        )


        alert(
            'Trabajador listo para guardar.'
        )

    }


    // =====================================================
    // COMPONENTE SELECT
    // =====================================================

    const SelectCampo = ({
        label,
        value,
        onChange,
        opciones
    }) => (

        <>

            <label className="w3-text-grey" style={{ fontSize: '12px', fontWeight: 600 }}>
                {label}
            </label>

            <select
                className="w3-select w3-border w3-round-small"
                value={value}
                onChange={onChange}
            >

                <option value="">
                    Seleccione
                </option>

                {opciones.map(item => (

                    <option
                        key={item}
                        value={item}
                    >
                        {item}
                    </option>

                ))}

            </select>

        </>

    )


    // =====================================================
    // NOMBRE COMPLETO (solo presentación, derivado de los
    // datos ya existentes obtenidos por consultarDni)
    // =====================================================

    const nombreCompletoApi = [
        apellidoPaterno,
        apellidoMaterno,
        nombres
    ]
        .filter(Boolean)
        .join(' ')


    // =====================================================
    // ESTILOS REUTILIZABLES
    // =====================================================

    const estiloLabel = {
        fontSize: '12px',
        fontWeight: 600,
        color: '#5a5a5a'
    }

    const estiloReadOnly = {
        backgroundColor: '#f3f3f3'
    }

    const estiloCompacto = {
        padding: '4px 8px',
        fontSize: '12px',
        height: 'auto'
    }


    // =====================================================
    // INTERFAZ
    // =====================================================

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

            <div className="w3-card w3-white w3-margin-bottom w3-round-small">


                {/* CABECERA TARJETA */}

                <header className="w3-container w3-light-grey w3-round-small" style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>

                    <h5 className="w3-margin" style={{ margin: '10px 0' }}>

                        <i className="fa fa-plus-circle"></i>

                        &nbsp;

                        Registrar trabajador

                    </h5>

                </header>



                {/* FORMULARIO */}

                <form
                    className="w3-container w3-padding-16 w3-small"
                    onSubmit={guardarTrabajador}
                >


                    {/* =================================================
                        DATOS PERSONALES
                    ================================================= */}

                    <h4 className="w3-text-dark-grey" style={{ marginBottom: '4px' }}>

                        <i className="fa fa-user"></i>

                        &nbsp;

                        Datos personales

                    </h4>

                    <hr style={{ margin: '4px 0 14px 0' }} />


                    {/* ---------------------------------------------
                        FILA 1 (compacta): DNI · Nombres API · Apellido paterno
                        · Apellido materno · Nombre — todos agrupados y
                        reducidos de tamaño
                    --------------------------------------------- */}

                    <div className="w3-row-padding">


                        {/* DNI */}

                        <div className="w3-col l2 m4 s6 w3-margin-bottom">

                            <label style={estiloLabel}>DNI</label>

                            <div
                                style={{
                                    display: 'flex',
                                    gap: '4px'
                                }}
                            >

                                <input
                                    className="w3-input w3-border w3-round-small"
                                    type="text"
                                    value={dni}
                                    onChange={(event) =>
                                        setDni(
                                            event.target.value
                                                .replace(/\D/g, '')
                                        )
                                    }
                                    placeholder="DNI"
                                    maxLength="8"
                                    style={estiloCompacto}
                                />

                                <button
                                    type="button"
                                    className="w3-button w3-flat-midnight-blue w3-round-small"
                                    onClick={consultarDni}
                                    disabled={consultandoDni}
                                    title="Consultar DNI"
                                    style={{ flexShrink: 0, padding: '4px 8px' }}
                                >

                                    {consultandoDni
                                        ? (
                                            <i className="fa fa-spinner fa-spin"></i>
                                        )
                                        : (
                                            <i className="fa fa-search"></i>
                                        )
                                    }

                                </button>

                            </div>

                        </div>


                        {/* NOMBRES COMPLETOS API (solo lectura, derivado) */}

                        <div className="w3-col l3 m4 s6 w3-margin-bottom">

                            <label style={estiloLabel}>Nombres completos (API)</label>

                            <input
                                className="w3-input w3-border w3-round-small"
                                type="text"
                                value={nombreCompletoApi}
                                readOnly
                                placeholder="Se obtiene mediante DNI"
                                style={{ ...estiloReadOnly, ...estiloCompacto }}
                            />

                        </div>


                        {/* APELLIDO PATERNO */}

                        <div className="w3-col l2 m4 s6 w3-margin-bottom">

                            <label style={estiloLabel}>Apellido paterno</label>

                            <input
                                className="w3-input w3-border w3-round-small"
                                type="text"
                                value={apellidoPaterno}
                                readOnly
                                placeholder="Se obtiene mediante DNI"
                                style={{ ...estiloReadOnly, ...estiloCompacto }}
                            />

                        </div>


                        {/* APELLIDO MATERNO */}

                        <div className="w3-col l2 m4 s6 w3-margin-bottom">

                            <label style={estiloLabel}>Apellido materno</label>

                            <input
                                className="w3-input w3-border w3-round-small"
                                type="text"
                                value={apellidoMaterno}
                                readOnly
                                placeholder="Se obtiene mediante DNI"
                                style={{ ...estiloReadOnly, ...estiloCompacto }}
                            />

                        </div>


                        {/* NOMBRE (nombres) */}

                        <div className="w3-col l3 m4 s6 w3-margin-bottom">

                            <label style={estiloLabel}>Nombre</label>

                            <input
                                className="w3-input w3-border w3-round-small"
                                type="text"
                                value={nombres}
                                readOnly
                                placeholder="Se obtiene mediante DNI"
                                style={{ ...estiloReadOnly, ...estiloCompacto }}
                            />

                        </div>

                    </div>


                    {/* ---------------------------------------------
                        FILA 2: Fecha de nacimiento · Sexo · Correo · Dirección
                    --------------------------------------------- */}

                    <div className="w3-row-padding">


                        {/* FECHA DE NACIMIENTO */}

                        <div className="w3-col l2 m6 s12 w3-margin-bottom">

                            <label style={estiloLabel}>Fecha de nacimiento</label>

                            <input
                                className="w3-input w3-border w3-round-small"
                                type="date"
                                value={fechaNacimiento}
                                onChange={(event) =>
                                    setFechaNacimiento(
                                        event.target.value
                                    )
                                }
                            />

                        </div>


                        {/* SEXO */}

                        <div className="w3-col l2 m6 s12 w3-margin-bottom">

                            <label style={estiloLabel}>Sexo</label>

                            <select
                                className="w3-select w3-border w3-round-small"
                                value={sexo}
                                onChange={(event) =>
                                    setSexo(
                                        event.target.value
                                    )
                                }
                            >

                                <option value="">
                                    Seleccione
                                </option>

                                <option value="M">
                                    Masculino
                                </option>

                                <option value="F">
                                    Femenino
                                </option>

                            </select>

                        </div>


                        {/* CORREO */}

                        <div className="w3-col l3 m6 s12 w3-margin-bottom">

                            <label style={estiloLabel}>Correo electrónico</label>

                            <input
                                className="w3-input w3-border w3-round-small"
                                type="email"
                                value={correo}
                                onChange={(event) =>
                                    setCorreo(
                                        event.target.value
                                    )
                                }
                                placeholder="correo@empresa.com"
                            />

                        </div>


                        {/* DIRECCIÓN */}

                        <div className="w3-col l3 m6 s12 w3-margin-bottom">

                            <label style={estiloLabel}>Dirección</label>

                            <input
                                className="w3-input w3-border w3-round-small"
                                type="text"
                                value={direccion}
                                onChange={(event) =>
                                    setDireccion(
                                        event.target.value
                                    )
                                }
                                placeholder="Ingrese dirección"
                            />

                        </div>

                        {/* TELÉFONO */}

                        <div className="w3-col l2 m6 s12 w3-margin-bottom">

                            <label style={estiloLabel}>Teléfono</label>

                            <input
                                className="w3-input w3-border w3-round-small"
                                type="tel"
                                value={telefono}
                                onChange={(event) =>
                                    setTelefono(
                                        event.target.value
                                            .replace(/\D/g, '')
                                    )
                                }
                                placeholder="999999999"
                                maxLength="9"
                            />

                        </div>


                    </div>


                    {/* =================================================
                        FOTOGRAFÍA
                    ================================================= */}

                    <div className="w3-margin-top">

                        <h5 className="w3-text-dark-grey" style={{ marginBottom: '4px' }}>

                            <i className="fa fa-camera"></i>

                            &nbsp;

                            Fotografía del trabajador

                        </h5>

                        <hr style={{ margin: '4px 0 14px 0' }} />


                        <div
                            className="w3-card w3-round-small"
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '16px',
                                padding: '16px',
                                alignItems: 'flex-start'
                            }}
                        >

                            {/* IZQUIERDA: RECUADRO 220x220 */}

                            <div
                                className="w3-border"
                                style={{
                                    width: '220px',
                                    height: '220px',
                                    overflow: 'hidden',
                                    backgroundColor: '#f5f5f5',
                                    position: 'relative',
                                    flexShrink: 0,
                                    borderRadius: '6px'
                                }}
                            >

                                {/* VIDEO */}

                                <video
                                    ref={videoRef}
                                    autoPlay
                                    playsInline
                                    muted
                                    style={{
                                        display:
                                            camaraActiva
                                                ? 'block'
                                                : 'none',

                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />


                                {/* FOTO */}

                                {!camaraActiva && foto && (

                                    <img
                                        src={foto}
                                        alt="Fotografía del trabajador"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />

                                )}


                                {/* SIN FOTO */}

                                {!camaraActiva && !foto && (

                                    <div
                                        className="w3-center w3-text-grey"
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform:
                                                'translate(-50%, -50%)',
                                            width: '100%'
                                        }}
                                    >

                                        <i
                                            className="fa fa-user-circle"
                                            style={{
                                                fontSize: '60px'
                                            }}
                                        ></i>


                                        <p style={{ margin: '6px 0 0 0', fontSize: '12px' }}>
                                            Sin fotografía
                                        </p>

                                    </div>

                                )}


                                <canvas
                                    ref={canvasRef}
                                    style={{
                                        display: 'none'
                                    }}
                                />

                            </div>


                            {/* DERECHA: INDICACIONES + BOTONES */}

                            <div style={{ flex: '1', minWidth: '240px' }}>

                                <div
                                    className="w3-panel w3-pale-blue w3-leftbar w3-border-blue"
                                    style={{
                                        margin: 0,
                                        padding: '10px 14px',
                                        fontSize: '12px'
                                    }}
                                >

                                    <p style={{ margin: '0 0 6px 0', fontWeight: 600 }}>

                                        <i className="fa fa-info-circle"></i>

                                        &nbsp;

                                        Indicaciones

                                    </p>

                                    <ul style={{ margin: 0, paddingLeft: '18px' }}>

                                        <li>Tome una foto clara del rostro.</li>

                                        <li>Fondo neutro y buena iluminación.</li>

                                        <li>La fotografía será utilizada para el control de asistencia.</li>

                                    </ul>

                                </div>


                                {/* BOTONES DE ACCIÓN */}

                                <div
                                    className="w3-margin-top"
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '8px'
                                    }}
                                >

                                    {!camaraActiva && (

                                        <button
                                            type="button"
                                            className="w3-button w3-flat-midnight-blue w3-round-small w3-small"
                                            onClick={foto ? tomarOtraFoto : abrirCamara}
                                        >

                                            <i className="fa fa-camera"></i>

                                            &nbsp;

                                            {foto ? 'Tomar otra foto' : 'Tomar foto'}

                                        </button>

                                    )}


                                    {camaraActiva && (

                                        <>

                                            <button
                                                type="button"
                                                className="w3-button w3-flat-midnight-blue w3-round-small w3-small"
                                                onClick={capturarFoto}
                                            >

                                                <i className="fa fa-camera"></i>

                                                &nbsp;

                                                Capturar

                                            </button>


                                            <button
                                                type="button"
                                                className="w3-button w3-light-grey w3-round-small w3-small"
                                                onClick={cerrarCamara}
                                            >

                                                <i className="fa fa-times"></i>

                                                &nbsp;

                                                Cancelar

                                            </button>

                                        </>

                                    )}


                                    {/* SUBIR FOTO — visual, sin lógica de carga de archivo aún */}

                                    <button
                                        type="button"
                                        className="w3-button w3-light-grey w3-round-small w3-small"
                                        title="Funcionalidad de carga de archivo no implementada"
                                    >

                                        <i className="fa fa-upload"></i>

                                        &nbsp;

                                        Subir foto

                                    </button>


                                    {/* ELIMINAR — reutiliza el estado existente de foto */}

                                    {foto && !camaraActiva && (

                                        <button
                                            type="button"
                                            className="w3-button w3-red w3-round-small w3-small"
                                            onClick={() => setFoto(null)}
                                        >

                                            <i className="fa fa-trash"></i>

                                            &nbsp;

                                            Eliminar

                                        </button>

                                    )}

                                </div>

                            </div>

                        </div>

                    </div>



                    <hr />



                    {/* =================================================
                        INFORMACIÓN LABORAL
                    ================================================= */}

                    <h4 className="w3-text-dark-grey">

                        <i className="fa fa-briefcase"></i>

                        &nbsp;

                        Información laboral

                    </h4>


                    <div className="w3-row-padding">


                        <div className="w3-col l3 m6 s12">

                            <SelectCampo
                                label="Área"
                                value={area}
                                onChange={(event) =>
                                    setArea(
                                        event.target.value
                                    )
                                }
                                opciones={areas}
                            />

                        </div>



                        <div className="w3-col l3 m6 s12">

                            <SelectCampo
                                label="Sub Área"
                                value={subArea}
                                onChange={(event) =>
                                    setSubArea(
                                        event.target.value
                                    )
                                }
                                opciones={subAreas}
                            />

                        </div>



                        <div className="w3-col l3 m6 s12">

                            <SelectCampo
                                label="Cargo"
                                value={cargo}
                                onChange={(event) =>
                                    setCargo(
                                        event.target.value
                                    )
                                }
                                opciones={cargos}
                            />

                        </div>



                        <div className="w3-col l3 m6 s12">

                            <SelectCampo
                                label="Cargo específico"
                                value={cargoEspecifico}
                                onChange={(event) =>
                                    setCargoEspecifico(
                                        event.target.value
                                    )
                                }
                                opciones={cargosEspecificos}
                            />

                        </div>

                    </div>



                    <div className="w3-row-padding w3-margin-top">


                        <div className="w3-col l3 m6 s12">

                            <SelectCampo
                                label="Tipo de trabajador"
                                value={tipoTrabajador}
                                onChange={(event) =>
                                    setTipoTrabajador(
                                        event.target.value
                                    )
                                }
                                opciones={tiposTrabajador}
                            />

                        </div>



                        <div className="w3-col l3 m6 s12">

                            <SelectCampo
                                label="Régimen laboral"
                                value={regimenLaboral}
                                onChange={(event) =>
                                    setRegimenLaboral(
                                        event.target.value
                                    )
                                }
                                opciones={regimenesLaborales}
                            />

                        </div>



                        <div className="w3-col l3 m6 s12">

                            <SelectCampo
                                label="Modalidad"
                                value={modalidad}
                                onChange={(event) =>
                                    setModalidad(
                                        event.target.value
                                    )
                                }
                                opciones={modalidades}
                            />

                        </div>



                        <div className="w3-col l3 m6 s12">

                            <label style={estiloLabel}>
                                Fecha de ingreso
                            </label>


                            <input
                                className="w3-input w3-border w3-round-small"
                                type="date"
                                value={fechaIngreso}
                                onChange={(event) =>
                                    setFechaIngreso(
                                        event.target.value
                                    )
                                }
                            />

                        </div>

                    </div>



                    <div className="w3-row-padding w3-margin-top">

                        <div className="w3-col l3 m6 s12">

                            <label style={estiloLabel}>
                                Fecha de cese
                            </label>


                            <input
                                className="w3-input w3-border w3-round-small"
                                type="date"
                                value={fechaCese}
                                onChange={(event) =>
                                    setFechaCese(
                                        event.target.value
                                    )
                                }
                            />

                        </div>

                    </div>



                    <hr />



                    {/* =================================================
                        INFORMACIÓN BANCARIA
                    ================================================= */}

                    <h4 className="w3-text-dark-grey">

                        <i className="fa fa-university"></i>

                        &nbsp;

                        Información bancaria

                    </h4>


                    <div className="w3-row-padding">


                        <div className="w3-col l4 m6 s12">

                            <SelectCampo
                                label="Banco"
                                value={banco}
                                onChange={(event) =>
                                    setBanco(
                                        event.target.value
                                    )
                                }
                                opciones={bancos}
                            />

                        </div>



                        <div className="w3-col l4 m6 s12">

                            <SelectCampo
                                label="Tipo de cuenta"
                                value={tipoCuenta}
                                onChange={(event) =>
                                    setTipoCuenta(
                                        event.target.value
                                    )
                                }
                                opciones={tiposCuenta}
                            />

                        </div>



                        <div className="w3-col l4 m6 s12">

                            <label style={estiloLabel}>
                                Número de cuenta / CCI
                            </label>


                            <input
                                className="w3-input w3-border w3-round-small"
                                type="text"
                                value={cuentaCci}
                                onChange={(event) =>
                                    setCuentaCci(
                                        event.target.value
                                    )
                                }
                            />

                        </div>

                    </div>



                    <hr />



                    {/* =================================================
                        INFORMACIÓN PREVISIONAL
                    ================================================= */}

                    <h4 className="w3-text-dark-grey">

                        <i className="fa fa-building"></i>

                        &nbsp;

                        Información previsional

                    </h4>


                    <div className="w3-row-padding">


                        <div className="w3-col l4 m6 s12">

                            <SelectCampo
                                label="AFP / ONP"
                                value={afpOnp}
                                onChange={(event) =>
                                    setAfpOnp(
                                        event.target.value
                                    )
                                }
                                opciones={sistemasPrevisionales}
                            />

                        </div>



                        <div className="w3-col l4 m6 s12">

                            <SelectCampo
                                label="Tipo de comisión"
                                value={tipoComision}
                                onChange={(event) =>
                                    setTipoComision(
                                        event.target.value
                                    )
                                }
                                opciones={tiposComision}
                            />

                        </div>



                        <div className="w3-col l4 m6 s12">

                            <label style={estiloLabel}>
                                CUSPP
                            </label>


                            <input
                                className="w3-input w3-border w3-round-small"
                                type="text"
                                value={cuspp}
                                onChange={(event) =>
                                    setCuspp(
                                        event.target.value
                                    )
                                }
                            />

                        </div>

                    </div>



                    <hr />



                    {/* =================================================
                        ASIGNACIÓN FAMILIAR
                    ================================================= */}

                    <h4 className="w3-text-dark-grey">

                        <i className="fa fa-users"></i>

                        &nbsp;

                        Asignación familiar

                    </h4>


                    <div className="w3-row-padding">


                        <div className="w3-col l3 m6 s12">

                            <label style={estiloLabel}>
                                Número de hijos
                            </label>


                            <input
                                className="w3-input w3-border w3-round-small"
                                type="number"
                                min="0"
                                value={hijos}
                                onChange={(event) =>
                                    setHijos(
                                        event.target.value
                                    )
                                }
                            />

                        </div>



                        <div className="w3-col l3 m6 s12">

                            <label style={estiloLabel}>
                                Asignación familiar
                            </label>


                            <select
                                className="w3-select w3-border w3-round-small"
                                value={asignacionFamiliar}
                                onChange={(event) =>
                                    setAsignacionFamiliar(
                                        event.target.value
                                    )
                                }
                            >

                                <option value="">
                                    Seleccione
                                </option>

                                <option value="SI">
                                    Sí
                                </option>

                                <option value="NO">
                                    No
                                </option>

                            </select>

                        </div>



                        <div className="w3-col l3 m6 s12">

                            <label style={estiloLabel}>
                                Fecha de asignación
                            </label>


                            <input
                                className="w3-input w3-border w3-round-small"
                                type="date"
                                value={fechaAsignacion}
                                onChange={(event) =>
                                    setFechaAsignacion(
                                        event.target.value
                                    )
                                }
                            />

                        </div>



                        <div className="w3-col l3 m6 s12">

                            <label style={estiloLabel}>
                                Monto
                            </label>


                            <input
                                className="w3-input w3-border w3-round-small"
                                type="number"
                                step="0.01"
                                value={montoAsignacion}
                                onChange={(event) =>
                                    setMontoAsignacion(
                                        event.target.value
                                    )
                                }
                            />

                        </div>

                    </div>



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

export default TrabajadorPage