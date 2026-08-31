import SelectCampo from './SelectCampo'

function InformacionPrevisional({

    afpOnp,
    setAfpOnp,

    tipoComision,
    setTipoComision,

    cuspp,
    setCuspp,

    sistemasPrevisionales,
    tiposComision

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

                <i className="fa fa-building"></i>
                &nbsp;
                Información previsional

            </h4>


            <div className="w3-row-padding">

                <div className="w3-col l4 m6 s12">

                    <SelectCampo
                        label="AFP / ONP"
                        value={afpOnp}
                        onChange={(event) =>
                            setAfpOnp(
                                event.target.value
                            )
                        }
                        opciones={sistemasPrevisionales}
                    />

                </div>


                <div className="w3-col l4 m6 s12">

                    <SelectCampo
                        label="Tipo de comisión"
                        value={tipoComision}
                        onChange={(event) =>
                            setTipoComision(
                                event.target.value
                            )
                        }
                        opciones={tiposComision}
                    />

                </div>


                <div className="w3-col l4 m6 s12">

                    <label style={estiloLabel}>
                        CUSPP
                    </label>

                    <input
                        className="w3-input w3-border w3-round-small"
                        type="text"
                        value={cuspp}
                        onChange={(event) =>
                            setCuspp(
                                event.target.value
                            )
                        }
                    />

                </div>

            </div>

        </>
    )
}

export default InformacionPrevisional