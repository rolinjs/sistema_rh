function AsignacionFamiliar({

    hijos,
    setHijos,

    asignacionFamiliar,
    setAsignacionFamiliar,

    fechaAsignacion,
    setFechaAsignacion,

    montoAsignacion,
    setMontoAsignacion

}) {

    const estiloLabel = {
        fontSize: '12px',
        fontWeight: 600,
        color: '#5a5a5a'
    }

    return (

        <>

            <hr />

            <h4 className="w3-text-dark-grey">

                <i className="fa fa-users"></i>
                &nbsp;
                Asignación familiar

            </h4>


            <div className="w3-row-padding">

                {/* HIJOS */}

                <div className="w3-col l3 m6 s12">

                    <label style={estiloLabel}>
                        Número de hijos
                    </label>

                    <input
                        className="w3-input w3-border w3-round-small"
                        type="number"
                        min="0"
                        value={hijos}
                        onChange={(event) =>
                            setHijos(
                                event.target.value
                            )
                        }
                    />

                </div>


                {/* ASIGNACIÓN */}

                <div className="w3-col l3 m6 s12">

                    <label style={estiloLabel}>
                        Asignación familiar
                    </label>

                    <select
                        className="w3-select w3-border w3-round-small"
                        value={asignacionFamiliar}
                        onChange={(event) =>
                            setAsignacionFamiliar(
                                event.target.value
                            )
                        }
                    >

                        <option value="">
                            Seleccione
                        </option>

                        <option value="SI">
                            Sí
                        </option>

                        <option value="NO">
                            No
                        </option>

                    </select>

                </div>


                {/* FECHA */}

                <div className="w3-col l3 m6 s12">

                    <label style={estiloLabel}>
                        Fecha de asignación
                    </label>

                    <input
                        className="w3-input w3-border w3-round-small"
                        type="date"
                        value={fechaAsignacion}
                        onChange={(event) =>
                            setFechaAsignacion(
                                event.target.value
                            )
                        }
                    />

                </div>


                {/* MONTO */}

                <div className="w3-col l3 m6 s12">

                    <label style={estiloLabel}>
                        Monto
                    </label>

                    <input
                        className="w3-input w3-border w3-round-small"
                        type="number"
                        step="0.01"
                        value={montoAsignacion}
                        onChange={(event) =>
                            setMontoAsignacion(
                                event.target.value
                            )
                        }
                    />

                </div>

            </div>

        </>
    )
}

export default AsignacionFamiliar