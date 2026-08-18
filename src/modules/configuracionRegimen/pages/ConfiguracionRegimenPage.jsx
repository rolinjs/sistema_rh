import { useState } from 'react'


function ConfiguracionRegimenPage() {

    // =====================================================
    // RÉGIMEN SELECCIONADO
    // =====================================================

    const [regimenSeleccionado, setRegimenSeleccionado] =
        useState('GENERAL')


    // =====================================================
    // DATOS DEL FORMULARIO
    // =====================================================

    const [diasVacaciones, setDiasVacaciones] = useState('30')

    const [ctsHabilitada, setCtsHabilitada] = useState(true)

    const [gratificacionHabilitada, setGratificacionHabilitada] =
        useState(true)

    const [betaHabilitada, setBetaHabilitada] =
        useState(false)

    const [utilidadesHabilitadas, setUtilidadesHabilitadas] =
        useState(true)

    const [ctsProrrateada, setCtsProrrateada] =
        useState(false)

    const [gratificacionProrrateada, setGratificacionProrrateada] =
        useState(false)

    const [porcentajeCts, setPorcentajeCts] =
        useState('')

    const [porcentajeGratificacion, setPorcentajeGratificacion] =
        useState('')

    const [porcentajeBeta, setPorcentajeBeta] =
        useState('')

    const [porcentajeUtilidades, setPorcentajeUtilidades] =
        useState('')

    const [vigenciaDesde, setVigenciaDesde] =
        useState('2026-01-01')

    const [vigenciaHasta, setVigenciaHasta] =
        useState('')


    // =====================================================
    // DATOS TEMPORALES
    // =====================================================

    const [configuraciones] = useState([

        {
            id: 1,
            regimen: 'GENERAL',
            nombre: 'Régimen General',
            diasVacaciones: 30,
            cts: true,
            gratificacion: true,
            beta: false,
            utilidades: true,
            vigenciaDesde: '2026-01-01',
            vigenciaHasta: null,
            estado: true
        },

        {
            id: 2,
            regimen: 'AGRARIO',
            nombre: 'Régimen Laboral Agrario',
            diasVacaciones: 30,
            cts: true,
            gratificacion: true,
            beta: true,
            utilidades: true,
            vigenciaDesde: '2026-01-01',
            vigenciaHasta: null,
            estado: true
        },

        {
            id: 3,
            regimen: 'MYPE_MICRO',
            nombre: 'Régimen MYPE - Microempresa',
            diasVacaciones: 15,
            cts: false,
            gratificacion: false,
            beta: false,
            utilidades: false,
            vigenciaDesde: '2026-01-01',
            vigenciaHasta: null,
            estado: true
        },

        {
            id: 4,
            regimen: 'MYPE_PEQUENA',
            nombre: 'Régimen MYPE - Pequeña Empresa',
            diasVacaciones: 15,
            cts: true,
            gratificacion: true,
            beta: false,
            utilidades: false,
            vigenciaDesde: '2026-01-01',
            vigenciaHasta: null,
            estado: true
        },

        {
            id: 5,
            regimen: 'PART_TIME',
            nombre: 'Trabajadores a Tiempo Parcial',
            diasVacaciones: 6,
            cts: false,
            gratificacion: false,
            beta: false,
            utilidades: false,
            vigenciaDesde: '2026-01-01',
            vigenciaHasta: null,
            estado: true
        }

    ])


    // =====================================================
    // CAMBIAR RÉGIMEN
    // =====================================================

    const cambiarRegimen = (event) => {

        const codigo = event.target.value

        setRegimenSeleccionado(codigo)

        const configuracion =
            configuraciones.find(
                item => item.regimen === codigo
            )

        if (!configuracion) {
            return
        }

        setDiasVacaciones(
            configuracion.diasVacaciones
        )

        setCtsHabilitada(
            configuracion.cts
        )

        setGratificacionHabilitada(
            configuracion.gratificacion
        )

        setBetaHabilitada(
            configuracion.beta
        )

        setUtilidadesHabilitadas(
            configuracion.utilidades
        )

        setVigenciaDesde(
            configuracion.vigenciaDesde
        )

        setVigenciaHasta(
            configuracion.vigenciaHasta || ''
        )

    }


    // =====================================================
    // GUARDAR
    // =====================================================

    const guardarConfiguracion = (event) => {

        event.preventDefault()

        console.log({

            regimenSeleccionado,

            diasVacaciones,

            ctsHabilitada,

            gratificacionHabilitada,

            betaHabilitada,

            utilidadesHabilitadas,

            ctsProrrateada,

            gratificacionProrrateada,

            porcentajeCts,

            porcentajeGratificacion,

            porcentajeBeta,

            porcentajeUtilidades,

            vigenciaDesde,

            vigenciaHasta

        })

        alert(
            'Configuración guardada correctamente.'
        )

    }


    return (

        <div className="w3-container">


            {/* =================================================
                ENCABEZADO
            ================================================= */}

            <div className="w3-margin-bottom">

                <h4 className="w3-margin-top">

                    <i className="fa fa-sliders"></i>

                    &nbsp;

                    Configuración de regímenes

                </h4>

                <p className="w3-text-grey">

                    Configure las reglas laborales y beneficios
                    asociados a cada régimen.

                </p>

            </div>


            {/* =================================================
                CONFIGURACIÓN
            ================================================= */}

            <div className="w3-card w3-white w3-margin-bottom">

                <header className="w3-container w3-light-grey">

                    <h5 className="w3-margin">

                        <i className="fa fa-cog"></i>

                        &nbsp;

                        Configuración del régimen

                    </h5>

                </header>


                <form
                    className="w3-container w3-padding-16 w3-small"
                    onSubmit={guardarConfiguracion}
                >


                    {/* =================================================
                        RÉGIMEN
                    ================================================= */}

                    <div className="w3-row-padding">

                        <div className="w3-col l5 m8 s12">

                            <label>
                                Régimen laboral
                            </label>

                            <select
                                className="w3-select w3-border"
                                value={regimenSeleccionado}
                                onChange={cambiarRegimen}
                            >

                                <option value="GENERAL">
                                    Régimen General
                                </option>

                                <option value="AGRARIO">
                                    Régimen Laboral Agrario
                                </option>

                                <option value="MYPE_MICRO">
                                    Régimen MYPE - Microempresa
                                </option>

                                <option value="MYPE_PEQUENA">
                                    Régimen MYPE - Pequeña Empresa
                                </option>

                                <option value="PART_TIME">
                                    Trabajadores a Tiempo Parcial
                                </option>

                            </select>

                        </div>

                    </div>


                    <hr />


                    {/* =================================================
                        BENEFICIOS
                    ================================================= */}

                    <div className="w3-container w3-light-grey w3-padding-small w3-margin-bottom">

                        <strong>

                            <i className="fa fa-check-square-o"></i>

                            &nbsp;

                            Beneficios laborales

                        </strong>

                    </div>


                    <div className="w3-row-padding">


                        {/* VACACIONES */}

                        <div className="w3-col l3 m6 s12">

                            <label>
                                Días de vacaciones
                            </label>

                            <input
                                className="w3-input w3-border"
                                type="number"
                                min="0"
                                value={diasVacaciones}
                                onChange={(event) =>
                                    setDiasVacaciones(
                                        event.target.value
                                    )
                                }
                            />

                        </div>


                        {/* CTS */}

                        <div className="w3-col l3 m6 s12">

                            <label>
                                CTS
                            </label>

                            <p>

                                <input
                                    className="w3-check"
                                    type="checkbox"
                                    checked={ctsHabilitada}
                                    onChange={(event) =>
                                        setCtsHabilitada(
                                            event.target.checked
                                        )
                                    }
                                />

                                <span className="w3-margin-left">
                                    Habilitada
                                </span>

                            </p>

                        </div>


                        {/* GRATIFICACIÓN */}

                        <div className="w3-col l3 m6 s12">

                            <label>
                                Gratificación
                            </label>

                            <p>

                                <input
                                    className="w3-check"
                                    type="checkbox"
                                    checked={gratificacionHabilitada}
                                    onChange={(event) =>
                                        setGratificacionHabilitada(
                                            event.target.checked
                                        )
                                    }
                                />

                                <span className="w3-margin-left">
                                    Habilitada
                                </span>

                            </p>

                        </div>


                        {/* BETA */}

                        <div className="w3-col l3 m6 s12">

                            <label>
                                BETA
                            </label>

                            <p>

                                <input
                                    className="w3-check"
                                    type="checkbox"
                                    checked={betaHabilitada}
                                    onChange={(event) =>
                                        setBetaHabilitada(
                                            event.target.checked
                                        )
                                    }
                                />

                                <span className="w3-margin-left">
                                    Habilitada
                                </span>

                            </p>

                        </div>

                    </div>


                    <div className="w3-row-padding">


                        {/* UTILIDADES */}

                        <div className="w3-col l3 m6 s12">

                            <label>
                                Utilidades
                            </label>

                            <p>

                                <input
                                    className="w3-check"
                                    type="checkbox"
                                    checked={utilidadesHabilitadas}
                                    onChange={(event) =>
                                        setUtilidadesHabilitadas(
                                            event.target.checked
                                        )
                                    }
                                />

                                <span className="w3-margin-left">
                                    Habilitadas
                                </span>

                            </p>

                        </div>


                        {/* CTS PRORRATEADA */}

                        <div className="w3-col l3 m6 s12">

                            <label>
                                CTS prorrateada
                            </label>

                            <p>

                                <input
                                    className="w3-check"
                                    type="checkbox"
                                    checked={ctsProrrateada}
                                    onChange={(event) =>
                                        setCtsProrrateada(
                                            event.target.checked
                                        )
                                    }
                                />

                                <span className="w3-margin-left">
                                    Permitir
                                </span>

                            </p>

                        </div>


                        {/* GRATIFICACIÓN PRORRATEADA */}

                        <div className="w3-col l3 m6 s12">

                            <label>
                                Gratificación prorrateada
                            </label>

                            <p>

                                <input
                                    className="w3-check"
                                    type="checkbox"
                                    checked={
                                        gratificacionProrrateada
                                    }
                                    onChange={(event) =>
                                        setGratificacionProrrateada(
                                            event.target.checked
                                        )
                                    }
                                />

                                <span className="w3-margin-left">
                                    Permitir
                                </span>

                            </p>

                        </div>

                    </div>


                    <hr />


                    {/* =================================================
                        PORCENTAJES
                    ================================================= */}

                    <div className="w3-container w3-light-grey w3-padding-small w3-margin-bottom">

                        <strong>

                            <i className="fa fa-percent"></i>

                            &nbsp;

                            Porcentajes de referencia

                        </strong>

                    </div>


                    <div className="w3-row-padding">


                        <div className="w3-col l3 m6 s12">

                            <label>
                                % CTS
                            </label>

                            <input
                                className="w3-input w3-border"
                                type="number"
                                step="0.01"
                                value={porcentajeCts}
                                onChange={(event) =>
                                    setPorcentajeCts(
                                        event.target.value
                                    )
                                }
                                placeholder="Ej. 9.72"
                            />

                        </div>


                        <div className="w3-col l3 m6 s12">

                            <label>
                                % Gratificación
                            </label>

                            <input
                                className="w3-input w3-border"
                                type="number"
                                step="0.01"
                                value={porcentajeGratificacion}
                                onChange={(event) =>
                                    setPorcentajeGratificacion(
                                        event.target.value
                                    )
                                }
                                placeholder="Ej. 16.66"
                            />

                        </div>


                        <div className="w3-col l3 m6 s12">

                            <label>
                                % BETA
                            </label>

                            <input
                                className="w3-input w3-border"
                                type="number"
                                step="0.01"
                                value={porcentajeBeta}
                                onChange={(event) =>
                                    setPorcentajeBeta(
                                        event.target.value
                                    )
                                }
                                placeholder="Ej. 30.00"
                            />

                        </div>


                        <div className="w3-col l3 m6 s12">

                            <label>
                                % Utilidades
                            </label>

                            <input
                                className="w3-input w3-border"
                                type="number"
                                step="0.01"
                                value={porcentajeUtilidades}
                                onChange={(event) =>
                                    setPorcentajeUtilidades(
                                        event.target.value
                                    )
                                }
                                placeholder="Ej. 7.50"
                            />

                        </div>

                    </div>


                    <hr />


                    {/* =================================================
                        VIGENCIA
                    ================================================= */}

                    <div className="w3-container w3-light-grey w3-padding-small w3-margin-bottom">

                        <strong>

                            <i className="fa fa-calendar"></i>

                            &nbsp;

                            Vigencia

                        </strong>

                    </div>


                    <div className="w3-row-padding">


                        <div className="w3-col l3 m6 s12">

                            <label>
                                Vigencia desde
                            </label>

                            <input
                                className="w3-input w3-border"
                                type="date"
                                value={vigenciaDesde}
                                onChange={(event) =>
                                    setVigenciaDesde(
                                        event.target.value
                                    )
                                }
                            />

                        </div>


                        <div className="w3-col l3 m6 s12">

                            <label>
                                Vigencia hasta
                            </label>

                            <input
                                className="w3-input w3-border"
                                type="date"
                                value={vigenciaHasta}
                                onChange={(event) =>
                                    setVigenciaHasta(
                                        event.target.value
                                    )
                                }
                            />

                        </div>

                    </div>


                    {/* =================================================
                        BOTÓN
                    ================================================= */}

                    <div className="w3-margin-top">

                        <button
                            type="submit"
                            className="w3-button w3-flat-midnight-blue"
                        >

                            <i className="fa fa-save"></i>

                            &nbsp;

                            Guardar configuración

                        </button>

                    </div>

                </form>

            </div>


            {/* =================================================
                HISTORIAL
            ================================================= */}

            <div className="w3-card w3-white w3-small">

                <header className="w3-container w3-light-grey">

                    <h5 className="w3-margin">

                        <i className="fa fa-history"></i>

                        &nbsp;

                        Configuraciones registradas

                    </h5>

                </header>


                <div className="w3-responsive">

                    <table className="w3-table-all">

                        <thead>

                            <tr>

                                <th>
                                    Régimen
                                </th>

                                <th>
                                    Vacaciones
                                </th>

                                <th>
                                    CTS
                                </th>

                                <th>
                                    Gratificación
                                </th>

                                <th>
                                    BETA
                                </th>

                                <th>
                                    Utilidades
                                </th>

                                <th>
                                    Vigencia
                                </th>

                                <th>
                                    Estado
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {configuraciones.map(
                                configuracion => (

                                    <tr
                                        key={configuracion.id}
                                    >

                                        <td>

                                            <strong>
                                                {configuracion.nombre}
                                            </strong>

                                            <br />

                                            <span className="w3-text-grey">
                                                {configuracion.regimen}
                                            </span>

                                        </td>

                                        <td>
                                            {configuracion.diasVacaciones}
                                            &nbsp; días
                                        </td>

                                        <td>

                                            {configuracion.cts
                                                ? (
                                                    <span className="w3-text-green">
                                                        Sí
                                                    </span>
                                                )
                                                : (
                                                    <span className="w3-text-grey">
                                                        No
                                                    </span>
                                                )
                                            }

                                        </td>

                                        <td>

                                            {configuracion.gratificacion
                                                ? (
                                                    <span className="w3-text-green">
                                                        Sí
                                                    </span>
                                                )
                                                : (
                                                    <span className="w3-text-grey">
                                                        No
                                                    </span>
                                                )
                                            }

                                        </td>

                                        <td>

                                            {configuracion.beta
                                                ? (
                                                    <span className="w3-text-green">
                                                        Sí
                                                    </span>
                                                )
                                                : (
                                                    <span className="w3-text-grey">
                                                        No
                                                    </span>
                                                )
                                            }

                                        </td>

                                        <td>

                                            {configuracion.utilidades
                                                ? (
                                                    <span className="w3-text-green">
                                                        Sí
                                                    </span>
                                                )
                                                : (
                                                    <span className="w3-text-grey">
                                                        No
                                                    </span>
                                                )
                                            }

                                        </td>

                                        <td>

                                            {configuracion.vigenciaDesde}

                                            <br />

                                            <span className="w3-text-grey">

                                                {configuracion.vigenciaHasta
                                                    || 'Vigente'
                                                }

                                            </span>

                                        </td>

                                        <td>

                                            {configuracion.estado
                                                ? (
                                                    <span className="w3-tag w3-green">
                                                        Activo
                                                    </span>
                                                )
                                                : (
                                                    <span className="w3-tag w3-grey">
                                                        Inactivo
                                                    </span>
                                                )
                                            }

                                        </td>

                                    </tr>

                                )
                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    )

}


export default ConfiguracionRegimenPage