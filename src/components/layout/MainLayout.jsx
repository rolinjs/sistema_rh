import { useState } from 'react'
import Navbar from './NavBar'
import Sidebar from './Sidebar'
import PageContent from './PageContent'
import AppRoutes from '../../routes/AppRoutes'

function MainLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)


    // =====================================================
    // ABRIR / CERRAR SIDEBAR
    // =====================================================

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev)
    }


    // =====================================================
    // CERRAR SIDEBAR EN MÓVIL
    // =====================================================

    const closeSidebar = () => {
        setSidebarOpen(false)
    }


    // =====================================================
    // COLAPSAR / EXPANDIR SIDEBAR
    // =====================================================

    const toggleSidebarCollapsed = () => {
        setSidebarCollapsed(prev => !prev)
    }


    return (
        <>

            {/* =================================================
                NAVBAR
            ================================================= */}

            <Navbar
                onToggleSidebar={toggleSidebar}
            />


            {/* =================================================
                SIDEBAR
            ================================================= */}

            <Sidebar
                isOpen={sidebarOpen}
                onClose={closeSidebar}
                isCollapsed={sidebarCollapsed}
                onToggleCollapse={toggleSidebarCollapsed}
            />


            {/* =================================================
                OVERLAY PARA MÓVIL
            ================================================= */}

            {sidebarOpen && (

                <div
                    className="w3-overlay w3-hide-large w3-animate-opacity"
                    onClick={closeSidebar}
                    style={{
                        cursor: 'pointer'
                    }}
                    title="close side menu"
                    id="myOverlay"
                ></div>

            )}


            {/* =================================================
                CONTENIDO PRINCIPAL
            ================================================= */}

            <div
                className="main-content"
                style={{
                    marginLeft: sidebarCollapsed
                        ? '70px'
                        : '300px',
                    transition: 'margin-left 0.3s ease'
                }}
            >

                <PageContent>
                    <AppRoutes />
                </PageContent>

            </div>

        </>
    )
}

export default MainLayout