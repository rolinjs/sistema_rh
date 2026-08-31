import { useMemo, useState } from 'react'

import useSubAreas from '../hooks/useSubAreas'

import SubAreaForm from '../components/SubAreaForm'

import SubAreaTable from '../components/SubAreaTable'


function SubAreasPage() {

    // =====================================================
    // DATOS DEL HOOK
    // =====================================================

    const {
        subAreas,
        areas,
        loading,
        error
    } = useSubAreas()


    // =====================================================
    // FORMULARIO
    // =====================================================

    const [nombre, setNombre] = useState('')

    const [areaId, setAreaId] = useState('')

    const [descripcion, setDescripcion] = useState('')


    // =====================================================
    // BÚSQUEDA
    // =====================================================

    const [busqueda, setBusqueda] = useState('')


    // =====================================================
    // FILTRAR SUBÁREAS
    // =====================================================

    const subAreasFiltradas = useMemo(() => {

        const texto =
            busqueda
                .trim()
                .toLowerCase()


        if (!texto) {

            return subAreas

        }


        return subAreas.filter(
            subArea =>

                subArea.nombre
                    ?.toLowerCase()
                    .includes(texto)

                ||

                subArea.areaNombre
                    ?.toLowerCase()
                    .includes(texto)

                ||

                subArea.descripcion
                    ?.toLowerCase()
                    .includes(texto)

        )

    }, [
        subAreas,
        busqueda
    ])


    return (

        <>

            {/* =================================================
                TÍTULO
            ================================================= */}

            <div className="w3-margin-bottom">

                <h4 className="w3-text-dark-grey">

                    <i className="fa fa-sitemap"></i>

                    &nbsp;

                    SubÁreas

                </h4>


                <p className="w3-text-grey">

                    Administración de las subáreas de la empresa.

                </p>

            </div>


            {/* =================================================
                FORMULARIO
            ================================================= */}

            <SubAreaForm

                nombre={nombre}

                setNombre={setNombre}

                areaId={areaId}

                setAreaId={setAreaId}

                descripcion={descripcion}

                setDescripcion={setDescripcion}

                areas={areas}

            />


            {/* =================================================
                BUSCADOR
            ================================================= */}

            <div
                className="w3-margin-top w3-small w3-margin-bottom"
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}
            >

                <div
                    style={{
                        width: '240px',
                        position: 'relative'
                    }}
                >

                    <i
                        className="fa fa-search"
                        style={{
                            position: 'absolute',
                            left: '10px',
                            top: '9px',
                            color: '#000',
                            zIndex: 1
                        }}
                    ></i>


                    <input
                        className="w3-input w3-border"
                        type="text"
                        placeholder="Buscar..."
                        value={busqueda}
                        onChange={(event) =>
                            setBusqueda(
                                event.target.value
                            )
                        }
                        style={{
                            paddingLeft: '30px'
                        }}
                    />

                </div>

            </div>


            {/* =================================================
                TABLA
            ================================================= */}

            <SubAreaTable

                subAreasFiltradas={
                    subAreasFiltradas
                }

                loading={loading}

                error={error}

            />

        </>

    )

}


export default SubAreasPage