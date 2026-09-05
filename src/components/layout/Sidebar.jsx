import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import foto from '../../assets/logo_koricancha.png'
import menuConfig from './menuConfig'


function Sidebar({
    isOpen,
    onClose,
    isCollapsed,
    onToggleCollapse
}) {

    const [openMenus, setOpenMenus] = useState({})


    // =====================================================
    // ABRIR / CERRAR MENÚ
    // =====================================================

    const toggleMenu = (menuId) => {

        setOpenMenus(prev => ({
            ...prev,
            [menuId]: !prev[menuId]
        }))

    }


    // =====================================================
    // CLASE ENLACE
    // =====================================================

    const getLinkClass = ({ isActive }) => {

        return `w3-button ${
            isActive
                ? 'w3-green'
                : ''
        }`

    }


    // =====================================================
    // ENLACE FINAL
    // =====================================================

    const renderLink = (
        item,
        level = 0
    ) => {

        const isNested =
            level >= 2


        return (

            <NavLink
                key={item.id}
                to={item.path}
                className={getLinkClass}
                title={
                    isCollapsed
                        ? item.label
                        : ''
                }
                style={{
                    display: 'flex',
                    alignItems: 'center',

                    width: '100%',
                    boxSizing: 'border-box',

                    minHeight: '38px',

                    paddingTop: '7px',
                    paddingBottom: '7px',

                    paddingLeft: isCollapsed
                        ? '0'
                        : '14px',

                    paddingRight: '10px',

                    textDecoration: 'none',

                    textAlign: isCollapsed
                        ? 'center'
                        : 'left',

                    whiteSpace: 'nowrap',

                    justifyContent: isCollapsed
                        ? 'center'
                        : 'flex-start',

                    fontSize: '14px',

                    borderRadius:
                        isCollapsed
                            ? '0'
                            : '4px',

                    margin:
                        isCollapsed
                            ? '0'
                            : '1px 8px 1px 8px',

                    width:
                        isCollapsed
                            ? '100%'
                            : 'calc(100% - 16px)',

                    borderLeft:
                        !isCollapsed && isNested
                            ? '2px solid #d8d8d8'
                            : '2px solid transparent'
                }}
            >

                <i
                    className={`fa ${item.icon} fa-fw`}
                    style={{
                        width: '22px',
                        minWidth: '22px',
                        textAlign: 'center'
                    }}
                ></i>


                {!isCollapsed && (

                    <span
                        style={{
                            marginLeft: '4px'
                        }}
                    >
                        {item.label}
                    </span>

                )}

            </NavLink>

        )

    }


    // =====================================================
    // MENÚ INTERNO
    // =====================================================

    const renderSubMenu = (
        menu,
        level = 1
    ) => {

        const isOpenMenu =
            openMenus[menu.id] === true


        return (

            <div
                key={menu.id}
                style={{
                    marginTop: '3px',
                    marginBottom: '3px'
                }}
            >

                {/* =================================================
                    CATEGORÍA INTERNA
                ================================================= */}

                <button
                    type="button"
                    onClick={() =>
                        toggleMenu(menu.id)
                    }
                    title={
                        isCollapsed
                            ? menu.label
                            : ''
                    }
                    style={{
                        display: 'flex',
                        alignItems: 'center',

                        width: '100%',
                        boxSizing: 'border-box',

                        minHeight: '40px',

                        padding:
                            isCollapsed
                                ? '8px 0'
                                : '8px 12px',

                        paddingLeft:
                            isCollapsed
                                ? '0'
                                : '28px',

                        border: 'none',

                        background:
                            isOpenMenu && !isCollapsed
                                ? '#eeeeee'
                                : 'transparent',

                        color: '#333',

                        cursor: 'pointer',

                        textAlign:
                            isCollapsed
                                ? 'center'
                                : 'left',

                        justifyContent:
                            isCollapsed
                                ? 'center'
                                : 'flex-start',

                        fontSize: '13px',

                        fontWeight: 600,

                        borderRadius:
                            isCollapsed
                                ? '0'
                                : '4px',

                        margin:
                            isCollapsed
                                ? '0'
                                : '0 8px',

                        width:
                            isCollapsed
                                ? '100%'
                                : 'calc(100% - 16px)'
                    }}
                >

                    <i
                        className={`fa ${menu.icon} fa-fw`}
                        style={{
                            width: '22px',
                            minWidth: '22px',
                            textAlign: 'center'
                        }}
                    ></i>


                    {!isCollapsed && (

                        <span
                            style={{
                                marginLeft: '4px',
                                flex: 1
                            }}
                        >
                            {menu.label}
                        </span>

                    )}


                    {!isCollapsed && (

                        <i
                            className={`fa ${
                                isOpenMenu
                                    ? 'fa-chevron-up'
                                    : 'fa-chevron-down'
                            }`}
                            style={{
                                fontSize: '11px',
                                marginLeft: '8px'
                            }}
                        ></i>

                    )}

                </button>


                {/* =================================================
                    ELEMENTOS INTERNOS
                ================================================= */}

                {!isCollapsed && isOpenMenu && (

                    <div
                        style={{
                            marginLeft: '35px',
                            marginRight: '8px',

                            borderLeft:
                                '1px solid #d9d9d9',

                            paddingTop: '3px',
                            paddingBottom: '3px'
                        }}
                    >

                        {(menu.children || []).map(child => {

                            if (child.children) {

                                return renderSubMenu(
                                    child,
                                    level + 1
                                )

                            }


                            return renderLink(
                                child,
                                level + 1
                            )

                        })}

                    </div>

                )}

            </div>

        )

    }


    // =====================================================
    // MÓDULO PRINCIPAL
    // =====================================================

    const renderModule = (menu) => {

        const isOpenModule =
            openMenus[menu.id] === true


        return (

            <div
                key={menu.id}
                style={{
                    marginBottom:
                        isCollapsed
                            ? '4px'
                            : '10px'
                }}
            >

                {/* =================================================
                    CABECERA DEL MÓDULO
                ================================================= */}

                <button
                    type="button"
                    onClick={() =>
                        toggleMenu(menu.id)
                    }
                    title={
                        isCollapsed
                            ? menu.label
                            : ''
                    }
                    style={{
                        display: 'flex',
                        alignItems: 'center',

                        width: '100%',
                        boxSizing: 'border-box',

                        minHeight:
                            isCollapsed
                                ? '48px'
                                : '54px',

                        padding:
                            isCollapsed
                                ? '8px 0'
                                : '7px 10px',

                        border:
                            isCollapsed
                                ? 'none'
                                : '1px solid #dedede',

                        borderRadius:
                            isCollapsed
                                ? '0'
                                : '6px',

                        background:
                            isOpenModule && !isCollapsed
                                ? '#e9ecef'
                                : '#f4f4f4',

                        color: '#263746',

                        cursor: 'pointer',

                        textAlign:
                            isCollapsed
                                ? 'center'
                                : 'left',

                        justifyContent:
                            isCollapsed
                                ? 'center'
                                : 'flex-start',

                        boxShadow:
                            isCollapsed
                                ? 'none'
                                : '0 1px 2px rgba(0,0,0,0.04)',

                        fontSize: '14px',

                        fontWeight: 700
                    }}
                >

                    {/* =================================================
                        ICONO DEL MÓDULO
                    ================================================= */}

                    <span
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',

                            width:
                                isCollapsed
                                    ? '100%'
                                    : '34px',

                            minWidth:
                                isCollapsed
                                    ? '100%'
                                    : '34px',

                            height: '34px',

                            background:
                                isCollapsed
                                    ? 'transparent'
                                    : '#ffffff',

                            borderRadius:
                                isCollapsed
                                    ? '0'
                                    : '5px',

                            border:
                                isCollapsed
                                    ? 'none'
                                    : '1px solid #dddddd'
                        }}
                    >

                        <i
                            className={`fa ${menu.icon}`}
                        ></i>

                    </span>


                    {!isCollapsed && (

                        <>

                            <span
                                style={{
                                    marginLeft: '10px',
                                    flex: 1,
                                    textAlign: 'left'
                                }}
                            >
                                {menu.label}
                            </span>


                            <i
                                className={`fa ${
                                    isOpenModule
                                        ? 'fa-chevron-up'
                                        : 'fa-chevron-down'
                                }`}
                                style={{
                                    fontSize: '11px'
                                }}
                            ></i>

                        </>

                    )}

                </button>


                {/* =================================================
                    CONTENIDO DEL MÓDULO
                ================================================= */}

                {!isCollapsed && isOpenModule && (

                    <div
                        style={{
                            marginTop: '6px',
                            paddingBottom: '2px'
                        }}
                    >

                        {(menu.children || []).map(child => {

                            if (child.children) {

                                return renderSubMenu(
                                    child,
                                    1
                                )

                            }


                            return renderLink(
                                child,
                                1
                            )

                        })}

                    </div>

                )}

            </div>

        )

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

                width:
                    isCollapsed
                        ? '70px'
                        : '300px',

                transition:
                    'width 0.3s ease',

                overflowX: 'hidden'
            }}
            id="mySidebar"
        >

            <br />


            {/* =================================================
                USUARIO
            ================================================= */}

            <div className="w3-container w3-row">

                <div
                    className="w3-col s4"
                    style={{
                        width:
                            isCollapsed
                                ? '100%'
                                : '33.33333%',

                        textAlign:
                            isCollapsed
                                ? 'center'
                                : 'left'
                    }}
                >

                    <img
                        src={foto}
                        className="w3-circle w3-margin-right"
                        style={{
                            width: '46px'
                        }}
                        alt="Logo Koricancha"
                    />

                </div>


                {!isCollapsed && (

                    <div
                        className="w3-col s8 w3-bar"
                    >

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

                )}

            </div>


            <hr />


            {/* =================================================
                BOTÓN COLAPSAR / EXPANDIR
            ================================================= */}

            <div
                className="w3-container"
                style={{
                    textAlign:
                        isCollapsed
                            ? 'center'
                            : 'right'
                }}
            >

                <button
                    type="button"
                    className="w3-button w3-light-grey"
                    onClick={onToggleCollapse}
                    title={
                        isCollapsed
                            ? 'Expandir menú'
                            : 'Colapsar menú'
                    }
                >

                    <i
                        className={`fa ${
                            isCollapsed
                                ? 'fa-chevron-right'
                                : 'fa-chevron-left'
                        }`}
                    ></i>

                </button>

            </div>


            {/* =================================================
                PANEL
            ================================================= */}

            {!isCollapsed && (

                <div className="w3-container">

                    <h5>
                        Panel
                    </h5>

                </div>

            )}


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

                    {!isCollapsed && 'Cerrar menú'}

                </a>


                {/* =================================================
                    DASHBOARD
                ================================================= */}

                {menuConfig
                    .filter(menu => menu.id === 'dashboard')
                    .map(menu =>
                        renderLink(menu, 0)
                    )
                }


                {/* =================================================
                    MÓDULOS ERP
                ================================================= */}

                <div
                    style={{
                        marginTop: '8px'
                    }}
                >

                    {menuConfig
                        .filter(menu =>
                            menu.id !== 'dashboard'
                        )
                        .map(menu =>
                            renderModule(menu)
                        )
                    }

                </div>


                <br />
                <br />

            </div>

        </nav>

    )

}


export default Sidebar