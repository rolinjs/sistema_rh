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

            <label>
                {label}
            </label>

            <select
                className="w3-select w3-border"
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
    // INTERFAZ
    // =====================================================

    return (

        <div className="w3-container">


            {/* =================================================
                CABECERA
            ================================================= */}

            <div className="w3-margin-bottom">

                <h4 className="w3-margin-top">

                    <i className="fa fa-dashboard"></i>

                    &nbsp;

                    Panel de Recursos Humanos

                </h4>


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

            <div className="w3-card w3-white w3-margin-bottom">


                {/* CABECERA TARJETA */}

                <header className="w3-container w3-light-grey">

                    <h5 className="w3-margin">

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

                    <h4 className="w3-text-dark-grey">

                        <i className="fa fa-user"></i>

                        &nbsp;

                        Datos personales

                    </h4>


                    {/* ---------------------------------------------
                        DNI + NOMBRES
                    --------------------------------------------- */}

                    <div className="w3-row-padding">


                        {/* DNI */}

                        <div className="w3-col l3 m6 s12">

                            <label>
                                DNI
                            </label>


                            <div
                                style={{
                                    display: 'flex',
                                    gap: '5px'
                                }}
                            >

                                <input
                                    className="w3-input w3-border"
                                    type="text"
                                    value={dni}
                                    onChange={(event) =>
                                        setDni(
                                            event.target.value
                                                .replace(
                                                    /\D/g,
                                                    ''
                                                )
                                        )
                                    }
                                    placeholder="Ingrese DNI"
                                    maxLength="8"
                                />


                                <button
                                    type="button"
                                    className="w3-button w3-flat-midnight-blue"
                                    onClick={consultarDni}
                                    disabled={consultandoDni}
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



                        {/* NOMBRES */}

                        <div className="w3-col l9 m6 s12">

                            <label>
                                Nombres
                            </label>


                            <input
                                className="w3-input w3-border"
                                type="text"
                                value={nombres}
                                readOnly
                                placeholder="Se obtiene mediante DNI"
                                style={{
                                    backgroundColor: '#f3f3f3'
                                }}
                            />

                        </div>

                    </div>



                    {/* ---------------------------------------------
                        APELLIDOS
                    --------------------------------------------- */}

                    <div className="w3-row-padding w3-margin-top">


                        <div className="w3-col l6 m6 s12">

                            <label>
                                Apellido paterno
                            </label>


                            <input
                                className="w3-input w3-border"
                                type="text"
                                value={apellidoPaterno}
                                readOnly
                                placeholder="Se obtiene mediante DNI"
                                style={{
                                    backgroundColor: '#f3f3f3'
                                }}
                            />

                        </div>



                        <div className="w3-col l6 m6 s12">

                            <label>
                                Apellido materno
                            </label>


                            <input
                                className="w3-input w3-border"
                                type="text"
                                value={apellidoMaterno}
                                readOnly
                                placeholder="Se obtiene mediante DNI"
                                style={{
                                    backgroundColor: '#f3f3f3'
                                }}
                            />

                        </div>

                    </div>



                    {/* ---------------------------------------------
                        FECHA + SEXO
                    --------------------------------------------- */}

                    <div className="w3-row-padding w3-margin-top">


                        <div className="w3-col l3 m6 s12">

                            <label>
                                Fecha de nacimiento
                            </label>


                            <input
                                className="w3-input w3-border"
                                type="date"
                                value={fechaNacimiento}
                                onChange={(event) =>
                                    setFechaNacimiento(
                                        event.target.value
                                    )
                                }
                            />

                        </div>



                        <div className="w3-col l3 m6 s12">

                            <label>
                                Sexo
                            </label>


                            <select
                                className="w3-select w3-border"
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

                    </div>



                    {/* =================================================
                        FOTOGRAFÍA
                    ================================================= */}

                    <div className="w3-margin-top">


                        <label>
                            <b>
                                Fotografía del trabajador
                            </b>
                        </label>


                        <div
                            className="w3-border"
                            style={{
                                width: '220px',
                                height: '220px',
                                marginTop: '8px',
                                overflow: 'hidden',
                                backgroundColor: '#f5f5f5',
                                position: 'relative'
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
                                        className="fa fa-camera"
                                        style={{
                                            fontSize: '45px'
                                        }}
                                    ></i>


                                    <p>
                                        Sin fotografía
                                    </p>

                                </div>

                            )}

                        </div>



                        {/* BOTONES */}

                        {!camaraActiva && !foto && (

                            <button
                                type="button"
                                className="w3-button w3-light-grey w3-margin-top"
                                onClick={abrirCamara}
                            >

                                <i className="fa fa-camera"></i>

                                &nbsp;

                                Tomar foto

                            </button>

                        )}



                        {camaraActiva && (

                            <div
                                className="w3-margin-top"
                                style={{
                                    display: 'flex',
                                    gap: '8px'
                                }}
                            >

                                <button
                                    type="button"
                                    className="w3-button w3-flat-midnight-blue"
                                    onClick={capturarFoto}
                                >

                                    <i className="fa fa-camera"></i>

                                    &nbsp;

                                    Capturar

                                </button>


                                <button
                                    type="button"
                                    className="w3-button w3-light-grey"
                                    onClick={cerrarCamara}
                                >

                                    <i className="fa fa-times"></i>

                                    &nbsp;

                                    Cancelar

                                </button>

                            </div>

                        )}



                        {foto && !camaraActiva && (

                            <button
                                type="button"
                                className="w3-button w3-light-grey w3-margin-top"
                                onClick={tomarOtraFoto}
                            >

                                <i className="fa fa-camera"></i>

                                &nbsp;

                                Tomar otra foto

                            </button>

                        )}



                        <canvas
                            ref={canvasRef}
                            style={{
                                display: 'none'
                            }}
                        />

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

                            <label>
                                Fecha de ingreso
                            </label>


                            <input
                                className="w3-input w3-border"
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

                            <label>
                                Fecha de cese
                            </label>


                            <input
                                className="w3-input w3-border"
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

                            <label>
                                Número de cuenta / CCI
                            </label>


                            <input
                                className="w3-input w3-border"
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

                            <label>
                                CUSPP
                            </label>


                            <input
                                className="w3-input w3-border"
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

                            <label>
                                Número de hijos
                            </label>


                            <input
                                className="w3-input w3-border"
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

                            <label>
                                Asignación familiar
                            </label>


                            <select
                                className="w3-select w3-border"
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

                            <label>
                                Fecha de asignación
                            </label>


                            <input
                                className="w3-input w3-border"
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

                            <label>
                                Monto
                            </label>


                            <input
                                className="w3-input w3-border"
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
                            className="w3-button w3-flat-midnight-blue"
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