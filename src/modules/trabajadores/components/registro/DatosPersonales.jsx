import {
    useEffect,
    useRef
} from 'react'

import {
    useNavigate
} from 'react-router-dom'


function DatosPersonales({

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

    correo,
    setCorreo,

    direccion,
    setDireccion,

    telefono,
    setTelefono,

    consultandoDni,

    consultarDni,

    nombreCompletoApi,

    registroManual,
    setRegistroManual

}) {


    const navigate =
        useNavigate()


    const dniRef =
        useRef(null)


    const estiloLabel = {

        fontSize: '12px',

        fontWeight: 600,

        color: '#5a5a5a'

    }


    const estiloBloqueado = {

        backgroundColor: '#f3f3f3',

        cursor: 'not-allowed'

    }


    const estiloCompacto = {

        padding: '4px 8px',

        fontSize: '12px',

        height: 'auto'

    }


    // =====================================================
    // FOCUS AUTOMÁTICO AL DNI
    // =====================================================

    useEffect(() => {

        if (registroManual) {

            dniRef.current?.focus()

        }

    }, [
        registroManual
    ])


    // =====================================================
    // CAMBIAR MODO DE REGISTRO
    // =====================================================

    const manejarCambioRegistro = () => {

        setRegistroManual(
            !registroManual
        )

    }


    // =====================================================
    // IR AL LISTADO
    // =====================================================

    const irAlListadoTrabajadores = () => {

        navigate(
            '/trabajadores'
        )

    }


    // =====================================================
    // NOMBRE COMPLETO MANUAL
    // =====================================================

    const nombreCompletoManual = [

        apellidoPaterno,

        apellidoMaterno,

        nombres

    ]

        .filter(Boolean)

        .join(' ')


    // =====================================================
    // NOMBRE COMPLETO A MOSTRAR
    // =====================================================

    const nombreCompletoMostrar =

        registroManual

            ? nombreCompletoManual

            : nombreCompletoApi


    return (

        <>


            {/* =================================================
                ENCABEZADO
            ================================================= */}

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '4px'
                }}
            >

                <h4
                    className="w3-text-dark-grey"
                    style={{
                        margin: 0
                    }}
                >

                    <i className="fa fa-user"></i>

                    &nbsp;

                    Datos personales

                </h4>


                {/* =================================================
                    BOTONES DE ACCIÓN
                ================================================= */}

                <div
                    style={{
                        display: 'flex',
                        gap: '6px',
                        alignItems: 'center'
                    }}
                >


                    {/* =================================================
                        VER TRABAJADORES
                    ================================================= */}

                    <button

                        type="button"

                        className="w3-button w3-light-grey w3-border w3-round-small w3-small"

                        onClick={
                            irAlListadoTrabajadores
                        }

                        title="Ver listado de trabajadores"

                        style={{
                            padding: '5px 10px'
                        }}

                    >

                        <i className="fa fa-list"></i>

                        &nbsp;

                        Ver trabajadores

                    </button>


                    {/* =================================================
                        MODO MANUAL
                    ================================================= */}

                    <button

                        type="button"

                        className={

                            registroManual

                                ? 'w3-button w3-amber w3-round-small w3-small'

                                : 'w3-button w3-light-grey w3-border w3-round-small w3-small'

                        }

                        onClick={
                            manejarCambioRegistro
                        }

                        title={

                            registroManual

                                ? 'Volver a bloquear datos RENIEC'

                                : 'Desbloquear edición manual'

                        }

                        style={{
                            padding: '5px 10px'
                        }}

                    >

                        <i

                            className={

                                registroManual

                                    ? 'fa fa-unlock'

                                    : 'fa fa-lock'

                            }

                        ></i>

                        &nbsp;

                        {

                            registroManual

                                ? 'Registro manual'

                                : 'Desbloquear'

                        }

                    </button>

                </div>

            </div>


            <hr
                style={{
                    margin: '4px 0 14px 0'
                }}
            />


            {/* =================================================
                FILA 1
            ================================================= */}

            <div className="w3-row-padding">


                {/* =================================================
                    DNI
                ================================================= */}

                <div
                    className="w3-col l2 m4 s6 w3-margin-bottom"
                >

                    <label style={estiloLabel}>

                        DNI

                    </label>


                    <div
                        style={{
                            display: 'flex',
                            gap: '4px'
                        }}
                    >

                        <input

                            ref={dniRef}

                            className="w3-input w3-border w3-round-small"

                            type="text"

                            value={
                                dni
                            }

                            onChange={(event) =>

                                setDni(

                                    event.target.value
                                        .replace(/\D/g, '')

                                )

                            }

                            placeholder="DNI"

                            maxLength="8"

                            style={
                                estiloCompacto
                            }

                        />


                        <button

                            type="button"

                            className="w3-button w3-flat-midnight-blue w3-round-small"

                            onClick={
                                consultarDni
                            }

                            disabled={
                                registroManual ||
                                consultandoDni
                            }

                            title={

                                registroManual

                                    ? 'La consulta RENIEC está deshabilitada en modo manual'

                                    : 'Consultar DNI'

                            }

                            style={{

                                flexShrink: 0,

                                padding: '4px 8px',

                                opacity:

                                    registroManual

                                        ? 0.5

                                        : 1,

                                cursor:

                                    registroManual

                                        ? 'not-allowed'

                                        : 'pointer'

                            }}

                        >

                            {

                                consultandoDni

                                    ? (

                                        <i
                                            className="fa fa-spinner fa-spin"
                                        ></i>

                                    )

                                    : (

                                        <i
                                            className="fa fa-search"
                                        ></i>

                                    )

                            }

                        </button>

                    </div>

                </div>


                {/* =================================================
                    NOMBRE COMPLETO
                ================================================= */}

                <div
                    className="w3-col l3 m4 s6 w3-margin-bottom"
                >

                    <label style={estiloLabel}>

                        Nombres completos

                    </label>


                    <input

                        className="w3-input w3-border w3-round-small"

                        type="text"

                        value={
                            nombreCompletoMostrar
                        }

                        readOnly={
                            !registroManual
                        }

                        placeholder={

                            registroManual

                                ? 'Nombre completo'

                                : 'Nombre completo obtenido mediante DNI'

                        }

                        style={

                            registroManual

                                ? estiloCompacto

                                : {
                                    ...estiloBloqueado,
                                    ...estiloCompacto
                                }

                        }

                    />

                </div>


                {/* =================================================
                    APELLIDO PATERNO
                ================================================= */}

                <div
                    className="w3-col l2 m4 s6 w3-margin-bottom"
                >

                    <label style={estiloLabel}>

                        Apellido paterno

                    </label>


                    <input

                        className="w3-input w3-border w3-round-small"

                        type="text"

                        value={
                            apellidoPaterno
                        }

                        readOnly={
                            !registroManual
                        }

                        onChange={(event) =>

                            setApellidoPaterno(
                                event.target.value
                            )

                        }

                        placeholder={

                            registroManual

                                ? 'Ingrese apellido paterno'

                                : 'Se obtiene mediante DNI'

                        }

                        style={

                            registroManual

                                ? estiloCompacto

                                : {
                                    ...estiloBloqueado,
                                    ...estiloCompacto
                                }

                        }

                    />

                </div>


                {/* =================================================
                    APELLIDO MATERNO
                ================================================= */}

                <div
                    className="w3-col l2 m4 s6 w3-margin-bottom"
                >

                    <label style={estiloLabel}>

                        Apellido materno

                    </label>


                    <input

                        className="w3-input w3-border w3-round-small"

                        type="text"

                        value={
                            apellidoMaterno
                        }

                        readOnly={
                            !registroManual
                        }

                        onChange={(event) =>

                            setApellidoMaterno(
                                event.target.value
                            )

                        }

                        placeholder={

                            registroManual

                                ? 'Ingrese apellido materno'

                                : 'Se obtiene mediante DNI'

                        }

                        style={

                            registroManual

                                ? estiloCompacto

                                : {
                                    ...estiloBloqueado,
                                    ...estiloCompacto
                                }

                        }

                    />

                </div>


                {/* =================================================
                    NOMBRES
                ================================================= */}

                <div
                    className="w3-col l3 m4 s6 w3-margin-bottom"
                >

                    <label style={estiloLabel}>

                        Nombres

                    </label>


                    <input

                        className="w3-input w3-border w3-round-small"

                        type="text"

                        value={
                            nombres
                        }

                        readOnly={
                            !registroManual
                        }

                        onChange={(event) =>

                            setNombres(
                                event.target.value
                            )

                        }

                        placeholder={

                            registroManual

                                ? 'Ingrese nombres'

                                : 'Se obtiene mediante DNI'

                        }

                        style={

                            registroManual

                                ? estiloCompacto

                                : {
                                    ...estiloBloqueado,
                                    ...estiloCompacto
                                }

                        }

                    />

                </div>

            </div>


            {/* =================================================
                FILA 2
            ================================================= */}

            <div className="w3-row-padding">


                {/* =================================================
                    FECHA NACIMIENTO
                ================================================= */}

                <div
                    className="w3-col l2 m6 s12 w3-margin-bottom"
                >

                    <label style={estiloLabel}>

                        Fecha de nacimiento

                    </label>


                    <input

                        className="w3-input w3-border w3-round-small"

                        type="date"

                        value={
                            fechaNacimiento
                        }

                        onChange={(event) =>

                            setFechaNacimiento(
                                event.target.value
                            )

                        }

                    />

                </div>


                {/* =================================================
                    SEXO
                ================================================= */}

                <div
                    className="w3-col l2 m6 s12 w3-margin-bottom"
                >

                    <label style={estiloLabel}>

                        Sexo

                    </label>


                    <select

                        className="w3-select w3-border w3-round-small"

                        value={
                            sexo
                        }

                        onChange={(event) =>

                            setSexo(
                                event.target.value
                            )

                        }

                    >

                        <option value="">

                            Seleccione

                        </option>


                        <option value="HOMBRE">

                            Hombre

                        </option>


                        <option value="MUJER">

                            Mujer

                        </option>

                    </select>

                </div>


                {/* =================================================
                    CORREO
                ================================================= */}

                <div
                    className="w3-col l3 m6 s12 w3-margin-bottom"
                >

                    <label style={estiloLabel}>

                        Correo electrónico

                    </label>


                    <input

                        className="w3-input w3-border w3-round-small"

                        type="email"

                        value={
                            correo
                        }

                        onChange={(event) =>

                            setCorreo(
                                event.target.value
                            )

                        }

                        placeholder="correo@empresa.com"

                    />

                </div>


                {/* =================================================
                    DIRECCIÓN
                ================================================= */}

                <div
                    className="w3-col l3 m6 s12 w3-margin-bottom"
                >

                    <label style={estiloLabel}>

                        Dirección

                    </label>


                    <input

                        className="w3-input w3-border w3-round-small"

                        type="text"

                        value={
                            direccion
                        }

                        onChange={(event) =>

                            setDireccion(
                                event.target.value
                            )

                        }

                        placeholder="Ingrese dirección"

                    />

                </div>


                {/* =================================================
                    TELÉFONO
                ================================================= */}

                <div
                    className="w3-col l2 m6 s12 w3-margin-bottom"
                >

                    <label style={estiloLabel}>

                        Teléfono

                    </label>


                    <input

                        className="w3-input w3-border w3-round-small"

                        type="tel"

                        value={
                            telefono
                        }

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

        </>

    )

}


export default DatosPersonales