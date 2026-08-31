function CargoForm({

    nombre,
    setNombre,

    subAreaId,
    setSubAreaId,

    descripcion,
    setDescripcion,

    subAreas

}) {

    const guardarCargo = (event) => {

        event.preventDefault()

        console.log(
            'DATOS DEL CARGO:',
            {
                nombre,
                subAreaId,
                descripcion
            }
        )

    }


    const importarArchivo = (event) => {

        const archivo =
            event.target.files[0]


        if (!archivo) {

            return

        }


        console.log(
            'ARCHIVO:',
            archivo.name
        )

    }


    return (

        <div className="w3-card w3-white">

             <header className="w3-container w3-light-grey">

                <h4>

                    <i className="fa fa-plus-circle"></i>

                    &nbsp;

                   Registrar cargo

                </h4>

            </header>


            <form
                className="w3-container w3-small"
                onSubmit={guardarCargo}
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
                            className="w3-input w3-border"
                            type="text"
                            placeholder="Ej. Supervisor"
                            value={nombre}
                            onChange={(event) =>
                                setNombre(
                                    event.target.value
                                )
                            }
                        />

                    </div>


                    {/* =================================================
                        SUBÁREA
                    ================================================= */}

                    <div className="w3-col l4 m6 s12">

                        <label
                            className="w3-text-grey"
                            style={{
                                fontSize: '12px',
                                fontWeight: 600
                            }}
                        >

                            Sub Área

                        </label>


                        <select
                            className="w3-select w3-border"
                            value={subAreaId}
                            onChange={(event) =>
                                setSubAreaId(
                                    event.target.value
                                )
                            }
                        >

                            <option value="">

                                Seleccione

                            </option>


                            {subAreas.map(
                                subArea => (

                                    <option
                                        key={subArea.id}
                                        value={subArea.id}
                                    >

                                        {subArea.nombre}

                                    </option>

                                )
                            )}

                        </select>

                    </div>


                    {/* =================================================
                        DESCRIPCIÓN
                    ================================================= */}

                    <div className="w3-col l4 m6 s12">

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
                            placeholder="Descripción del cargo"
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

                    <div className="w3-col l12 m12 s12">

                        <button
                            type="submit"
                            className="w3-button w3-small"
                            style={{
                                backgroundColor: '#2c4053',
                                color: '#fff',
                                marginRight: '8px'
                            }}
                        >

                            <i className="fa fa-save"></i>

                            &nbsp;

                            Guardar

                        </button>


                        <label
                            htmlFor="importarCargo"
                            className="w3-button w3-light-grey w3-small"
                            style={{
                                cursor: 'pointer'
                            }}
                        >

                            <i className="fa fa-file-excel-o"></i>

                            &nbsp;

                            Importar

                        </label>


                        <input
                            id="importarCargo"
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


export default CargoForm