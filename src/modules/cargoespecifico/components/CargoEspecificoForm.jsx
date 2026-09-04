function CargoEspecificoForm({

    nombre,
    setNombre,

    cargoId,
    setCargoId,

    cargos,

    guardarCargoEspecifico,

    importarArchivo,

    guardando,

    editando,

    onCancelar

}) {

    return (

        <div className="w3-card w3-white w3-margin-bottom">


            {/* =================================================
                CABECERA
            ================================================= */}

            <header className="w3-container w3-light-grey">

                <h6 className="w3-margin">

                    <i
                        className={
                            editando
                                ? "fa fa-pencil"
                                : "fa fa-plus-circle"
                        }
                    ></i>

                    &nbsp;

                    {editando
                        ? 'Editar cargo específico'
                        : 'Registrar cargo específico'
                    }

                </h6>

            </header>


            {/* =================================================
                FORMULARIO
            ================================================= */}

            <form
                className="w3-container w3-padding-16 w3-small"
                onSubmit={guardarCargoEspecifico}
            >

                <div className="w3-row-padding">


                    {/* =================================================
                        NOMBRE
                    ================================================= */}

                    <div className="w3-col l4 m6 s12">

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
                            className="w3-input w3-border w3-round-small"
                            type="text"
                            value={nombre}
                            onChange={(event) =>
                                setNombre(
                                    event.target.value
                                )
                            }
                            placeholder="Ej. Asistente de calibrado"
                            disabled={guardando}
                        />

                    </div>


                    {/* =================================================
                        CARGO
                    ================================================= */}

                    <div className="w3-col l4 m6 s12">

                        <label
                            className="w3-text-grey"
                            style={{
                                fontSize: '12px',
                                fontWeight: 600
                            }}
                        >

                            Cargo

                        </label>


                        <select
                            className="w3-select w3-border w3-round-small"
                            value={cargoId}
                            onChange={(event) =>
                                setCargoId(
                                    event.target.value
                                )
                            }
                            disabled={guardando}
                        >

                            <option value="">

                                Seleccione

                            </option>


                            {(cargos || []).map(
                                cargo => (

                                    <option
                                        key={cargo.id}
                                        value={cargo.id}
                                    >

                                        {cargo.nombre}

                                    </option>

                                )
                            )}

                        </select>

                    </div>


                    {/* =================================================
                        BOTONES
                    ================================================= */}

                    <div
                        className="w3-col l4 m12 s12"
                        style={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            gap: '8px',
                            paddingTop: '18px'
                        }}
                    >

                        <button
                            type="submit"
                            className="w3-button w3-round-small w3-small"
                            style={{
                                backgroundColor: '#2c4053',
                                color: '#fff'
                            }}
                            disabled={guardando}
                        >

                            <i className="fa fa-save"></i>

                            &nbsp;

                            {guardando
                                ? 'Guardando...'
                                : editando
                                    ? 'Actualizar'
                                    : 'Guardar'
                            }

                        </button>


                        {/* =================================================
                            CANCELAR EDICIÓN
                        ================================================= */}

                        {editando && (

                            <button
                                type="button"
                                className="w3-button w3-light-grey w3-round-small"
                                onClick={onCancelar}
                                disabled={guardando}
                            >

                                <i className="fa fa-times"></i>

                                &nbsp;

                                Cancelar

                            </button>

                        )}


                        {/* =================================================
                            IMPORTAR
                        ================================================= */}

                        <label
                            htmlFor="importarCargoEspecifico"
                            className="w3-button w3-light-grey w3-round-small"
                            style={{
                                cursor: 'pointer'
                            }}
                        >

                            <i className="fa fa-file-excel-o"></i>

                            &nbsp;

                            Importar

                        </label>


                        <input
                            id="importarCargoEspecifico"
                            type="file"
                            accept=".xlsx,.xls"
                            onChange={importarArchivo}
                            style={{
                                display: 'none'
                            }}
                        />

                    </div>

                </div>

            </form>

        </div>

    )

}


export default CargoEspecificoForm