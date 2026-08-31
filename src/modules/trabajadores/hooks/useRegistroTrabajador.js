import {
    useEffect,
    useRef,
    useState
} from 'react'


import alertify from 'alertifyjs'

alertify.set(
    'notifier',
    'position',
    'top-right'
)

alertify.set(
    'notifier',
    'delay',
    4
)


import {
    listarAreas
} from '../../areas/api/areaApi'


import {
    listarSubAreas
} from '../../subareas/api/subAreaApi'


import {
    listarCargos
} from '../../cargos/api/cargosApi'


import {
    listarCargosEspecificos
} from '../../cargoespecifico/api/cargoEspecificoApi'


import {
    consultarDni as consultarDniApi
} from '../api/reniecApi'


import {
    registrarTrabajador
} from '../api/trabajadoresApi'


function useRegistroTrabajador() {


    // =====================================================
    // DATOS PERSONALES
    // =====================================================

    const [dni, setDni] =
        useState('')

    const [nombres, setNombres] =
        useState('')

    const [apellidoPaterno, setApellidoPaterno] =
        useState('')

    const [apellidoMaterno, setApellidoMaterno] =
        useState('')

    const [fechaNacimiento, setFechaNacimiento] =
        useState('')

    const [sexo, setSexo] =
        useState('')


    // =====================================================
    // MODO DE REGISTRO
    // =====================================================

    const [registroManual, setRegistroManual] =
        useState(false)


    // =====================================================
    // CONSULTA RENIEC
    // =====================================================

    const [consultandoDni, setConsultandoDni] =
        useState(false)


    // =====================================================
    // DATOS DE CONTACTO
    // =====================================================

    const [direccion, setDireccion] =
        useState('')

    const [correo, setCorreo] =
        useState('')

    const [telefono, setTelefono] =
        useState('')

    const [telefonoOpcional, setTelefonoOpcional] =
        useState('')


    // =====================================================
    // FOTOGRAFÍA
    // =====================================================

    const [foto, setFoto] =
        useState(null)

    const [camaraActiva, setCamaraActiva] =
        useState(false)


    const videoRef =
        useRef(null)

    const canvasRef =
        useRef(null)

    const streamRef =
        useRef(null)


    // =====================================================
    // INFORMACIÓN LABORAL
    // =====================================================

    const [area, setArea] =
        useState('')

    const [subArea, setSubArea] =
        useState('')

    const [cargo, setCargo] =
        useState('')

    const [cargoEspecifico, setCargoEspecifico] =
        useState('')

    const [tipoTrabajador, setTipoTrabajador] =
        useState('')

    const [regimenLaboral, setRegimenLaboral] =
        useState('')

    const [modalidad, setModalidad] =
        useState('')

    const [fechaIngreso, setFechaIngreso] =
        useState('')

    const [fechaCese, setFechaCese] =
        useState('')


    // =====================================================
    // INFORMACIÓN BANCARIA
    // =====================================================

    const [banco, setBanco] =
        useState('')

    const [tipoCuenta, setTipoCuenta] =
        useState('')

    const [cuentaCci, setCuentaCci] =
        useState('')


    // =====================================================
    // INFORMACIÓN PREVISIONAL
    // =====================================================

    const [afpOnp, setAfpOnp] =
        useState('')

    const [tipoComision, setTipoComision] =
        useState('')

    const [cuspp, setCuspp] =
        useState('')


    // =====================================================
    // ASIGNACIÓN FAMILIAR
    // =====================================================

    const [hijos, setHijos] =
        useState('')

    const [asignacionFamiliar, setAsignacionFamiliar] =
        useState('')

    const [fechaAsignacion, setFechaAsignacion] =
        useState('')

    const [montoAsignacion, setMontoAsignacion] =
        useState('')


    // =====================================================
    // MAESTROS DESDE BACKEND
    // =====================================================

    const [areas, setAreas] =
        useState([])

    const [subAreas, setSubAreas] =
        useState([])

    const [cargos, setCargos] =
        useState([])

    const [cargosEspecificos, setCargosEspecificos] =
        useState([])


    // =====================================================
    // MAESTROS TEMPORALES
    // =====================================================

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
    // CARGAR MAESTROS
    // =====================================================

    useEffect(() => {

        const cargarMaestros = async () => {

            try {

                const [

                    datosAreas,

                    datosSubAreas,

                    datosCargos,

                    datosCargosEspecificos

                ] = await Promise.all([

                    listarAreas(),

                    listarSubAreas(),

                    listarCargos(),

                    listarCargosEspecificos()

                ])


                setAreas(

                    Array.isArray(datosAreas)

                        ? datosAreas

                        : datosAreas?.content || []

                )


                setSubAreas(

                    Array.isArray(datosSubAreas)

                        ? datosSubAreas

                        : datosSubAreas?.content || []

                )


                setCargos(

                    Array.isArray(datosCargos)

                        ? datosCargos

                        : datosCargos?.content || []

                )


                setCargosEspecificos(

                    Array.isArray(
                        datosCargosEspecificos
                    )

                        ? datosCargosEspecificos

                        : datosCargosEspecificos?.content || []

                )


            } catch (error) {

                console.error(
                    'ERROR CARGANDO MAESTROS LABORALES:',
                    error
                )


                alertify.error(
                    'No se pudieron cargar los datos laborales.'
                )

            }

        }


        cargarMaestros()

    }, [])


    // =====================================================
    // SUBÁREAS SEGÚN ÁREA
    // =====================================================

    const subAreasFiltradas = area

        ? subAreas.filter(

            subAreaItem =>

                subAreaItem.areaId === area

        )

        : []


    // =====================================================
    // CARGOS SEGÚN SUBÁREA
    // =====================================================

    const cargosFiltrados = subArea

        ? cargos.filter(

            cargoItem =>

                cargoItem.subAreaId === subArea

        )

        : []


    // =====================================================
    // CARGOS ESPECÍFICOS SEGÚN CARGO
    // =====================================================

    const cargosEspecificosFiltrados = cargo

        ? cargosEspecificos.filter(

            cargoEspecificoItem =>

                cargoEspecificoItem.cargoId === cargo

        )

        : []


    // =====================================================
    // CONSULTAR DNI
    // =====================================================

    const consultarDni = async () => {


        // =================================================
        // PROTEGER CONSULTA EN MODO MANUAL
        // =================================================

        if (registroManual) {

            alertify.warning(
                'La consulta RENIEC está deshabilitada en modo manual.'
            )

            return

        }


        // =================================================
        // VALIDAR DNI
        // =================================================

        if (!/^\d{8}$/.test(dni)) {

            alertify.warning(
                'El DNI debe contener exactamente 8 dígitos.'
            )

            return

        }


        setConsultandoDni(true)


        try {

            const persona =
                await consultarDniApi(dni)


            console.log(
                'DATOS RENIEC:',
                persona
            )


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


            alertify.success(
                'Datos obtenidos correctamente desde RENIEC.'
            )


        } catch (error) {

            console.error(
                'ERROR CONSULTANDO DNI:',
                error
            )


            alertify.error(

                error.response?.data?.message ||

                error.message ||

                'No se pudo consultar el DNI.'

            )


        } finally {

            setConsultandoDni(false)

        }

    }


    // =====================================================
    // CÁMARA
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

            videoRef.current.srcObject =
                null

        }


        setCamaraActiva(false)

    }


    const abrirCamara = async () => {

        try {

            if (

                !navigator.mediaDevices ||

                !navigator.mediaDevices.getUserMedia

            ) {

                alertify.error(
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


            streamRef.current =
                stream


            setCamaraActiva(
                true
            )


        } catch (error) {

            console.error(
                'Error al acceder a la cámara:',
                error
            )


            if (

                error.name === 'NotAllowedError'

            ) {

                alertify.error(
                    'El acceso a la cámara fue bloqueado.'
                )


            } else if (

                error.name === 'NotFoundError'

            ) {

                alertify.warning(
                    'No se encontró ninguna cámara.'
                )


            } else {

                alertify.error(
                    'No se pudo acceder a la cámara.'
                )

            }

        }

    }


    // =====================================================
    // CONECTAR STREAM
    // =====================================================

    useEffect(() => {

        const video =
            videoRef.current

        const stream =
            streamRef.current


        if (

            video &&

            stream &&

            camaraActiva

        ) {

            video.srcObject =
                stream


            video.onloadedmetadata = () => {

                video.play().catch(error => {

                    console.error(
                        'Error reproduciendo cámara:',
                        error
                    )

                })

            }

        }

    }, [

        camaraActiva

    ])


    // =====================================================
    // CAPTURAR FOTO
    // =====================================================

    const capturarFoto = () => {

        const video =
            videoRef.current

        const canvas =
            canvasRef.current


        if (!video || !canvas) {

            return

        }


        if (

            video.readyState < 2 ||

            video.videoWidth === 0 ||

            video.videoHeight === 0

        ) {

            alertify.warning(
                'La cámara todavía está iniciando.'
            )

            return

        }


        canvas.width =
            video.videoWidth

        canvas.height =
            video.videoHeight


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


        setFoto(
            imagen
        )


        cerrarCamara()


        alertify.success(
            'Fotografía capturada correctamente.'
        )

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

                    .forEach(track =>
                        track.stop()
                    )

            }

        }

    }, [])


    // =====================================================
    // LIMPIAR FORMULARIO
    // =====================================================

    const limpiarFormulario = () => {

        // =================================================
        // DATOS PERSONALES
        // =================================================

        setDni('')

        setNombres('')

        setApellidoPaterno('')

        setApellidoMaterno('')

        setFechaNacimiento('')

        setSexo('')


        // =================================================
        // MODO DE REGISTRO
        // =================================================

        setRegistroManual(false)


        // =================================================
        // CONTACTO
        // =================================================

        setDireccion('')

        setCorreo('')

        setTelefono('')

        setTelefonoOpcional('')


        // =================================================
        // FOTOGRAFÍA
        // =================================================

        setFoto(null)

        cerrarCamara()


        // =================================================
        // INFORMACIÓN LABORAL
        // =================================================

        setArea('')

        setSubArea('')

        setCargo('')

        setCargoEspecifico('')

        setTipoTrabajador('')

        setRegimenLaboral('')

        setModalidad('')

        setFechaIngreso('')

        setFechaCese('')


        // =================================================
        // INFORMACIÓN BANCARIA
        // =================================================

        setBanco('')

        setTipoCuenta('')

        setCuentaCci('')


        // =================================================
        // INFORMACIÓN PREVISIONAL
        // =================================================

        setAfpOnp('')

        setTipoComision('')

        setCuspp('')


        // =================================================
        // ASIGNACIÓN FAMILIAR
        // =================================================

        setHijos('')

        setAsignacionFamiliar('')

        setFechaAsignacion('')

        setMontoAsignacion('')

    }


    // =====================================================
    // VALIDAR DATOS DEL TRABAJADOR
    // =====================================================

    const validarTrabajador = () => {

        if (!/^\d{8}$/.test(dni)) {

            alertify.error(
                'El DNI debe contener exactamente 8 dígitos.'
            )

            return false

        }


        if (!nombres.trim()) {

            alertify.error(
                'Los nombres son obligatorios.'
            )

            return false

        }


        if (!apellidoPaterno.trim()) {

            alertify.error(
                'El apellido paterno es obligatorio.'
            )

            return false

        }


        if (!apellidoMaterno.trim()) {

            alertify.error(
                'El apellido materno es obligatorio.'
            )

            return false

        }


        if (!fechaNacimiento) {

            alertify.error(
                'La fecha de nacimiento es obligatoria.'
            )

            return false

        }


        if (!sexo) {

            alertify.error(
                'El sexo del trabajador es obligatorio.'
            )

            return false

        }


        if (!area) {

            alertify.error(
                'El área es obligatoria.'
            )

            return false

        }


        if (!subArea) {

            alertify.error(
                'La sub área es obligatoria.'
            )

            return false

        }


        if (!cargo) {

            alertify.error(
                'El cargo es obligatorio.'
            )

            return false

        }


        if (!cargoEspecifico) {

            alertify.error(
                'El cargo específico es obligatorio.'
            )

            return false

        }


        if (!direccion.trim()) {

            alertify.error(
                'La dirección es obligatoria.'
            )

            return false

        }


        if (!correo.trim()) {

            alertify.error(
                'El correo es obligatorio.'
            )

            return false

        }


        if (!telefono.trim()) {

            alertify.error(
                'El teléfono es obligatorio.'
            )

            return false

        }


        return true

    }


    // =====================================================
    // CONSTRUIR PAYLOAD
    // =====================================================

    const construirPayload = () => {

        const nombreCompleto = [

            apellidoPaterno,

            apellidoMaterno,

            nombres

        ]

            .filter(

                valor =>
                    valor &&
                    valor.trim()

            )

            .join(' ')


        return {

            registroManual,

            dni,

            nombres,

            nombreCompleto,

            apellidoPaterno,

            apellidoMaterno,

            fechaNacimiento,

            sexoTrabajador: sexo,

            areaId: area,

            subAreaId: subArea,

            cargoId: cargo,

            cargoEspecificoId:
                cargoEspecifico,

            direccion,

            correo,

            telefono

        }

    }


    // =====================================================
    // GUARDAR
    // =====================================================

    const guardarTrabajador = async (event) => {

        event.preventDefault()


        // =================================================
        // VALIDACIÓN CLIENTE
        // =================================================

        const datosValidos =
            validarTrabajador()


        if (!datosValidos) {

            return

        }


        // =================================================
        // PAYLOAD
        // =================================================

        const payload =
            construirPayload()


        console.log(
            'PAYLOAD TRABAJADOR:',
            payload
        )


        try {

            // =================================================
            // ENVIAR AL BACKEND
            // =================================================

            const respuesta =
                await registrarTrabajador(
                    payload
                )


            console.log(
                'TRABAJADOR REGISTRADO:',
                respuesta
            )


            alertify.success(
                'Trabajador registrado correctamente.'
            )


            // =================================================
            // LIMPIAR FORMULARIO
            // =================================================

            limpiarFormulario()


        } catch (error) {

            console.error(
                'ERROR REGISTRANDO TRABAJADOR:',
                error
            )


            const mensajeError =

                error.response?.data?.message ||

                error.message ||

                'No se pudo registrar el trabajador.'


            alertify.error(
                mensajeError
            )

        }

    }


    // =====================================================
    // NOMBRE COMPLETO
    // =====================================================

    const nombreCompletoApi = [

        apellidoPaterno,

        apellidoMaterno,

        nombres

    ]

        .filter(Boolean)

        .join(' ')


    // =====================================================
    // RETURN
    // =====================================================

    return {


        // =================================================
        // DATOS PERSONALES
        // =================================================

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


        // =================================================
        // MODO DE REGISTRO
        // =================================================

        registroManual,

        setRegistroManual,


        // =================================================
        // RENIEC
        // =================================================

        consultandoDni,

        consultarDni,


        // =================================================
        // CONTACTO
        // =================================================

        direccion,

        setDireccion,


        correo,

        setCorreo,


        telefono,

        setTelefono,


        telefonoOpcional,

        setTelefonoOpcional,


        // =================================================
        // FOTOGRAFÍA
        // =================================================

        foto,

        setFoto,


        camaraActiva,


        videoRef,

        canvasRef,


        abrirCamara,

        cerrarCamara,

        capturarFoto,

        tomarOtraFoto,


        // =================================================
        // INFORMACIÓN LABORAL
        // =================================================

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


        // =================================================
        // INFORMACIÓN BANCARIA
        // =================================================

        banco,

        setBanco,


        tipoCuenta,

        setTipoCuenta,


        cuentaCci,

        setCuentaCci,


        // =================================================
        // INFORMACIÓN PREVISIONAL
        // =================================================

        afpOnp,

        setAfpOnp,


        tipoComision,

        setTipoComision,


        cuspp,

        setCuspp,


        // =================================================
        // ASIGNACIÓN FAMILIAR
        // =================================================

        hijos,

        setHijos,


        asignacionFamiliar,

        setAsignacionFamiliar,


        fechaAsignacion,

        setFechaAsignacion,


        montoAsignacion,

        setMontoAsignacion,


        // =================================================
        // MAESTROS
        // =================================================

        areas,


        subAreas,


        subAreasFiltradas,


        cargos,


        cargosFiltrados,


        cargosEspecificos,


        cargosEspecificosFiltrados,


        tiposTrabajador,


        regimenesLaborales,


        modalidades,


        bancos,


        tiposCuenta,


        sistemasPrevisionales,


        tiposComision,


        // =================================================
        // PAYLOAD
        // =================================================

        construirPayload,


        // =================================================
        // VALIDACIÓN
        // =================================================

        validarTrabajador,


        // =================================================
        // LIMPIAR
        // =================================================

        limpiarFormulario,


        // =================================================
        // GUARDAR
        // =================================================

        guardarTrabajador,


        nombreCompletoApi

    }

}


export default useRegistroTrabajador