import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import foto from '../../assets/logo_koricancha.png'
import menuConfig from './menuConfig'


function Sidebar({ isOpen, onClose }) {

    const [openMenus, setOpenMenus] = useState({})


    // =====================================================
    // ABRIR / CERRAR SUBMENÚ
    // =====================================================

    const toggleMenu = (menuId) => {

        setOpenMenus(prev => ({
            ...prev,
            [menuId]: !prev[menuId]
        }))

    }


    // =====================================================
    // CLASE PARA OPCIÓN ACTIVA
    // =====================================================

    const getLinkClass = ({ isActive }) => {

        return `w3-bar-item w3-button w3-padding ${
            isActive
                ? 'w3-light-grey'
                : ''
        }`

    }


    return (

        <nav
            className={`w3-sidebar w3-white w3-animate-left w3-light-grey ${
                isOpen
                    ? 'w3-show'
                    : 'w3-collapse'
            }`}
            style={{
                zIndex: 3,
                width: '300px'
            }}
            id="mySidebar"
        >

            <br />


            {/* =================================================
                USUARIO
            ================================================= */}

            <div className="w3-container w3-row">

                <div className="w3-col s4">

                    <img
                        src={foto}
                        className="w3-circle w3-margin-right"
                        style={{
                            width: '46px'
                        }}
                        alt="Logo Koricancha"
                    />

                </div>


                <div className="w3-col s8 w3-bar">

                    <span>
                        Bienvenido, <strong>Usuario</strong>
                    </span>

                    <br />


                    <a
                        href="#"
                        className="w3-bar-item w3-button"
                    >
                        <i className="fa fa-envelope"></i>
                    </a>


                    <a
                        href="#"
                        className="w3-bar-item w3-button"
                    >
                        <i className="fa fa-user"></i>
                    </a>


                    <a
                        href="#"
                        className="w3-bar-item w3-button"
                    >
                        <i className="fa fa-cog"></i>
                    </a>

                </div>

            </div>


            <hr />


            {/* =================================================
                PANEL
            ================================================= */}

            <div className="w3-container">

                <h5>
                    Panel
                </h5>

            </div>


            <div className="w3-bar-block">


                {/* =================================================
                    CERRAR MENÚ EN MÓVIL
                ================================================= */}

                <a
                    href="#"
                    className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
                    onClick={(event) => {

                        event.preventDefault()

                        onClose()

                    }}
                    title="close menu"
                >

                    <i className="fa fa-remove fa-fw"></i>

                    Cerrar menú

                </a>


                {/* =================================================
                    MENÚ PRINCIPAL
                ================================================= */}

                {menuConfig.map(menu => {


                    // =============================================
                    // OPCIÓN SIN SUBMENÚ
                    // =============================================

                    if (!menu.children) {

                        return (

                            <NavLink
                                key={menu.id}
                                to={menu.path}
                                className={getLinkClass}
                            >

                                <i
                                    className={`fa ${menu.icon} fa-fw`}
                                ></i>

                                {menu.label}

                            </NavLink>

                        )

                    }


                    // =============================================
                    // OPCIÓN CON SUBMENÚ
                    // =============================================

                    const isOpenMenu =
                        openMenus[menu.id] === true


                    return (

                        <div key={menu.id}>


                            {/* MENÚ PADRE */}

                            <button
                                type="button"
                                className="w3-bar-item w3-button w3-padding rrhh-menu"
                                onClick={() => {
                                    toggleMenu(menu.id)
                                }}
                                style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    border: 'none'
                                }}
                            >

                                <i
                                    className={`fa ${menu.icon} fa-fw`}
                                ></i>

                                {menu.label}


                                <i
                                    className={`fa w3-right menu-arrow ${
                                        isOpenMenu
                                            ? 'fa-chevron-up'
                                            : 'fa-chevron-down'
                                    }`}
                                ></i>

                            </button>


                            {/* SUBMENÚ */}

                            <div
                                className={`rrhh-submenu ${
                                    isOpenMenu
                                        ? 'w3-show'
                                        : 'w3-hide'
                                }`}
                            >

                                {menu.children.map(child => (

                                    <NavLink
                                        key={child.id}
                                        to={child.path}
                                        className={getLinkClass}
                                    >

                                        <i
                                            className={`fa ${child.icon} fa-fw`}
                                        ></i>

                                        {child.label}

                                    </NavLink>

                                ))}

                            </div>

                        </div>

                    )

                })}


                <br />
                <br />

            </div>

        </nav>

    )

}


export default Sidebar