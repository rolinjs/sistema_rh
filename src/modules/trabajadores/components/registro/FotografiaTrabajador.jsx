function FotografiaTrabajador({

    foto,
    setFoto,

    camaraActiva,

    videoRef,
    canvasRef,

    abrirCamara,
    cerrarCamara,
    capturarFoto,
    tomarOtraFoto

}) {

    return (

        <div className="w3-margin-top">

            <h5
                className="w3-text-dark-grey"
                style={{
                    marginBottom: '4px'
                }}
            >
                <i className="fa fa-camera"></i>
                &nbsp;
                Fotografía del trabajador
            </h5>

            <hr
                style={{
                    margin: '4px 0 14px 0'
                }}
            />


            <div
                className="w3-card w3-round-small"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                    padding: '16px',
                    alignItems: 'flex-start'
                }}
            >

                {/* =================================================
                    IZQUIERDA
                ================================================= */}

                <div
                    className="w3-border"
                    style={{
                        width: '220px',
                        height: '220px',
                        overflow: 'hidden',
                        backgroundColor: '#f5f5f5',
                        position: 'relative',
                        flexShrink: 0,
                        borderRadius: '6px'
                    }}
                >

                    {/* VIDEO */}

                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        style={{
                            display:
                                camaraActiva
                                    ? 'block'
                                    : 'none',

                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />


                    {/* FOTO */}

                    {!camaraActiva && foto && (

                        <img
                            src={foto}
                            alt="Fotografía del trabajador"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />

                    )}


                    {/* SIN FOTO */}

                    {!camaraActiva && !foto && (

                        <div
                            className="w3-center w3-text-grey"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform:
                                    'translate(-50%, -50%)',
                                width: '100%'
                            }}
                        >

                            <i
                                className="fa fa-user-circle"
                                style={{
                                    fontSize: '60px'
                                }}
                            ></i>

                            <p
                                style={{
                                    margin: '6px 0 0 0',
                                    fontSize: '12px'
                                }}
                            >
                                Sin fotografía
                            </p>

                        </div>

                    )}


                    <canvas
                        ref={canvasRef}
                        style={{
                            display: 'none'
                        }}
                    />

                </div>


                {/* =================================================
                    DERECHA
                ================================================= */}

                <div
                    style={{
                        flex: '1',
                        minWidth: '240px'
                    }}
                >

                    <div
                        className="w3-panel w3-pale-blue w3-leftbar w3-border-blue"
                        style={{
                            margin: 0,
                            padding: '10px 14px',
                            fontSize: '12px'
                        }}
                    >

                        <p
                            style={{
                                margin: '0 0 6px 0',
                                fontWeight: 600
                            }}
                        >

                            <i className="fa fa-info-circle"></i>
                            &nbsp;
                            Indicaciones

                        </p>

                        <ul
                            style={{
                                margin: 0,
                                paddingLeft: '18px'
                            }}
                        >

                            <li>
                                Tome una foto clara del rostro.
                            </li>

                            <li>
                                Fondo neutro y buena iluminación.
                            </li>

                            <li>
                                La fotografía será utilizada para el control de asistencia.
                            </li>

                        </ul>

                    </div>


                    {/* BOTONES */}

                    <div
                        className="w3-margin-top"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '8px'
                        }}
                    >

                        {!camaraActiva && (

                            <button
                                type="button"
                                className="w3-button w3-flat-midnight-blue w3-round-small w3-small"
                                onClick={
                                    foto
                                        ? tomarOtraFoto
                                        : abrirCamara
                                }
                            >

                                <i className="fa fa-camera"></i>
                                &nbsp;

                                {
                                    foto
                                        ? 'Tomar otra foto'
                                        : 'Tomar foto'
                                }

                            </button>

                        )}


                        {camaraActiva && (

                            <>

                                <button
                                    type="button"
                                    className="w3-button w3-flat-midnight-blue w3-round-small w3-small"
                                    onClick={capturarFoto}
                                >

                                    <i className="fa fa-camera"></i>
                                    &nbsp;
                                    Capturar

                                </button>


                                <button
                                    type="button"
                                    className="w3-button w3-light-grey w3-round-small w3-small"
                                    onClick={cerrarCamara}
                                >

                                    <i className="fa fa-times"></i>
                                    &nbsp;
                                    Cancelar

                                </button>

                            </>

                        )}


                        {/* SUBIR FOTO */}

                        <button
                            type="button"
                            className="w3-button w3-light-grey w3-round-small w3-small"
                            title="Funcionalidad de carga de archivo no implementada"
                        >

                            <i className="fa fa-upload"></i>
                            &nbsp;
                            Subir foto

                        </button>


                        {/* ELIMINAR */}

                        {foto && !camaraActiva && (

                            <button
                                type="button"
                                className="w3-button w3-red w3-round-small w3-small"
                                onClick={() =>
                                    setFoto(null)
                                }
                            >

                                <i className="fa fa-trash"></i>
                                &nbsp;
                                Eliminar

                            </button>

                        )}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default FotografiaTrabajador