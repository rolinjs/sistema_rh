import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useTrabajadores from '../hooks/useTrabajadores'

function TrabajadorPage() {

    const navigate = useNavigate()

    const {
        trabajadores,
        areas,
        loading,
        error
    } = useTrabajadores()


    // =====================================================
    // FILTROS
    // =====================================================

    const [busqueda, setBusqueda] = useState('')
    const [filtroEstado, setFiltroEstado] = useState('TODOS')
    const [fechaDesde, setFechaDesde] = useState('')
    const [fechaHasta, setFechaHasta] = useState('')


    // =====================================================
    // FILTRAR
    // =====================================================

    const trabajadoresFiltrados = trabajadores.filter(
        trabajador => {

            const texto = busqueda
                .toLowerCase()
                .trim()


            const coincideBusqueda =
                trabajador.dni
                    ?.toLowerCase()
                    .includes(texto) ||

                trabajador.nombreCompleto
                    ?.toLowerCase()
                    .includes(texto)


            const coincideEstado =
                filtroEstado === 'TODOS' ||
                trabajador.estado === filtroEstado


            /*
             * fechaIngreso todavía no existe
             * en nuestro TrabajadorResponseDTO.
             *
             * Por eso dejamos esta parte preparada,
             * pero no aplicamos el filtro mientras
             * el backend no tenga ese campo.
             */
            const coincideFechaDesde =
                !fechaDesde ||
                !trabajador.fechaIngreso ||
                trabajador.fechaIngreso >= fechaDesde


            const coincideFechaHasta =
                !fechaHasta ||
                !trabajador.fechaIngreso ||
                trabajador.fechaIngreso <= fechaHasta


            return (
                coincideBusqueda &&
                coincideEstado &&
                coincideFechaDesde &&
                coincideFechaHasta
            )
        }
    )


    // =====================================================
    // LIMPIAR FILTROS
    // =====================================================

    const limpiarFiltros = () => {

        setBusqueda('')
        setFiltroEstado('TODOS')
        setFechaDesde('')
        setFechaHasta('')
    }


    // =====================================================
    // FORMATEAR FECHA
    // =====================================================

    const formatearFecha = (fecha) => {

        if (!fecha) {
            return '—'
        }

        return new Date(
            `${fecha}T00:00:00`
        ).toLocaleDateString(
            'es-PE'
        )
    }


    // =====================================================
    // OBTENER NOMBRE DEL ÁREA
    // =====================================================

    const obtenerNombreArea = (areaId) => {

        if (!areaId) {
            return '—'
        }

        const area = areas.find(
            item => item.id === areaId
        )

        return area
            ? area.nombre
            : '—'
    }


    // =====================================================
    // ESTADO
    // =====================================================

    const obtenerClaseEstado = (estado) => {

        return estado === 'ACTIVO'
            ? 'w3-green'
            : 'w3-red'
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

                <div className="w3-row">

                    <div>

                        <h3
                            className="w3-text-dark-grey"
                            style={{
                                margin: '0 0 4px 0'
                            }}
                        >

                            <i className="fa fa-id-card"></i>

                            &nbsp;

                            Trabajadores

                        </h3>

                        <span className="w3-text-grey w3-small">

                            Administración y consulta de trabajadores.

                        </span>

                    </div>


                    <button
                        className="w3-button w3-small w3-right w3-flat-midnight-blue w3-round-small"
                        onClick={() =>
                            navigate('/trabajadores/nuevo')
                        }
                    >

                        <i className="fa fa-plus"></i>

                        &nbsp;

                        Nuevo trabajador

                    </button>

                </div>

            </div>


            {/* =================================================
                FILTROS
            ================================================= */}

            <div
                className="w3-card w3-white w3-round-small w3-margin-bottom"
                style={{
                    borderTop: '3px solid #2f4356'
                }}
            >

                <div className="w3-padding-small">


                    {/* TÍTULO */}

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '8px'
                        }}
                    >

                        <span
                            className="w3-text-dark-grey"
                            style={{
                                fontWeight: 600,
                                fontSize: '13px'
                            }}
                        >

                            <i className="fa fa-filter"></i>

                            &nbsp;

                            Filtros

                        </span>


                        <span
                            className="w3-text-grey"
                            style={{
                                fontSize: '11px'
                            }}
                        >

                            {trabajadoresFiltrados.length}

                            {' '}

                            resultados

                        </span>

                    </div>


                    {/* CONTROLES */}

                    <div className="w3-row-padding">


                        {/* BUSCAR */}

                        <div className="w3-col l3 m6 s12 w3-margin-bottom">

                            <label
                                className="w3-text-grey"
                                style={{
                                    fontSize: '11px'
                                }}
                            >

                                DNI / Trabajador

                            </label>


                            <div
                                style={{
                                    position: 'relative'
                                }}
                            >

                                <i
                                    className="fa fa-search"
                                    style={{
                                        position: 'absolute',
                                        left: '9px',
                                        top: '9px',
                                        color: '#999',
                                        zIndex: 1
                                    }}
                                ></i>


                                <input
                                    className="w3-input w3-border w3-round-small"
                                    type="text"
                                    placeholder="Buscar DNI o nombre..."
                                    value={busqueda}
                                    onChange={(event) =>
                                        setBusqueda(
                                            event.target.value
                                        )
                                    }
                                    style={{
                                        height: '32px',
                                        paddingLeft: '29px',
                                        fontSize: '12px'
                                    }}
                                />

                            </div>

                        </div>


                        {/* ESTADO */}

                        <div className="w3-col l2 m6 s12 w3-margin-bottom">

                            <label
                                className="w3-text-grey"
                                style={{
                                    fontSize: '11px'
                                }}
                            >

                                Estado

                            </label>


                            <select
                                className="w3-select w3-border w3-round-small"
                                value={filtroEstado}
                                onChange={(event) =>
                                    setFiltroEstado(
                                        event.target.value
                                    )
                                }
                                style={{
                                    height: '32px',
                                    padding: '3px 8px',
                                    fontSize: '12px'
                                }}
                            >

                                <option value="TODOS">
                                    Todos
                                </option>

                                <option value="ACTIVO">
                                    Activos
                                </option>

                                <option value="INACTIVO">
                                    Inactivos
                                </option>

                            </select>

                        </div>


                        {/* FECHA DESDE */}

                        <div className="w3-col l2 m6 s12 w3-margin-bottom">

                            <label
                                className="w3-text-grey"
                                style={{
                                    fontSize: '11px'
                                }}
                            >

                                Ingreso desde

                            </label>


                            <input
                                className="w3-input w3-border w3-round-small"
                                type="date"
                                value={fechaDesde}
                                onChange={(event) =>
                                    setFechaDesde(
                                        event.target.value
                                    )
                                }
                                style={{
                                    height: '32px',
                                    fontSize: '12px'
                                }}
                            />

                        </div>


                        {/* FECHA HASTA */}

                        <div className="w3-col l2 m6 s12 w3-margin-bottom">

                            <label
                                className="w3-text-grey"
                                style={{
                                    fontSize: '11px'
                                }}
                            >

                                Ingreso hasta

                            </label>


                            <input
                                className="w3-input w3-border w3-round-small"
                                type="date"
                                value={fechaHasta}
                                onChange={(event) =>
                                    setFechaHasta(
                                        event.target.value
                                    )
                                }
                                style={{
                                    height: '32px',
                                    fontSize: '12px'
                                }}
                            />

                        </div>


                        {/* BOTONES */}

                        <div className="w3-col l3 m12 s12 w3-margin-bottom">

                            <label
                                style={{
                                    visibility: 'hidden',
                                    fontSize: '11px'
                                }}
                            >

                                Acciones

                            </label>


                            <div
                                style={{
                                    display: 'flex',
                                    gap: '5px'
                                }}
                            >

                                <button
                                    className="w3-button w3-light-grey w3-border w3-round-small"
                                    onClick={limpiarFiltros}
                                    style={{
                                        height: '32px',
                                        fontSize: '12px'
                                    }}
                                >

                                    <i className="fa fa-eraser"></i>

                                    &nbsp;

                                    Limpiar

                                </button>


                                <button
                                    className="w3-button w3-green w3-round-small"
                                    title="Exportar resultados a Excel"
                                    style={{
                                        height: '32px',
                                        fontSize: '12px'
                                    }}
                                >

                                    <i className="fa fa-file-excel-o"></i>

                                    &nbsp;

                                    Excel

                                </button>


                                <button
                                    className="w3-button w3-red w3-round-small"
                                    title="Exportar resultados a PDF"
                                    style={{
                                        height: '32px',
                                        fontSize: '12px'
                                    }}
                                >

                                    <i className="fa fa-file-pdf-o"></i>

                                    &nbsp;

                                    PDF

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* =================================================
                LISTADO
            ================================================= */}

            <div
                className="w3-card w3-white w3-round-small"
                style={{
                    overflow: 'hidden'
                }}
            >


                {/* CABECERA */}

                <div
                    className="w3-padding-small"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid #ddd'
                    }}
                >

                    <span
                        className="w3-text-dark-grey"
                        style={{
                            fontWeight: 600,
                            fontSize: '13px'
                        }}
                    >

                        <i className="fa fa-list"></i>

                        &nbsp;

                        Listado de trabajadores

                    </span>


                    <span
                        className="w3-text-grey"
                        style={{
                            fontSize: '11px'
                        }}
                    >

                        Total:

                        <strong style={{ marginLeft: '4px' }}>
                            {trabajadoresFiltrados.length}
                        </strong>

                    </span>

                </div>


                {/* TABLA */}

                <div
                    style={{
                        overflowX: 'auto',
                        overflowY: 'auto',
                        maxHeight: '560px'
                    }}
                >
  
                  <table
                        className="w3-table-all w3-small trabajadores-tabla-compacta"
                        style={{
                            minWidth: '1280px',
                            borderCollapse: 'collapse',
                            fontSize: '11px'
                        }}
                    >

                        <thead>

                            <tr className="w3-light-grey">

                                <th style={{ minWidth: '85px' }}>
                                    DNI
                                </th>

                                <th style={{ minWidth: '190px' }}>
                                    Trabajador
                                </th>

                                <th style={{ minWidth: '65px' }}>
                                    Sexo
                                </th>

                                <th style={{ minWidth: '105px' }}>
                                    Fecha nacimiento
                                </th>

                                <th style={{ minWidth: '125px' }}>
                                    Área
                                </th>

                                <th style={{ minWidth: '125px' }}>
                                    SubÁrea
                                </th>

                                <th style={{ minWidth: '120px' }}>
                                    Cargo
                                </th>

                                <th style={{ minWidth: '155px' }}>
                                    Cargo específico
                                </th>

                                <th style={{ minWidth: '90px' }}>
                                    Teléfono
                                </th>

                                <th style={{ minWidth: '75px' }}>
                                    Estado
                                </th>

                                <th style={{ minWidth: '105px' }}>
                                    Fecha ingreso
                                </th>

                                <th
                                    style={{
                                        minWidth: '150px',
                                        textAlign: 'center'
                                    }}
                                >
                                    Acciones
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {loading ? (

                                <tr>

                                    <td
                                        colSpan="12"
                                        className="w3-center"
                                        style={{
                                            padding: '18px'
                                        }}
                                    >

                                        <i className="fa fa-spinner fa-spin"></i>

                                        &nbsp;

                                        Cargando trabajadores...

                                    </td>

                                </tr>

                            ) : error ? (

                                <tr>

                                    <td
                                        colSpan="12"
                                        className="w3-center w3-pale-red"
                                        style={{
                                            padding: '18px'
                                        }}
                                    >

                                        <i className="fa fa-warning"></i>

                                        &nbsp;

                                        {error}

                                    </td>

                                </tr>

                            ) : (

                                trabajadoresFiltrados.map(
                                    trabajador => (

                                    <tr
                                        key={trabajador.id}
                                        className="w3-hover-pale-green"
                                    >

                                        <td
                                            style={{
                                                fontWeight: 600
                                            }}
                                        >

                                            {trabajador.dni}

                                        </td>


                                        <td
                                            style={{
                                                fontWeight: 600
                                            }}
                                        >

                                            {trabajador.nombreCompleto}

                                        </td>


                                        <td>

                                            {trabajador.sexoTrabajador}

                                        </td>


                                        <td>

                                            {formatearFecha(
                                                trabajador.fechaNacimiento
                                            )}

                                        </td>


                                        <td>

                                            {obtenerNombreArea(
                                                trabajador.areaId
                                            )}

                                        </td>


                                        <td>

                                            {trabajador.subArea}

                                        </td>


                                        <td>

                                            {trabajador.cargo}

                                        </td>


                                        <td>

                                            {trabajador.cargoEspecifico}

                                        </td>


                                        <td>

                                            {trabajador.telefono}

                                        </td>


                                        <td>

                                            <span
                                                className={`w3-tag w3-round-small ${obtenerClaseEstado(
                                                    trabajador.estado
                                                )}`}
                                                style={{
                                                    fontSize: '10px'
                                                }}
                                            >

                                                {trabajador.estado}

                                            </span>

                                        </td>


                                        <td>

                                            {formatearFecha(
                                                trabajador.fechaIngreso
                                            )}

                                        </td>


                                        <td>

                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    gap: '3px'
                                                }}
                                            >

                                                <button
                                                    className="w3-button w3-light-grey w3-border w3-round-small"
                                                    title="Ver trabajador"
                                                >

                                                    <i className="fa fa-eye"></i>

                                                </button>


                                                <button
                                                    className="w3-button w3-light-grey w3-border w3-round-small"
                                                    title="Editar trabajador"
                                                >

                                                    <i className="fa fa-pencil"></i>

                                                </button>


                                                <button
                                                    className="w3-button w3-light-grey w3-border w3-round-small"
                                                    title="Activar / desactivar"
                                                >

                                                    <i className="fa fa-power-off"></i>

                                                </button>


                                                <button
                                                    className="w3-button w3-light-grey w3-border w3-round-small"
                                                    title="Generar contrato"
                                                >

                                                    <i className="fa fa-file-text-o"></i>

                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                )
                                )
                            )}

                        </tbody>

                    </table>

                </div>


                {/* =================================================
                    PIE
                ================================================= */}

                <div
                    className="w3-padding-small"
                    style={{
                        borderTop: '1px solid #ddd',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '12px'
                    }}
                >

                    <span className="w3-text-grey">

                        Mostrando

                        <strong style={{ marginLeft: '4px' }}>
                            {trabajadoresFiltrados.length}
                        </strong>

                        {' '}

                        de

                        <strong style={{ marginLeft: '4px' }}>
                            {trabajadores.length}
                        </strong>

                        {' '}

                        trabajadores

                    </span>


                    <div>

                        <button
                            className="w3-button w3-light-grey w3-round-small"
                            disabled
                        >

                            <i className="fa fa-angle-left"></i>

                        </button>


                        <button
                            className="w3-button w3-flat-midnight-blue w3-round-small"
                            style={{
                                marginLeft: '3px'
                            }}
                        >

                            1

                        </button>


                        <button
                            className="w3-button w3-light-grey w3-round-small"
                            style={{
                                marginLeft: '3px'
                            }}
                        >

                            <i className="fa fa-angle-right"></i>

                        </button>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default TrabajadorPage