import { useState } from 'react'


function AreasPage() {

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

    const areas = [
        {
            id: 1,
            codigo: 'PROD',
            nombre: 'Producción',
            descripcion: 'Área encargada de las operaciones productivas.',
            estado: true
        },
        {
            id: 2,
            codigo: 'ADM',
            nombre: 'Administración',
            descripcion: 'Área administrativa.',
            estado: true
        },
        {
            id: 3,
            codigo: 'RRHH',
            nombre: 'Recursos Humanos',
            descripcion: 'Área encargada de la gestión del personal.',
            estado: true
        },
        {
            id: 4,
            codigo: 'CAL',
            nombre: 'Calidad',
            descripcion: 'Área encargada del control de calidad.',
            estado: true
        },
        {
            id: 5,
            codigo: 'CONT',
            nombre: 'Contabilidad',
            descripcion: 'Área encargada de la gestión contable.',
            estado: true
        }
    ]


    // =====================================================
    // FILTRAR
    // =====================================================

    const areasFiltradas = areas.filter(area => {

        const texto = busqueda
            .toLowerCase()
            .trim()

        return (

            area.codigo
                .toLowerCase()
                .includes(texto)

            ||

            area.nombre
                .toLowerCase()
                .includes(texto)

            ||

            area.descripcion
                .toLowerCase()
                .includes(texto)

        )

    })


    // =====================================================
    // GUARDAR
    // =====================================================

    const guardarArea = (event) => {

        event.preventDefault()

        console.log({
            codigo,
            nombre,
            descripcion
        })

    }


    // =====================================================
    // EDITAR
    // =====================================================

    const editarArea = (area) => {

        setModoEdicion(true)

        setCodigo(area.codigo)
        setNombre(area.nombre)
        setDescripcion(area.descripcion)

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

                    <i className="fa fa-sitemap"></i>

                    &nbsp;

                    Áreas

                </h4>

                <p className="w3-text-grey">

                    Administración de las áreas de la empresa.

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
                                placeholder="Ej. PROD"
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
                                placeholder="Ej. Producción"
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
                                placeholder="Descripción del área"
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


            {/* =================================================
                LISTA
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

                        <h4 className="w3-margin">

                            Lista de áreas

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


                {/* TABLA */}

                <div className="w3-responsive">

                    <table className="w3-table-all">

                        <thead>

                            <tr>

                                <th>
                                    Código
                                </th>

                                <th>
                                    Área
                                </th>

                                <th>
                                    Descripción
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


                        <tbody>

                            {areasFiltradas.map(area => (

                                <tr key={area.id}>

                                    <td>
                                        {area.codigo}
                                    </td>

                                    <td>
                                        {area.nombre}
                                    </td>

                                    <td>
                                        {area.descripcion}
                                    </td>

                                    <td>

                                        {area.estado ? (

                                            <span className="w3-tag w3-green">
                                                Activo
                                            </span>

                                        ) : (

                                            <span className="w3-tag w3-grey">
                                                Inactivo
                                            </span>

                                        )}

                                    </td>

                                    <td className="w3-center">

                                        <button
                                            type="button"
                                            className="w3-button w3-small w3-light-grey w3-margin-right"
                                            title="Editar"
                                            onClick={() =>
                                                editarArea(area)
                                            }
                                        >

                                            <i className="fa fa-pencil"></i>

                                        </button>


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


                            {areasFiltradas.length === 0 && (

                                <tr>

                                    <td
                                        colSpan="5"
                                        className="w3-center w3-text-grey"
                                    >

                                        No se encontraron áreas.

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


export default AreasPage