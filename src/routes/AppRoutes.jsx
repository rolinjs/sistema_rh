import { Routes, Route } from 'react-router-dom'

import BancoPage from '../modules/banco/pages/BancoPage'
import AreasPage from '../modules/areas/pages/AreasPages'
import SubAreasPage from '../modules/subareas/pages/SubAreasPage'
import CargosPage from '../modules/cargos/pages/CargosPage'
import CargoEspecificosPage
    from '../modules/cargoespecifico/pages/CargoEspecificosPage'
import TrabajadorPage from '../modules/trabajadores/pages/TrabajadorPage'
import RegistroTrabajador from '../modules/trabajadores/pages/RegistroTrabajador'
import RegimenesLaboralesPage from '../modules/RegimenesLaborales/page/RegimenesLaboralesPage'
import ConfiguracionRegimenPage from '../modules/configuracionRegimen/pages/ConfiguracionRegimenPage'
import CajaChicaPage
    from '../modules/cajaChica/pages/CajaChicaPage'


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
                element={<AreasPage />}
            />

            <Route
                path="/subareas"
                element={<SubAreasPage />}
            />

            <Route
                path="/cargos"
                element={<CargosPage />}
            />

            <Route
                path="/cargos-especificos"
                element={<CargoEspecificosPage />}
            />

            <Route
                path="/trabajadores"
                element={<TrabajadorPage />}
            />

            <Route
                path="/trabajadores/nuevo"
                element={<RegistroTrabajador />}
            />

            <Route
                path="/regimenes-laborales"
                element={<RegimenesLaboralesPage />}
            />

            <Route
                path="/remuneraciones/configuracion-regimen"
                element={<ConfiguracionRegimenPage />}
            />

            <Route
                path="/caja-chica"
                element={<CajaChicaPage />}
            />

        </Routes>

    )
}

export default AppRoutes