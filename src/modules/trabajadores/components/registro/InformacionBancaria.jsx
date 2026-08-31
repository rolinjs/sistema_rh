import SelectCampo from './SelectCampo'

function InformacionBancaria({

    banco,
    setBanco,

    tipoCuenta,
    setTipoCuenta,

    cuentaCci,
    setCuentaCci,

    bancos,
    tiposCuenta

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

                <i className="fa fa-university"></i>
                &nbsp;
                Información bancaria

            </h4>


            <div className="w3-row-padding">

                <div className="w3-col l4 m6 s12">

                    <SelectCampo
                        label="Banco"
                        value={banco}
                        onChange={(event) =>
                            setBanco(
                                event.target.value
                            )
                        }
                        opciones={bancos}
                    />

                </div>


                <div className="w3-col l4 m6 s12">

                    <SelectCampo
                        label="Tipo de cuenta"
                        value={tipoCuenta}
                        onChange={(event) =>
                            setTipoCuenta(
                                event.target.value
                            )
                        }
                        opciones={tiposCuenta}
                    />

                </div>


                <div className="w3-col l4 m6 s12">

                    <label style={estiloLabel}>
                        Número de cuenta / CCI
                    </label>

                    <input
                        className="w3-input w3-border w3-round-small"
                        type="text"
                        value={cuentaCci}
                        onChange={(event) =>
                            setCuentaCci(
                                event.target.value
                            )
                        }
                    />

                </div>

            </div>

        </>
    )
}

export default InformacionBancaria