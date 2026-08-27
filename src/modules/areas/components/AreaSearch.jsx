function AreaSearch({
    busqueda,
    setBusqueda
}) {

    return (
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
    )
}

export default AreaSearch