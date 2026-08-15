function Navbar({ onToggleSidebar }) {

    return (
        <div
            className="w3-bar w3-top w3-flat-midnight-blue w3-large"
            style={{
                zIndex: 4
            }}
        >

            {/* Botón menú móvil */}
            <button
                className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"
                onClick={onToggleSidebar}
            >
                <i className="fa fa-bars"></i>
                &nbsp; Menu
            </button>


            {/* Logo */}
            <span className="w3-bar-item w3-right">
                Logo
            </span>

        </div>
    )
}

export default Navbar