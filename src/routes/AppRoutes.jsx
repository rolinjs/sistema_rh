import { Routes, Route } from 'react-router-dom'

import BancoPage from '../modules/banco/pages/BancoPage'
import AreasPage from '../modules/areas/pages/AreasPages'
import CargosPage from '../modules/cargos/pages/CargosPage'
import TrabajadorPage from '../modules/trabajadores/pages/TrabajadorPage'


function AppRoutes() {

    return (

        <Routes>

            <Route
                path="/"
                element={<h2>Dashboard</h2>}
            />

            <Route
                path="/bancos"
                element={<BancoPage />}
            />

            <Route
                path="/areas"
                element={<AreasPage/>}
            />

            <Route path="cargos" element={<CargosPage/>}/>

            <Route path='/trabajadores' element={<TrabajadorPage/>}/>

        </Routes>

    )

}


export default AppRoutes