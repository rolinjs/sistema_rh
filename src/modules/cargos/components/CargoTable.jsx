function CargoTable({

    cargosFiltrados,
    loading,
    error

}) {

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


    const obtenerEstado = (estado) => {

        if (estado === 'ACTIVO') {

            return (

                <span className="w3-tag w3-green">

                    Activo

                </span>

            )

        }


        return (

            <span className="w3-tag w3-red">

                Inactivo

            </span>

        )

    }


    return (

        <div className="w3-card w3-white w3-small">

            <header className="w3-container w3-light-grey">

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >

                    <h6 className="w3-margin">

                        <i className="fa fa-list"></i>

                        &nbsp;

                        Lista de cargos

                    </h6>


                    <span
                        className="w3-text-grey"
                        style={{
                            fontSize: '12px'
                        }}
                    >

                        Total: {cargosFiltrados.length}

                    </span>

                </div>

            </header>


            <div className="w3-responsive">

                <table className="w3-table-all">

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

                            <th>
                                Fecha de creación
                            </th>

                            <th>
                                Actualización
                            </th>

                            <th className="w3-center">

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
                                    className="w3-center w3-text-grey"
                                    style={{
                                        padding: '30px'
                                    }}
                                >

                                    <i className="fa fa-spinner fa-spin"></i>

                                    &nbsp;

                                    Cargando cargos...

                                </td>

                            </tr>

                        )}


                        {/* =================================================
                            ERROR
                        ================================================= */}

                        {!loading &&
                            error && (

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

                            )
                        }


                        {/* =================================================
                            DATOS
                        ================================================= */}

                        {!loading &&
                            !error &&
                            cargosFiltrados.map(
                                cargo => (

                                    <tr
                                        key={cargo.id}
                                        className="w3-hover-pale-green"
                                    >

                                        <td
                                            style={{
                                                fontWeight: 600
                                            }}
                                        >

                                            {cargo.nombre}

                                        </td>


                                        <td>

                                            {
                                                cargo.SubAreaNombre
                                                || '—'
                                            }

                                        </td>


                                        <td>

                                            {
                                                cargo.descripcion
                                                || '—'
                                            }

                                        </td>


                                        <td>

                                            {obtenerEstado(
                                                cargo.estado
                                            )}

                                        </td>


                                        <td>

                                            {formatearFecha(
                                                cargo.fechaRegistro
                                            )}

                                        </td>


                                        <td>

                                            {formatearFecha(
                                                cargo.fechaActualizacion
                                            )}

                                        </td>


                                        <td className="w3-center">

                                            <button
                                                type="button"
                                                className="w3-button w3-tiny w3-round w3-border w3-light-grey w3-margin-right"
                                                title="Editar cargo"
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
                        }


                        {/* =================================================
                            SIN RESULTADOS
                        ================================================= */}

                        {!loading &&
                            !error &&
                            cargosFiltrados.length === 0 && (

                                <tr>

                                    <td
                                        colSpan="7"
                                        className="w3-center w3-text-grey"
                                        style={{
                                            padding: '30px'
                                        }}
                                    >

                                        <i className="fa fa-search"></i>

                                        &nbsp;

                                        No se encontraron cargos.

                                    </td>

                                </tr>

                            )
                        }

                    </tbody>

                </table>

            </div>

        </div>

    )

}


export default CargoTable