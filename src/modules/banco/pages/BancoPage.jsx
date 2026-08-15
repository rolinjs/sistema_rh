import { useState } from 'react'


function BancoPage() {

    // =====================================================
    // ESTADOS
    // =====================================================

    const [modoEdicion, setModoEdicion] = useState(false)

    const [codigo, setCodigo] = useState('')
    const [nombre, setNombre] = useState('')

    const [busqueda, setBusqueda] = useState('')


    // =====================================================
    // DATOS TEMPORALES
    // Luego vendrán desde Spring Boot
    // =====================================================

    const bancos = [
        {
            id: 1,
            codigo: 'BCP',
            nombre: 'Banco de Crédito del Perú',
            estado: true
        },
        {
            id: 2,
            codigo: 'BBVA',
            nombre: 'BBVA Perú',
            estado: true
        },
        {
            id: 3,
            codigo: 'SCOTIA',
            nombre: 'Scotiabank Perú',
            estado: true
        },
        {
            id: 4,
            codigo: 'INTERBANK',
            nombre: 'Interbank SAC',
            estado: true
        }
    ]


    // =====================================================
    // FILTRAR BANCOS
    // =====================================================

    const bancosFiltrados = bancos.filter(banco => {

        const texto = busqueda
            .toLowerCase()
            .trim()

        return (

            banco.codigo
                .toLowerCase()
                .includes(texto)

            ||

            banco.nombre
                .toLowerCase()
                .includes(texto)

        )

    })


    // =====================================================
    // GUARDAR
    // =====================================================

    const guardarBanco = (event) => {

        event.preventDefault()

        console.log({
            codigo,
            nombre
        })

    }


    // =====================================================
    // EDITAR
    // =====================================================

    const editarBanco = (banco) => {

        setModoEdicion(true)

        setCodigo(banco.codigo)

        setNombre(banco.nombre)

    }


    // =====================================================
    // CANCELAR EDICIÓN
    // =====================================================

    const cancelarEdicion = () => {

        setModoEdicion(false)

        setCodigo('')

        setNombre('')

    }


    // =====================================================
    // IMPORTAR EXCEL
    // =====================================================

    const importarExcel = (event) => {

        const archivo = event.target.files[0]

        if (!archivo) {
            return
        }

        console.log(
            'Archivo seleccionado:',
            archivo.name
        )

    }


    return (

        <div className="w3-container">


            {/* =================================================
                ENCABEZADO
            ================================================= */}

            <div className="w3-margin-bottom">

                <h4 className="w3-margin-top">

                    <i className="fa fa-bank"></i>

                    &nbsp;

                    Bancos

                </h4>


                <p className="w3-text-grey">

                    Administración de bancos registrados en el sistema.

                </p>

            </div>


            {/* =================================================
                FORMULARIO
            ================================================= */}

            <div className="w3-card w3-white w3-margin-bottom">


                {/* CABECERA */}

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
                            ? 'Editar banco'
                            : 'Registrar banco'
                        }

                    </h5>

                </header>


                {/* FORMULARIO */}

                <form
                    className="w3-container w3-padding-16 w3-small"
                    onSubmit={guardarBanco}
                >

                    <div className="w3-row-padding">


                        {/* ================================
                            CÓDIGO
                        ================================= */}

                        <div className="w3-col l3 m3 s12">

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
                                placeholder="Ej. BCP"
                            />

                        </div>


                        {/* ================================
                            NOMBRE
                        ================================= */}

                        <div className="w3-col l6 m6 s12">

                            <label>
                                Nombre del banco
                            </label>

                            <input
                                className="w3-input w3-border"
                                type="text"
                                value={nombre}
                                onChange={(event) =>
                                    setNombre(event.target.value)
                                }
                                placeholder="Ej. Banco de Crédito del Perú"
                            />

                        </div>


                        {/* ================================
                            ACCIONES
                        ================================= */}

                        <div className="w3-col l3 m3 s12">

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    marginTop: '22px',
                                    flexWrap: 'wrap'
                                }}
                            >

                                {/* GUARDAR */}

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


                                {/* IMPORTAR */}

                                <label
                                    htmlFor="archivoExcel"
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
                                    id="archivoExcel"
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


                    {/* ================================
                        CANCELAR EDICIÓN
                    ================================= */}

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


            {/* =================================================
                LISTA DE BANCOS
            ================================================= */}

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


                        {/* TÍTULO */}

                        <h5 className="w3-margin">

                            Lista de bancos

                        </h5>


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


                        {/* ENCABEZADOS */}

                        <thead>

                            <tr>

                                <th>
                                    Código
                                </th>

                                <th>
                                    Banco
                                </th>

                                <th>
                                    Estado
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


                        {/* DATOS */}

                        <tbody>

                            {bancosFiltrados.map(banco => (

                                <tr key={banco.id}>


                                    {/* CÓDIGO */}

                                    <td>

                                        {banco.codigo}

                                    </td>


                                    {/* BANCO */}

                                    <td>

                                        {banco.nombre}

                                    </td>


                                    {/* ESTADO */}

                                    <td>

                                        {banco.estado ? (

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


                                        {/* EDITAR */}

                                        <button
                                            type="button"
                                            className="w3-button w3-small w3-light-grey w3-margin-right"
                                            title="Editar"
                                            onClick={() =>
                                                editarBanco(banco)
                                            }
                                        >

                                            <i className="fa fa-pencil"></i>

                                        </button>


                                        {/* ELIMINAR */}

                                        <button
                                            type="button"
                                            className="w3-button w3-small w3-light-grey"
                                            title="Eliminar"
                                        >

                                            <i className="fa fa-trash"></i>

                                        </button>

                                    </td>

                                </tr>

                            ))}


                            {/* SIN RESULTADOS */}

                            {bancosFiltrados.length === 0 && (

                                <tr>

                                    <td
                                        colSpan="4"
                                        className="w3-center w3-text-grey"
                                    >

                                        No se encontraron bancos.

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


export default BancoPage