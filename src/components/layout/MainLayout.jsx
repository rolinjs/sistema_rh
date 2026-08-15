import { useState } from 'react'
import Navbar from './NavBar'
import Sidebar from './Sidebar'
import PageContent from './PageContent'
import AppRoutes from '../../routes/AppRoutes'

function MainLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev)
    }

    const closeSidebar = () => {
        setSidebarOpen(false)
    }

    return (
        <>

            {/* Top container */}
            <Navbar
                onToggleSidebar={toggleSidebar}
            />


            {/* Sidebar / Menu */}
            <Sidebar
                isOpen={sidebarOpen}
                onClose={closeSidebar}
            />


            {/* Overlay */}
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


            <PageContent>
                <AppRoutes />
            </PageContent>

        </>
    )
}

export default MainLayout