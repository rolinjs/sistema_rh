const SubAreaForm = ({
    nombre,
    setNombre,
    areaId,
    setAreaId,
    descripcion,
    setDescripcion,
    areas,
    onGuardar,
    guardando,
    editando,
    onCancelar
}) => {

    const manejarSubmit = async (e) => {

        e.preventDefault()

        if (!nombre.trim()) {
            window.alert('Ingrese el nombre de la subárea.')
            return
        }

        if (!areaId) {
            window.alert('Seleccione un área.')
            return
        }

        const datos = {
            nombre: nombre.trim(),
            areaId,
            descripcion: descripcion.trim()
        }

        await onGuardar(datos)
    }

    return (
        <div className="w3-card w3-white w3-margin-bottom">

            <div className="w3-container w3-light-grey">
                <h4>
                    <i className={`fa ${editando ? 'fa-pencil' : 'fa-plus-circle'} w3-margin-right`}></i>
                    {editando ? 'Editar subárea' : 'Registrar subárea'}
                </h4>
            </div>

            <form
                className="w3-container w3-small"
                onSubmit={manejarSubmit}
            >

                <div className="w3-row-padding">

                    <div className="w3-col l4 m4 s12">

                        <label
                            style={{
                                fontSize: '12px',
                                fontWeight: 600
                            }}
                        >
                            Nombre
                        </label>

                        <input
                            type="text"
                            className="w3-input w3-border"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Ingrese nombre"
                            maxLength={100}
                            disabled={guardando}
                        />

                    </div>

                    <div className="w3-col l4 m4 s12">

                        <label
                            style={{
                                fontSize: '12px',
                                fontWeight: 600
                            }}
                        >
                            Área
                        </label>

                        <select
                            className="w3-select w3-border"
                            value={areaId}
                            onChange={(e) => setAreaId(e.target.value)}
                            disabled={guardando}
                        >

                            <option value="">
                                Seleccione un área
                            </option>

                            {areas.map((area) => (
                                <option
                                    key={area.id}
                                    value={area.id}
                                >
                                    {area.nombre}
                                </option>
                            ))}

                        </select>

                    </div>

                    <div className="w3-col l4 m4 s12">

                        <label
                            style={{
                                fontSize: '12px',
                                fontWeight: 600
                            }}
                        >
                            Descripción
                        </label>

                        <input
                            type="text"
                            className="w3-input w3-border"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            placeholder="Ingrese descripción"
                            maxLength={255}
                            disabled={guardando}
                        />

                    </div>

                </div>

                <div className="w3-margin-top w3-margin-bottom">

                    <button
                        type="submit"
                        className="w3-button w3-round w3-small"
                        style={{
                            backgroundColor: '#2c4056',
                            color: 'white'
                        }}
                        disabled={guardando}
                    >

                        <i className="fa fa-save w3-margin-right"></i>

                        {guardando
                            ? 'Guardando...'
                            : editando
                                ? 'Actualizar'
                                : 'Guardar'
                        }

                    </button>

                    {editando && (
                        <button
                            type="button"
                            className="w3-button w3-round w3-small w3-light-grey w3-border w3-margin-left"
                            onClick={onCancelar}
                            disabled={guardando}
                        >
                            <i className="fa fa-times w3-margin-right"></i>
                            Cancelar
                        </button>
                    )}

                    {!editando && (
                        <button
                            type="button"
                            className="w3-button w3-small w3-light-grey w3-border w3-margin-left"
                            onClick={() => window.alert('Función de importación pendiente.')}
                        >
                            <i className="fa fa-upload w3-margin-right"></i>
                            Importar
                        </button>
                    )}

                </div>

            </form>

        </div>
    )
}

export default SubAreaForm