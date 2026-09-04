function CargoEspecificoTable({

    cargosEspecificosFiltrados,

    loading,

    error,

    onEditar,

    onCambiarEstado,

    cambiandoEstado

}) {

    const formatearFecha = (fecha) => {

        if (!fecha) {

            return '—'

        }


        const fechaFormateada =
            new Date(fecha)


        if (
            Number.isNaN(
                fechaFormateada.getTime()
            )
        ) {

            return '—'

        }


        return fechaFormateada.toLocaleString(
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


    const manejarEditar = (
        cargoEspecifico
    ) => {

        console.log(
            'Editar cargo específico:',
            cargoEspecifico
        )


        if (
            typeof onEditar === 'function'
        ) {

            onEditar(
                cargoEspecifico
            )

        }

    }


    const manejarEstado = async (
        cargoEspecifico
    ) => {

        const accion =
            cargoEspecifico.estado === 'ACTIVO'
                ? 'desactivar'
                : 'activar'


        const confirmado =
            window.confirm(
                `¿Está seguro de ${accion} el cargo específico "${cargoEspecifico.nombre}"?`
            )


        if (!confirmado) {

            return

        }


        console.log(
            'Cambiar estado cargo específico:',
            cargoEspecifico.id
        )


        if (
            typeof onCambiarEstado === 'function'
        ) {

            await onCambiarEstado(
                cargoEspecifico
            )

        }

    }


    return (

        <div className="w3-card w3-white w3-small">


            {/* =================================================
                CABECERA DE TABLA
            ================================================= */}

            <header className="w3-container w3-light-grey">

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >

                    <h5 className="w3-margin">

                        <i className="fa fa-list"></i>

                        &nbsp;

                        Lista de cargos específicos

                    </h5>


                    <span>

                        <i
                            className="fa fa-circle"
                            style={{
                                color: '#4caf50',
                                fontSize: '11px'
                            }}
                        ></i>

                        &nbsp;

                        Servidor activo

                    </span>

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
                                Cargo específico
                            </th>

                            <th>
                                Cargo
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
                                    textAlign: 'center',
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
                                    colSpan="6"
                                    className="w3-center w3-text-grey"
                                >

                                    <i className="fa fa-spinner fa-spin"></i>

                                    &nbsp;

                                    Cargando cargos específicos...

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
                                        colSpan="6"
                                        className="w3-center w3-pale-red"
                                    >

                                        <i className="fa fa-warning"></i>

                                        &nbsp;

                                        {error}

                                    </td>

                                </tr>

                            )}


                        {/* =================================================
                            SIN RESULTADOS
                        ================================================= */}

                        {!loading &&
                            !error &&
                            cargosEspecificosFiltrados.length === 0 && (

                                <tr>

                                    <td
                                        colSpan="6"
                                        className="w3-center w3-text-grey"
                                    >

                                        <i className="fa fa-info-circle"></i>

                                        &nbsp;

                                        No se encontraron cargos específicos.

                                    </td>

                                </tr>

                            )}


                        {/* =================================================
                            DATOS
                        ================================================= */}

                        {!loading &&
                            !error &&
                            cargosEspecificosFiltrados.map(
                                cargoEspecifico => (

                                    <tr
                                        key={
                                            cargoEspecifico.id
                                        }
                                        className="w3-hover-pale-green"
                                    >

                                        <td
                                            style={{
                                                fontWeight: 600,
                                                paddingTop: '6px',
                                                paddingBottom: '6px'
                                            }}
                                        >

                                            {
                                                cargoEspecifico.nombre
                                            }

                                        </td>


                                        <td
                                            style={{
                                                paddingTop: '6px',
                                                paddingBottom: '6px'
                                            }}
                                        >

                                            {
                                                cargoEspecifico.cargoNombre
                                                || '-'
                                            }

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
                                                    cargoEspecifico.estado === 'ACTIVO'
                                                        ? 'w3-tag w3-green'
                                                        : 'w3-tag w3-red'
                                                }
                                                style={{
                                                    fontSize: '10px'
                                                }}
                                            >

                                                {
                                                    cargoEspecifico.estado
                                                }

                                            </span>

                                        </td>


                                        <td
                                            style={{
                                                paddingTop: '6px',
                                                paddingBottom: '6px',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >

                                            {
                                                formatearFecha(
                                                    cargoEspecifico.fechaRegistro
                                                )
                                            }

                                        </td>


                                        <td
                                            style={{
                                                paddingTop: '6px',
                                                paddingBottom: '6px',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >

                                            {
                                                formatearFecha(
                                                    cargoEspecifico.fechaActualizacion
                                                )
                                            }

                                        </td>


                                        <td
                                            style={{
                                                paddingTop: '6px',
                                                paddingBottom: '6px',
                                                textAlign: 'center',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >

                                            <button
                                                type="button"
                                                className="w3-button w3-light-grey w3-border w3-round-small"
                                                title="Editar"
                                                onClick={() =>
                                                    manejarEditar(
                                                        cargoEspecifico
                                                    )
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
                                                className="w3-button w3-light-grey w3-border w3-round-small"
                                                title={
                                                    cargoEspecifico.estado === 'ACTIVO'
                                                        ? 'Desactivar'
                                                        : 'Activar'
                                                }
                                                onClick={() =>
                                                    manejarEstado(
                                                        cargoEspecifico
                                                    )
                                                }
                                                disabled={
                                                    cambiandoEstado
                                                }
                                                style={{
                                                    display: 'inline-block',
                                                    verticalAlign: 'middle',
                                                    marginLeft: '5px'
                                                }}
                                            >

                                                <i
                                                    className={
                                                        cargoEspecifico.estado === 'ACTIVO'
                                                            ? 'fa fa-ban'
                                                            : 'fa fa-check'
                                                    }
                                                ></i>

                                            </button>

                                        </td>

                                    </tr>

                                )
                            )}

                    </tbody>

                </table>

            </div>

        </div>

    )

}


export default CargoEspecificoTable