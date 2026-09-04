import ServerStatus from '../../../components/ui/ServerStatus';

const CargoTable = ({
    cargosFiltrados,
    loading,
    error,
    onEditar,
    onCambiarEstado,
    cambiandoEstado
}) => {

    const formatearFecha = (fecha) => {

        if (!fecha) {
            return '-'
        }

        const fechaFormateada = new Date(fecha)

        if (Number.isNaN(fechaFormateada.getTime())) {
            return '-'
        }

        return fechaFormateada.toLocaleString('es-PE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }


    const manejarEditar = (cargo) => {

        console.log('Editar cargo:', cargo)

        if (typeof onEditar === 'function') {
            onEditar(cargo)
        }
    }


    const manejarEstado = async (cargo) => {

        const accion =
            cargo.estado === 'ACTIVO'
                ? 'desactivar'
                : 'activar'

        const confirmado = window.confirm(
            `¿Está seguro de ${accion} el cargo "${cargo.nombre}"?`
        )

        if (!confirmado) {
            return
        }

        console.log(
            'Cambiar estado cargo:',
            cargo.id
        )

        if (typeof onCambiarEstado === 'function') {
            await onCambiarEstado(cargo)
        }
    }


    const obtenerSubAreaNombre = (cargo) => {

        return (
            cargo.SubAreaNombre
            || cargo.subAreaNombre
            || '-'
        )

    }


    return (

        <div className="w3-card w3-white w3-small">

            <header className="w3-container w3-light-grey">

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '15px',
                        flexWrap: 'wrap'
                    }}
                >

                    <h6 className="w3-margin">

                        <i className="fa fa-list"></i>

                        &nbsp;

                        Lista de cargos

                    </h6>


                    <ServerStatus />

                </div>

            </header>


            <div className="w3-responsive w3-margin-bottom">

                <table className="w3-table-all w3-small">

                    <thead>

                        <tr>

                            <th>
                                Cargo
                            </th>

                            <th>
                                SubÁrea
                            </th>

                            <th>
                                Descripción
                            </th>

                            <th>
                                Estado
                            </th>

                            <th
                                style={{
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Fecha de creación
                            </th>

                            <th
                                style={{
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Actualización
                            </th>

                            <th
                                style={{
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Acciones
                            </th>

                        </tr>

                    </thead>


                    <tbody>


                        {/* =================================================
                            CARGANDO
                        ================================================= */}

                        {loading && (

                            <tr>

                                <td
                                    colSpan="7"
                                    className="w3-center"
                                >

                                    Cargando cargos...

                                </td>

                            </tr>

                        )}


                        {/* =================================================
                            ERROR
                        ================================================= */}

                        {!loading && error && (

                            <tr>

                                <td
                                    colSpan="7"
                                    className="w3-center w3-text-red"
                                >

                                    {error}

                                </td>

                            </tr>

                        )}


                        {/* =================================================
                            SIN RESULTADOS
                        ================================================= */}

                        {!loading &&
                            !error &&
                            cargosFiltrados.length === 0 && (

                                <tr>

                                    <td
                                        colSpan="7"
                                        className="w3-center"
                                    >

                                        No se encontraron cargos.

                                    </td>

                                </tr>

                            )}


                        {/* =================================================
                            DATOS
                        ================================================= */}

                        {!loading &&
                            !error &&
                            cargosFiltrados.map((cargo) => (

                                <tr
                                    key={cargo.id}
                                    className="w3-hover-pale-green"
                                >

                                    <td
                                        style={{
                                            paddingTop: '6px',
                                            paddingBottom: '6px'
                                        }}
                                    >

                                        {cargo.nombre}

                                    </td>


                                    <td
                                        style={{
                                            paddingTop: '6px',
                                            paddingBottom: '6px'
                                        }}
                                    >

                                        {obtenerSubAreaNombre(
                                            cargo
                                        )}

                                    </td>


                                    <td
                                        style={{
                                            paddingTop: '6px',
                                            paddingBottom: '6px'
                                        }}
                                    >

                                        {cargo.descripcion || '-'}

                                    </td>


                                    <td
                                        style={{
                                            paddingTop: '6px',
                                            paddingBottom: '6px',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >

                                        <span
                                            className={
                                                cargo.estado === 'ACTIVO'
                                                    ? 'w3-tag w3-green w3-round'
                                                    : 'w3-tag w3-red w3-round'
                                            }
                                        >

                                            {cargo.estado}

                                        </span>

                                    </td>


                                    <td
                                        style={{
                                            paddingTop: '6px',
                                            paddingBottom: '6px',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >

                                        {formatearFecha(
                                            cargo.fechaRegistro
                                        )}

                                    </td>


                                    <td
                                        style={{
                                            paddingTop: '6px',
                                            paddingBottom: '6px',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >

                                        {formatearFecha(
                                            cargo.fechaActualizacion
                                        )}

                                    </td>


                                    <td
                                        style={{
                                            paddingTop: '6px',
                                            paddingBottom: '6px',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >

                                        <button
                                            type="button"
                                            className="w3-button w3-tiny w3-round w3-border w3-light-grey w3-margin-right"
                                            title="Editar"
                                            onClick={() =>
                                                manejarEditar(cargo)
                                            }
                                            style={{
                                                display: 'inline-block',
                                                verticalAlign: 'middle'
                                            }}
                                        >

                                            <i className="fa fa-pencil"></i>

                                        </button>


                                        <button
                                            type="button"
                                            className="w3-button w3-tiny w3-round w3-border w3-light-grey"
                                            title={
                                                cargo.estado === 'ACTIVO'
                                                    ? 'Desactivar'
                                                    : 'Activar'
                                            }
                                            onClick={() =>
                                                manejarEstado(cargo)
                                            }
                                            disabled={cambiandoEstado}
                                            style={{
                                                display: 'inline-block',
                                                verticalAlign: 'middle'
                                            }}
                                        >

                                            <i
                                                className={
                                                    cargo.estado === 'ACTIVO'
                                                        ? 'fa fa-ban'
                                                        : 'fa fa-check'
                                                }
                                            ></i>

                                        </button>

                                    </td>

                                </tr>

                            ))}

                    </tbody>

                </table>

            </div>

        </div>

    )
}

export default CargoTable