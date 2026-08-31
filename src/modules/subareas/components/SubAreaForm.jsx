function SubAreaForm({
    nombre,
    setNombre,
    areaId,
    setAreaId,
    descripcion,
    setDescripcion,
    areas
}) {

    return (

        <div className="w3-card w3-white">

            {/* =================================================
                CABECERA
            ================================================= */}

            <header className="w3-container w3-light-grey">

                <h4>

                    <i className="fa fa-plus-circle"></i>

                    &nbsp;

                    Registrar subárea

                </h4>

            </header>


            {/* =================================================
                FORMULARIO
            ================================================= */}

            <div className="w3-container w3-small">

                <div className="w3-row-padding">

                    {/* =================================================
                        NOMBRE
                    ================================================= */}

                    <div className="w3-col l4 m4 s12">

                        <label
                            className="w3-text-grey"
                            style={{
                                fontSize: '12px',
                                fontWeight: 600
                            }}
                        >
                            Nombre
                        </label>


                        <input
                            className="w3-input w3-border"
                            type="text"
                            placeholder="Ej. Recepción"
                            value={nombre}
                            onChange={(event) =>
                                setNombre(
                                    event.target.value
                                )
                            }
                        />

                    </div>


                    {/* =================================================
                        ÁREA
                    ================================================= */}

                    <div className="w3-col l4 m4 s12">

                        <label
                            className="w3-text-grey"
                            style={{
                                fontSize: '12px',
                                fontWeight: 600
                            }}
                        >
                            Área
                        </label>


                        <select
                            className="w3-select w3-border"
                            value={areaId}
                            onChange={(event) =>
                                setAreaId(
                                    event.target.value
                                )
                            }
                        >

                            <option value="">
                                Seleccione
                            </option>


                            {areas.map(area => (

                                <option
                                    key={area.id}
                                    value={area.id}
                                >
                                    {area.nombre}
                                </option>

                            ))}

                        </select>

                    </div>


                    {/* =================================================
                        DESCRIPCIÓN
                    ================================================= */}

                    <div className="w3-col l4 m4 s12">

                        <label
                            className="w3-text-grey"
                            style={{
                                fontSize: '12px',
                                fontWeight: 600
                            }}
                        >
                            Descripción
                        </label>


                        <input
                            className="w3-input w3-border"
                            type="text"
                            placeholder="Descripción de la subárea"
                            value={descripcion}
                            onChange={(event) =>
                                setDescripcion(
                                    event.target.value
                                )
                            }
                        />

                    </div>

                </div>


                {/* =================================================
                    BOTONES
                ================================================= */}

                <div
                    className="w3-row-padding w3-margin-bottom"
                    style={{
                        marginTop: '15px'
                    }}
                >

                    <div className="w3-col s12">

                        <button
                            type="button"
                            className="w3-button"
                            style={{
                                backgroundColor: '#2c4056',
                                color: '#ffffff'
                            }}
                        >

                            <i className="fa fa-save"></i>

                            &nbsp;

                            Guardar

                        </button>


                        <button
                            type="button"
                            className="w3-button w3-light-grey w3-margin-left"
                        >

                            <i className="fa fa-file-excel-o"></i>

                            &nbsp;

                            Importar

                        </button>

                    </div>

                </div>

            </div>

        </div>

    )
}


export default SubAreaForm