function AreaForm({
    modoEdicion,
    nombre,
    descripcion,
    setNombre,
    setDescripcion,
    guardarArea,
    cancelarEdicion,
    importarExcel
}) {

    return (
        <div className="w3-card w3-white w3-margin-bottom">

            <header className="w3-container w3-light-grey">

                <h5 className="w3-margin">

                    <i
                        className={`fa ${
                            modoEdicion
                                ? 'fa-pencil'
                                : 'fa-plus-circle'
                        }`}
                    ></i>

                    &nbsp;

                    {modoEdicion
                        ? 'Editar área'
                        : 'Registrar área'
                    }

                </h5>

            </header>


            <form
                className="w3-container w3-padding-16 w3-small"
                onSubmit={guardarArea}
            >

                <div className="w3-row-padding">

                    {/* NOMBRE */}

                    <div className="w3-col l4 m5 s12">

                        <label>
                            Nombre
                        </label>

                        <input
                            className="w3-input w3-border"
                            type="text"
                            value={nombre}
                            onChange={(event) =>
                                setNombre(event.target.value)
                            }
                            placeholder="Ej. Producción"
                            required
                        />

                    </div>


                    {/* DESCRIPCIÓN */}

                    <div className="w3-col l5 m7 s12">

                        <label>
                            Descripción
                        </label>

                        <input
                            className="w3-input w3-border"
                            type="text"
                            value={descripcion}
                            onChange={(event) =>
                                setDescripcion(event.target.value)
                            }
                            placeholder="Descripción del área"
                            required
                        />

                    </div>


                    {/* ACCIONES */}

                    <div className="w3-col l3 m12 s12">

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                marginTop: '22px',
                                flexWrap: 'wrap'
                            }}
                        >

                            <button
                                type="submit"
                                className="w3-button w3-flat-midnight-blue"
                            >

                                <i className="fa fa-save"></i>

                                &nbsp;

                                {modoEdicion
                                    ? 'Actualizar'
                                    : 'Guardar'
                                }

                            </button>


                            <label
                                htmlFor="archivoExcelArea"
                                className="w3-button w3-light-grey"
                                style={{
                                    cursor: 'pointer'
                                }}
                            >

                                <i className="fa fa-file-excel-o"></i>

                                &nbsp;

                                Importar

                            </label>


                            <input
                                id="archivoExcelArea"
                                type="file"
                                accept=".xlsx,.xls"
                                style={{
                                    display: 'none'
                                }}
                                onChange={importarExcel}
                            />

                        </div>

                    </div>

                </div>


                {/* CANCELAR */}

                {modoEdicion && (

                    <div className="w3-margin-top">

                        <button
                            type="button"
                            className="w3-button w3-light-grey"
                            onClick={cancelarEdicion}
                        >

                            <i className="fa fa-times"></i>

                            &nbsp;

                            Cancelar

                        </button>

                    </div>

                )}

            </form>

        </div>
    )
}

export default AreaForm