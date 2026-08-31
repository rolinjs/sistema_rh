function SelectCampo({
    label,
    value,
    onChange,
    opciones
}) {

    const opcionesSeguras =
        Array.isArray(opciones)
            ? opciones
            : []


    return (

        <>

            <label
                className="w3-text-grey"
                style={{
                    fontSize: '12px',
                    fontWeight: 600
                }}
            >

                {label}

            </label>


            <select
                className="w3-select w3-border w3-round-small"
                value={value}
                onChange={onChange}
            >

                <option value="">

                    Seleccione

                </option>


                {opcionesSeguras.map(item => {

                    const esObjeto =
                        item !== null &&
                        typeof item === 'object'


                    const valor =
                        esObjeto
                            ? item.id
                            : item


                    const texto =
                        esObjeto
                            ? item.nombre
                            : item


                    return (

                        <option
                            key={valor}
                            value={valor}
                        >

                            {texto}

                        </option>

                    )

                })}

            </select>

        </>

    )

}


export default SelectCampo