import ServerStatus from '../../../components/ui/ServerStatus'


function SubAreaTable({
    subAreasFiltradas,
    loading,
    error
}) {

    // =====================================================
    // FORMATEAR FECHA
    // =====================================================

    const formatearFecha = (fecha) => {

        if (!fecha) {

            return '—'

        }


        return new Date(fecha).toLocaleString(
            'es-PE',
            {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }
        )

    }


    return (

        <div className="w3-card w3-white w3-small">

            {/* =================================================
                CABECERA
            ================================================= */}

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

                        Lista de subáreas

                    </h6>


                    <ServerStatus />

                </div>

            </header>


            {/* =================================================
                TABLA
            ================================================= */}

            <div className="w3-responsive w3-margin-bottom">

                <table className="w3-table-all w3-small">

                    <thead>

                        <tr>

                            <th>
                                SubÁrea
                            </th>

                            <th>
                                Área
                            </th>

                            <th>
                                Descripción
                            </th>

                            <th>
                                Estado
                            </th>

                            <th>
                                Fecha de creación
                            </th>

                            <th>
                                Actualización
                            </th>

                            <th
                                className="w3-center"
                                style={{
                                    width: '120px'
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
                                    colSpan="7"
                                    className="w3-center w3-text-grey"
                                    style={{
                                        padding: '30px'
                                    }}
                                >

                                    <i className="fa fa-spinner fa-spin"></i>

                                    &nbsp;

                                    Cargando subáreas...

                                </td>

                            </tr>

                        ) : error ? (

                            <tr>

                                <td
                                    colSpan="7"
                                    className="w3-center w3-pale-red"
                                    style={{
                                        padding: '30px'
                                    }}
                                >

                                    <i className="fa fa-warning"></i>

                                    &nbsp;

                                    {error}

                                </td>

                            </tr>

                        ) : subAreasFiltradas.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="7"
                                    className="w3-center w3-text-grey"
                                    style={{
                                        padding: '30px'
                                    }}
                                >

                                    No se encontraron subáreas.

                                </td>

                            </tr>

                        ) : (

                            subAreasFiltradas.map(
                                subArea => (

                                    <tr
                                        key={subArea.id}
                                        className="w3-hover-pale-green"
                                    >

                                        <td
                                            style={{
                                                fontWeight: 600
                                            }}
                                        >

                                            {subArea.nombre}

                                        </td>


                                        <td>

                                            {subArea.areaNombre || '—'}

                                        </td>


                                        <td>

                                            {subArea.descripcion || '—'}

                                        </td>


                                        <td>

                                            {subArea.estado === 'ACTIVO' ? (

                                                <span className="w3-tag w3-green">

                                                    Activo

                                                </span>

                                            ) : (

                                                <span className="w3-tag w3-red">

                                                    Inactivo

                                                </span>

                                            )}

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


                                        <td className="w3-center">

                                            <button
                                                type="button"
                                                className="w3-button w3-tiny w3-round w3-border w3-light-grey w3-margin-right"
                                                title="Editar"
                                            >

                                                <i className="fa fa-pencil"></i>

                                            </button>


                                            <button
                                                type="button"
                                                className="w3-button w3-tiny w3-round w3-border w3-light-grey"
                                                title="Activar / desactivar"
                                            >

                                                <i className="fa fa-ban"></i>

                                            </button>

                                        </td>

                                    </tr>

                                )
                            )

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    )
}


export default SubAreaTable