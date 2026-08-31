import ServerStatus from '../../../components/ui/ServerStatus';
function AreaTable({
    areasFiltradas,
    editarArea,
    cambiarEstado,
    servidorOnline
}) {

    return (
        <div className="w3-card w3-white w3-small">

            {/* CABECERA */}

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


            {/* TABLA */}

            <div className="w3-responsive w3-margin-bottom">

                <table className="w3-table-all">

                    <thead>

                        <tr>

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

                        {servidorOnline ? (

                            areasFiltradas.map(area => (

                                <tr key={area.id} className='w3-hover-pale-green'>

                                    <td>
                                        {area.nombre}
                                    </td>

                                    <td>
                                        {area.descripcion}
                                    </td>

                                    <td>

                                        {area.estado === 'ACTIVO' ? (

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
                                        {new Date(area.fechaRegistro).toLocaleString(
                                            'es-PE',
                                            {
                                                day: '2-digit',
                                                month: '2-digit',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            }
                                        )}
                                    </td>

                                    <td className="w3-center">

                                        <button
                                            type="button"
                                            className="w3-button w3-tiny w3-round w3-border w3-light-grey w3-margin-right"
                                            title="Editar"
                                            onClick={() => editarArea(area)}
                                        >
                                            <i className="fa fa-pencil"></i>
                                        </button>


                                        <button
                                            type="button"
                                            className="w3-button w3-tiny w3-round w3-border w3-light-grey"
                                            title={
                                                area.estado === 'ACTIVO'
                                                    ? 'Desactivar área'
                                                    : 'Activar área'
                                            }
                                            onClick={() => cambiarEstado(area.id)}
                                        >
                                            <i
                                                className={
                                                    area.estado === 'ACTIVO'
                                                        ? 'fa fa-ban'
                                                        : 'fa fa-check-circle'
                                                }
                                            ></i>
                                        </button>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr className='w3-pale-red'>

                                <td
                                    colSpan="5"
                                    className="w3-center"
                                    style={{
                                        padding: '30px'
                                    }}
                                >

                                    <i className="fa fa-warning"></i>

                                    &nbsp;

                                    Servidor desconectado.
                                    Esperando conexión...

                                </td>

                            </tr>

                        )}


                        {servidorOnline && areasFiltradas.length === 0 && (

                            <tr>

                                <td
                                    colSpan="5"
                                    className="w3-center w3-text-grey"
                                >
                                    No se encontraron áreas.
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default AreaTable