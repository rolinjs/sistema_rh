import AreaForm from '../components/AreaForm'
import AreaSearch from '../components/AreaSearch'
import AreaTable from '../components/AreaTable'
import useAreas from '../hooks/useAreas'

function AreasPage() {

    const {
        modoEdicion,

        codigo,
        nombre,
        descripcion,

        busqueda,

        areasFiltradas,
        servidorOnline,
        
        setCodigo,
        setNombre,
        setDescripcion,
        setBusqueda,

        guardarArea,
        editarArea,
        cancelarEdicion,
        importarExcel,
        cambiarEstado
    } = useAreas()


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

            <AreaForm
                modoEdicion={modoEdicion}
                codigo={codigo}
                nombre={nombre}
                descripcion={descripcion}
                setCodigo={setCodigo}
                setNombre={setNombre}
                setDescripcion={setDescripcion}
                guardarArea={guardarArea}
                cancelarEdicion={cancelarEdicion}
                importarExcel={importarExcel}
            />


            {/* =================================================
                LISTADO
            ================================================= */}

            <div className="w3-margin-bottom">

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}
                >

                    <AreaSearch
                        busqueda={busqueda}
                        setBusqueda={setBusqueda}
                    />

                </div>

            </div>


            <AreaTable
                areasFiltradas={areasFiltradas}
                editarArea={editarArea}
                cambiarEstado={cambiarEstado}
                 servidorOnline={servidorOnline}
            />

        </div>
    )
}

export default AreasPage