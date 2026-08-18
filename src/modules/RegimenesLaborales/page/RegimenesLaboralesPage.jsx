import { useState } from 'react'


function RegimenesLaboralesPage() {

    // =====================================================
    // ESTADOS
    // =====================================================

    const [modoEdicion, setModoEdicion] = useState(false)

    const [codigo, setCodigo] = useState('')
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const [busqueda, setBusqueda] = useState('')


    // =====================================================
    // DATOS TEMPORALES
    // =====================================================

    const [regimenes, setRegimenes] = useState([

        {
            id: 1,
            codigo: 'GENERAL',
            nombre: 'Régimen General',
            descripcion:
                'Régimen laboral general de la actividad privada.',
            estado: true
        },

        {
            id: 2,
            codigo: 'AGRARIO',
            nombre: 'Régimen Laboral Agrario',
            descripcion:
                'Régimen laboral aplicable a trabajadores comprendidos en la actividad agraria.',
            estado: true
        },

        {
            id: 3,
            codigo: 'MYPE_MICRO',
            nombre: 'Régimen MYPE - Microempresa',
            descripcion:
                'Régimen laboral aplicable a trabajadores de microempresas.',
            estado: true
        },

        {
            id: 4,
            codigo: 'MYPE_PEQUENA',
            nombre: 'Régimen MYPE - Pequeña Empresa',
            descripcion:
                'Régimen laboral aplicable a trabajadores de pequeñas empresas.',
            estado: true
        },

        {
            id: 5,
            codigo: 'PART_TIME',
            nombre: 'Trabajadores a Tiempo Parcial',
            descripcion:
                'Régimen aplicable a trabajadores contratados bajo una jornada de tiempo parcial.',
            estado: true
        }

    ])


    // =====================================================
    // FILTRAR
    // =====================================================

    const regimenesFiltrados = regimenes.filter(regimen => {

        const texto = busqueda
            .toLowerCase()
            .trim()

        return (

            regimen.codigo
                .toLowerCase()
                .includes(texto)

            ||

            regimen.nombre
                .toLowerCase()
                .includes(texto)

            ||

            regimen.descripcion
                .toLowerCase()
                .includes(texto)

        )

    })


    // =====================================================
    // GUARDAR
    // =====================================================

    const guardarRegimen = (event) => {

        event.preventDefault()

        if (modoEdicion) {

            console.log('Actualizar régimen')

        } else {

            console.log('Registrar régimen')

        }

    }


    // =====================================================
    // EDITAR
    // =====================================================

    const editarRegimen = (regimen) => {

        setModoEdicion(true)

        setCodigo(regimen.codigo)
        setNombre(regimen.nombre)
        setDescripcion(regimen.descripcion)

    }


    // =====================================================
    // CAMBIAR ESTADO
    // =====================================================

    const cambiarEstado = (id) => {

        setRegimenes(prev =>

            prev.map(regimen =>

                regimen.id === id

                    ? {
                        ...regimen,
                        estado: !regimen.estado
                    }

                    : regimen

            )

        )

    }


    // =====================================================
    // CANCELAR
    // =====================================================

    const cancelarEdicion = () => {

        setModoEdicion(false)

        setCodigo('')
        setNombre('')
        setDescripcion('')

    }


    return (

        <div className="w3-container">


            {/* =================================================
                ENCABEZADO
            ================================================= */}

            <div className="w3-margin-bottom">

                <h4 className="w3-margin-top">

                    <i className="fa fa-legal"></i>

                    &nbsp;

                    Regímenes laborales

                </h4>

                <p className="w3-text-grey">

                    Administración de los regímenes laborales
                    aplicables a los trabajadores.

                </p>

            </div>


            {/* =================================================
                FORMULARIO
            ================================================= */}

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
                            ? 'Editar régimen laboral'
                            : 'Registrar régimen laboral'
                        }

                    </h5>

                </header>


                <form
                    className="w3-container w3-padding-16 w3-small"
                    onSubmit={guardarRegimen}
                >

                    <div className="w3-row-padding">


                        {/* CÓDIGO */}

                        <div className="w3-col l2 m3 s12">

                            <label>
                                Código
                            </label>

                            <input
                                className="w3-input w3-border"
                                type="text"
                                value={codigo}
                                onChange={(event) =>
                                    setCodigo(event.target.value)
                                }
                                placeholder="Ej. GENERAL"
                            />

                        </div>


                        {/* NOMBRE */}

                        <div className="w3-col l3 m4 s12">

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
                                placeholder="Nombre del régimen"
                            />

                        </div>


                        {/* DESCRIPCIÓN */}

                        <div className="w3-col l4 m5 s12">

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
                                placeholder="Descripción del régimen"
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


                                {modoEdicion && (

                                    <button
                                        type="button"
                                        className="w3-button w3-light-grey"
                                        onClick={cancelarEdicion}
                                    >

                                        <i className="fa fa-times"></i>

                                        &nbsp;

                                        Cancelar

                                    </button>

                                )}

                            </div>

                        </div>

                    </div>

                </form>

            </div>


            {/* =================================================
                LISTA
            ================================================= */}

            <div className="w3-card w3-white w3-small">

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

                        <h4 className="w3-margin">

                            Lista de regímenes laborales

                        </h4>


                        {/* BUSCADOR */}

                        <div
                            style={{
                                width: '260px',
                                maxWidth: '100%'
                            }}
                        >

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >

                                <i
                                    className="fa fa-search"
                                    style={{
                                        marginRight: '8px'
                                    }}
                                ></i>

                                <input
                                    className="w3-input w3-border"
                                    type="text"
                                    value={busqueda}
                                    onChange={(event) =>
                                        setBusqueda(event.target.value)
                                    }
                                    placeholder="Buscar..."
                                />

                            </div>

                        </div>

                    </div>

                </header>


                {/* =================================================
    TABLA
================================================= */}

<div className="w3-responsive">

    <table className="w3-table-all">

        <thead>

            <tr>

                <th style={{ width: '130px' }}>
                    Código
                </th>

                <th style={{ width: '260px' }}>
                    Régimen laboral
                </th>

                <th>
                    Descripción
                </th>

                <th
                    className="w3-center"
                    style={{ width: '100px' }}
                >
                    Estado
                </th>

                <th
                    className="w3-center"
                    style={{ width: '130px' }}
                >
                    Acciones
                </th>

            </tr>

        </thead>


        <tbody>

            {regimenesFiltrados.map(regimen => (

                <tr key={regimen.id}>

                    {/* CÓDIGO */}

                    <td>
                        <strong>
                            {regimen.codigo}
                        </strong>
                    </td>


                    {/* NOMBRE */}

                    <td>
                        {regimen.nombre}
                    </td>


                    {/* DESCRIPCIÓN */}

                    <td>

                        <span
                            className="w3-text-grey"
                            style={{
                                display: 'block',
                                maxWidth: '450px',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}
                            title={regimen.descripcion}
                        >
                            {regimen.descripcion}
                        </span>

                    </td>


                    {/* ESTADO */}

                    <td className="w3-center">

                        {regimen.estado ? (

                            <span className="w3-tag w3-green">
                                Activo
                            </span>

                        ) : (

                            <span className="w3-tag w3-grey">
                                Inactivo
                            </span>

                        )}

                    </td>


                    {/* ACCIONES */}

                    <td className="w3-center">

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '6px'
                            }}
                        >

                            {/* EDITAR */}

                            <button
                                type="button"
                                className="w3-button w3-light-grey"
                                style={{
                                    width: '38px',
                                    height: '34px',
                                    padding: '0'
                                }}
                                title="Editar"
                                onClick={() =>
                                    editarRegimen(regimen)
                                }
                            >

                                <i className="fa fa-pencil"></i>

                            </button>


                            {/* CAMBIAR ESTADO */}

                            <button
                                type="button"
                                className="w3-button w3-light-grey"
                                style={{
                                    width: '38px',
                                    height: '34px',
                                    padding: '0'
                                }}
                                title={
                                    regimen.estado
                                        ? 'Desactivar'
                                        : 'Activar'
                                }
                                onClick={() =>
                                    cambiarEstado(regimen.id)
                                }
                            >

                                <i
                                    className={`fa ${
                                        regimen.estado
                                            ? 'fa-toggle-on'
                                            : 'fa-toggle-off'
                                    }`}
                                ></i>

                            </button>

                        </div>

                    </td>

                </tr>

            ))}


            {/* SIN RESULTADOS */}

            {regimenesFiltrados.length === 0 && (

                <tr>

                    <td
                        colSpan="5"
                        className="w3-center w3-text-grey"
                    >

                        <i className="fa fa-search"></i>

                        &nbsp;

                        No se encontraron regímenes laborales.

                    </td>

                </tr>

            )}

        </tbody>

    </table>

</div>

            </div>

        </div>

    )

}


export default RegimenesLaboralesPage