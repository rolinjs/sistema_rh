function CargoEspecificoTable({

    cargosEspecificosFiltrados,

    loading,

    error

}) {

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

            <table className="w3-table-all">

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

                        <th>
                            Fecha de creación
                        </th>

                        <th>
                            Actualización
                        </th>

                        <th
                            style={{
                                textAlign: 'center'
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
                                style={{
                                    padding: '30px'
                                }}
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

                    {!loading && error && (

                        <tr>

                            <td
                                colSpan="6"
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
                                    style={{
                                        padding: '30px'
                                    }}
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
                                            fontWeight: 600
                                        }}
                                    >

                                        {
                                            cargoEspecifico.nombre
                                        }

                                    </td>


                                    <td>

                                        {
                                            cargoEspecifico.cargoNombre
                                            || '-'
                                        }

                                    </td>


                                    <td>

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


                                    <td>

                                        {
                                            cargoEspecifico.fechaRegistro
                                            || '—'
                                        }

                                    </td>


                                    <td>

                                        {
                                            cargoEspecifico.fechaActualizacion
                                            || '—'
                                        }

                                    </td>


                                    <td>

                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                gap: '5px'
                                            }}
                                        >

                                            <button
                                                className="w3-button w3-light-grey w3-border w3-round-small"
                                                title="Editar"
                                            >

                                                <i className="fa fa-pencil"></i>

                                            </button>


                                            <button
                                                className="w3-button w3-light-grey w3-border w3-round-small"
                                                title="Activar / desactivar"
                                            >

                                                <i className="fa fa-ban"></i>

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            )
                        )}

                </tbody>

            </table>

        </div>

    )

}


export default CargoEspecificoTable