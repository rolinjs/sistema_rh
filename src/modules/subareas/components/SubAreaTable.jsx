import ServerStatus from '../../../components/ui/ServerStatus';

const SubAreaTable = ({
    subAreasFiltradas,
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

    const manejarEditar = (subArea) => {

        console.log('Editar subárea:', subArea)

        if (typeof onEditar === 'function') {
            onEditar(subArea)
        }
    }

    const manejarEstado = async (subArea) => {

        const accion =
            subArea.estado === 'ACTIVO'
                ? 'desactivar'
                : 'activar'

        const confirmado = window.confirm(
            `¿Está seguro de ${accion} la subárea "${subArea.nombre}"?`
        )

        if (!confirmado) {
            return
        }

        console.log(
            'Cambiar estado subárea:',
            subArea.id
        )

        if (typeof onCambiarEstado === 'function') {
            await onCambiarEstado(subArea)
        }
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

                        Lista de áreas
                    </h6>

                     <ServerStatus />

                </div>

            </header>

            <div className="w3-responsive w3-margin-bottom">

                <table className="w3-table-all w3-small">

                    <thead>

                        <tr>
                            <th>SubÁrea</th>
                            <th>Área</th>
                            <th>Descripción</th>
                            <th>Estado</th>
                            <th>Fecha de creación</th>
                            <th>Actualización</th>
                            <th>Acciones</th>
                        </tr>

                    </thead>

                    <tbody>

                        {loading && (
                            <tr>
                                <td
                                    colSpan="7"
                                    className="w3-center"
                                >
                                    Cargando subáreas...
                                </td>
                            </tr>
                        )}

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

                        {!loading &&
                            !error &&
                            subAreasFiltradas.length === 0 && (
                                <tr>
                                    <td
                                        colSpan="7"
                                        className="w3-center"
                                    >
                                        No se encontraron subáreas.
                                    </td>
                                </tr>
                            )}

                        {!loading &&
                            !error &&
                            subAreasFiltradas.map((subArea) => (

                                <tr
                                    key={subArea.id}
                                    className="w3-hover-pale-green"
                                >

                                    <td>
                                        {subArea.nombre}
                                    </td>

                                    <td>
                                        {subArea.areaNombre}
                                    </td>

                                    <td>
                                        {subArea.descripcion || '-'}
                                    </td>

                                    <td>

                                        <span
                                            className={
                                                subArea.estado === 'ACTIVO'
                                                    ? 'w3-tag w3-green w3-round'
                                                    : 'w3-tag w3-red w3-round'
                                            }
                                        >
                                            {subArea.estado}
                                        </span>

                                    </td>

                                    <td>
                                        {formatearFecha(
                                            subArea.fechaRegistro
                                        )}
                                    </td>

                                    <td>
                                        {formatearFecha(
                                            subArea.fechaActualizacion
                                        )}
                                    </td>

                                    <td>

                                        <button
                                            type="button"
                                            className="w3-button w3-tiny w3-round w3-border w3-light-grey w3-margin-right"
                                            title="Editar"
                                            onClick={() =>
                                                manejarEditar(subArea)
                                            }
                                        >

                                            <i className="fa fa-pencil"></i>

                                        </button>

                                        <button
                                            type="button"
                                            className="w3-button w3-tiny w3-round w3-border w3-light-grey"
                                            title={
                                                subArea.estado === 'ACTIVO'
                                                    ? 'Desactivar'
                                                    : 'Activar'
                                            }
                                            onClick={() =>
                                                manejarEstado(subArea)
                                            }
                                            disabled={cambiandoEstado}
                                        >

                                            <i
                                                className={
                                                    subArea.estado === 'ACTIVO'
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

export default SubAreaTable