import { useMemo, useState } from 'react'


function CajaChicaPage() {

    // =====================================================
    // ESTADOS GENERALES
    // =====================================================

    const [tabActual, setTabActual] = useState('RESUMEN')

    const [modalAbierto, setModalAbierto] = useState(false)

    const [modalTipo, setModalTipo] = useState(null)

    const [movimientoSeleccionado, setMovimientoSeleccionado] =
        useState(null)

    const [cajaSeleccionada, setCajaSeleccionada] =
        useState(null)


    // =====================================================
    // FILTROS - MOVIMIENTOS
    // =====================================================

    const [busquedaMovimiento, setBusquedaMovimiento] =
        useState('')

    const [filtroCaja, setFiltroCaja] =
        useState('TODAS')

    const [filtroTipo, setFiltroTipo] =
        useState('TODOS')

    const [filtroFechaDesde, setFiltroFechaDesde] =
        useState('')

    const [filtroFechaHasta, setFiltroFechaHasta] =
        useState('')


    // =====================================================
    // FILTROS - RENDICIONES
    // =====================================================

    const [filtroEstadoRendicion, setFiltroEstadoRendicion] =
        useState('TODOS')


    // =====================================================
    // FILTROS - CUADRES
    // =====================================================

    const [filtroEstadoCuadre, setFiltroEstadoCuadre] =
        useState('TODOS')


    // =====================================================
    // FORMULARIO MOVIMIENTO
    // =====================================================

    const [tipoMovimiento, setTipoMovimiento] =
        useState('EGRESO')

    const [cajaMovimiento, setCajaMovimiento] =
        useState('')

    const [fechaMovimiento, setFechaMovimiento] =
        useState('2026-08-30')

    const [categoriaMovimiento, setCategoriaMovimiento] =
        useState('')

    const [conceptoMovimiento, setConceptoMovimiento] =
        useState('')

    const [beneficiarioMovimiento, setBeneficiarioMovimiento] =
        useState('')

    const [tipoDocumento, setTipoDocumento] =
        useState('')

    const [numeroDocumento, setNumeroDocumento] =
        useState('')

    const [montoMovimiento, setMontoMovimiento] =
        useState('')

    const [observacionMovimiento, setObservacionMovimiento] =
        useState('')


    // =====================================================
    // FORMULARIO CUADRE
    // =====================================================

    const [cajaCuadre, setCajaCuadre] =
        useState('')

    const [fechaCuadre, setFechaCuadre] =
        useState('2026-08-30')

    const [observacionCuadre, setObservacionCuadre] =
        useState('')

    const [cantidadesEfectivo, setCantidadesEfectivo] =
        useState({
            200: 0,
            100: 0,
            50: 0,
            20: 0,
            10: 0,
            5: 0,
            2: 0,
            1: 0,
            0.50: 0,
            0.20: 0,
            0.10: 0,
            0.05: 0
        })

    const denominaciones = [
        { valor: 200, tipo: 'BILLETE' },
        { valor: 100, tipo: 'BILLETE' },
        { valor: 50, tipo: 'BILLETE' },
        { valor: 20, tipo: 'BILLETE' },
        { valor: 10, tipo: 'BILLETE' },
        { valor: 5, tipo: 'BILLETE' },
        { valor: 2, tipo: 'MONEDA' },
        { valor: 1, tipo: 'MONEDA' },
        { valor: 0.50, tipo: 'MONEDA' },
        { valor: 0.20, tipo: 'MONEDA' },
        { valor: 0.10, tipo: 'MONEDA' },
        { valor: 0.05, tipo: 'MONEDA' }
    ]


    // =====================================================
    // DATOS DE PRUEBA
    // =====================================================

    const cajas = [

        {
            id: 1,
            codigo: 'CJ-001',
            nombre: 'Caja Piura',
            responsable: 'Administración',
            moneda: 'PEN',
            saldoInicial: 1000.00,
            ingresos: 500.00,
            egresos: 249.50,
            saldo: 1250.50,
            limite: 1500.00,
            estado: 'ACTIVA',
            fechaApertura: '01/08/2026'
        },

        {
            id: 2,
            codigo: 'CJ-002',
            nombre: 'Caja Tambo',
            responsable: 'Administración Tambo',
            moneda: 'PEN',
            saldoInicial: 595.00,
            ingresos: 300.00,
            egresos: 45.00,
            saldo: 850.00,
            limite: 1000.00,
            estado: 'ACTIVA',
            fechaApertura: '01/08/2026'
        },

        {
            id: 3,
            codigo: 'CJ-003',
            nombre: 'Caja Oficina 2',
            responsable: 'Recursos Humanos',
            moneda: 'PEN',
            saldoInicial: 420.00,
            ingresos: 0.00,
            egresos: 0.00,
            saldo: 420.00,
            limite: 800.00,
            estado: 'INACTIVA',
            fechaApertura: '01/07/2026'
        },

        {
            id: 4,
            codigo: 'CJ-004',
            nombre: 'Caja Dólares',
            responsable: 'Administración',
            moneda: 'USD',
            saldoInicial: 350.00,
            ingresos: 0.00,
            egresos: 0.00,
            saldo: 350.00,
            limite: 500.00,
            estado: 'ACTIVA',
            fechaApertura: '01/08/2026'
        }

    ]


    // =====================================================
    // MOVIMIENTOS
    // =====================================================

    const movimientos = [

        {
            id: 1,
            fecha: '30/08/2026',
            cajaId: 1,
            caja: 'Caja Piura',
            tipo: 'INGRESO',
            categoria: 'REPOSICIÓN',
            concepto: 'Reposición de caja chica',
            beneficiario: 'Administración',
            documento: 'RECIBO',
            numeroDocumento: '000125',
            monto: 500.00,
            usuario: 'Administrador',
            estado: 'REGISTRADO'
        },

        {
            id: 2,
            fecha: '30/08/2026',
            cajaId: 1,
            caja: 'Caja Piura',
            tipo: 'EGRESO',
            categoria: 'MOVILIDAD',
            concepto: 'Movilidad Piura - Tambo - Piura',
            beneficiario: 'Juan Pérez',
            documento: 'RECIBO',
            numeroDocumento: '000458',
            monto: 30.00,
            usuario: 'Administrador',
            estado: 'REGISTRADO'
        },

        {
            id: 3,
            fecha: '30/08/2026',
            cajaId: 1,
            caja: 'Caja Piura',
            tipo: 'EGRESO',
            categoria: 'MATERIALES',
            concepto: 'Compra de materiales',
            beneficiario: 'Ferretería Piura',
            documento: 'FACTURA',
            numeroDocumento: 'F001-004582',
            monto: 85.50,
            usuario: 'Administrador',
            estado: 'REGISTRADO'
        },

        {
            id: 4,
            fecha: '30/08/2026',
            cajaId: 1,
            caja: 'Caja Piura',
            tipo: 'EGRESO',
            categoria: 'ALIMENTACIÓN',
            concepto: 'Refrigerios reunión administrativa',
            beneficiario: 'Panadería Central',
            documento: 'BOLETA',
            numeroDocumento: 'B001-000985',
            monto: 54.00,
            usuario: 'Administrador',
            estado: 'REGISTRADO'
        },

        {
            id: 5,
            fecha: '29/08/2026',
            cajaId: 1,
            caja: 'Caja Piura',
            tipo: 'EGRESO',
            categoria: 'ÚTILES',
            concepto: 'Útiles de oficina',
            beneficiario: 'Librería Norte',
            documento: 'FACTURA',
            numeroDocumento: 'F001-002547',
            monto: 80.00,
            usuario: 'Administrador',
            estado: 'REGISTRADO'
        },

        {
            id: 6,
            fecha: '29/08/2026',
            cajaId: 2,
            caja: 'Caja Tambo',
            tipo: 'EGRESO',
            categoria: 'ÚTILES',
            concepto: 'Compra de útiles de oficina',
            beneficiario: 'Comercial Tambo',
            documento: 'BOLETA',
            numeroDocumento: 'B001-000325',
            monto: 45.00,
            usuario: 'Administrador',
            estado: 'REGISTRADO'
        },

        {
            id: 7,
            fecha: '29/08/2026',
            cajaId: 2,
            caja: 'Caja Tambo',
            tipo: 'INGRESO',
            categoria: 'REPOSICIÓN',
            concepto: 'Reposición de caja chica',
            beneficiario: 'Administración',
            documento: 'RECIBO',
            numeroDocumento: '000120',
            monto: 300.00,
            usuario: 'Administrador',
            estado: 'REGISTRADO'
        }

    ]


    // =====================================================
    // RENDICIONES
    // =====================================================

    const rendiciones = [

        {
            id: 1,
            codigo: 'REN-2026-001',
            caja: 'Caja Piura',
            periodo: 'Agosto 2026',
            responsable: 'Administración',
            fechaInicio: '01/08/2026',
            fechaFin: '30/08/2026',
            saldoInicial: 1000.00,
            ingresos: 500.00,
            egresos: 249.50,
            saldoFinal: 1250.50,
            estado: 'PENDIENTE'
        },

        {
            id: 2,
            codigo: 'REN-2026-002',
            caja: 'Caja Tambo',
            periodo: 'Agosto 2026',
            responsable: 'Administración Tambo',
            fechaInicio: '01/08/2026',
            fechaFin: '30/08/2026',
            saldoInicial: 595.00,
            ingresos: 300.00,
            egresos: 45.00,
            saldoFinal: 850.00,
            estado: 'RENDIDA'
        },

        {
            id: 3,
            codigo: 'REN-2026-003',
            caja: 'Caja Oficina 2',
            periodo: 'Julio 2026',
            responsable: 'Recursos Humanos',
            fechaInicio: '01/07/2026',
            fechaFin: '31/07/2026',
            saldoInicial: 420.00,
            ingresos: 0.00,
            egresos: 0.00,
            saldoFinal: 420.00,
            estado: 'CERRADA'
        }

    ]


    // =====================================================
    // CUADRES
    // =====================================================

    const cuadres = [

        {
            id: 1,
            codigo: 'CUA-2026-001',
            fecha: '30/08/2026',
            caja: 'Caja Piura',
            responsable: 'Administrador',
            saldoSistema: 1250.50,
            efectivoFisico: 1250.50,
            diferencia: 0.00,
            estado: 'CUADRADO'
        },

        {
            id: 2,
            codigo: 'CUA-2026-002',
            fecha: '29/08/2026',
            caja: 'Caja Tambo',
            responsable: 'Administrador',
            saldoSistema: 850.00,
            efectivoFisico: 830.00,
            diferencia: -20.00,
            estado: 'CON DIFERENCIA'
        },

        {
            id: 3,
            codigo: 'CUA-2026-003',
            fecha: '28/08/2026',
            caja: 'Caja Piura',
            responsable: 'Administrador',
            saldoSistema: 950.00,
            efectivoFisico: 950.00,
            diferencia: 0.00,
            estado: 'CUADRADO'
        },

        {
            id: 4,
            codigo: 'CUA-2026-004',
            fecha: '27/08/2026',
            caja: 'Caja Tambo',
            responsable: 'Administrador',
            saldoSistema: 595.00,
            efectivoFisico: 595.00,
            diferencia: 0.00,
            estado: 'CUADRADO'
        }

    ]


    // =====================================================
    // CATEGORÍAS
    // =====================================================

    const categorias = [

        'MOVILIDAD',
        'MATERIALES',
        'ÚTILES',
        'ALIMENTACIÓN',
        'SERVICIOS',
        'COMUNICACIONES',
        'REPOSICIÓN',
        'OTROS'

    ]


    // =====================================================
    // FORMATEAR MONTO
    // =====================================================

    const formatearMonto = (
        monto,
        moneda = 'PEN'
    ) => {

        return new Intl.NumberFormat(
            'es-PE',
            {
                style: 'currency',
                currency: moneda,
                minimumFractionDigits: 2
            }
        ).format(monto)

    }


    // =====================================================
    // FORMATEAR NÚMERO
    // =====================================================

    const formatearNumero = (
        monto
    ) => {

        return new Intl.NumberFormat(
            'es-PE',
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        ).format(monto)

    }


    // =====================================================
    // CAMBIAR TAB
    // =====================================================

    const cambiarTab = (
        tab
    ) => {

        setTabActual(tab)

    }


    // =====================================================
    // ABRIR MODAL
    // =====================================================

    const abrirModal = (
        tipo,
        dato = null
    ) => {

        setModalTipo(tipo)

        setMovimientoSeleccionado(
            tipo === 'MOVIMIENTO'
                ? dato
                : null
        )

        setCajaSeleccionada(
            tipo === 'CAJA' || tipo === 'EDITAR_CAJA'
                ? dato
                : null
        )

        if (tipo === 'NUEVO_CUADRE') {
            setCajaCuadre('')
            setFechaCuadre('2026-08-30')
            setObservacionCuadre('')
            setCantidadesEfectivo({
                200: 0,
                100: 0,
                50: 0,
                20: 0,
                10: 0,
                5: 0,
                2: 0,
                1: 0,
                0.50: 0,
                0.20: 0,
                0.10: 0,
                0.05: 0
            })
        }

        setModalAbierto(true)

    }


    // =====================================================
    // CERRAR MODAL
    // =====================================================

    const cerrarModal = () => {

        setModalAbierto(false)

        setModalTipo(null)

        setMovimientoSeleccionado(null)

        setCajaSeleccionada(null)

    }


    // =====================================================
    // LIMPIAR FILTROS MOVIMIENTOS
    // =====================================================

    const limpiarFiltrosMovimientos = () => {

        setBusquedaMovimiento('')

        setFiltroCaja('TODAS')

        setFiltroTipo('TODOS')

        setFiltroFechaDesde('')

        setFiltroFechaHasta('')

    }


    // =====================================================
    // FILTRAR MOVIMIENTOS
    // =====================================================

    const movimientosFiltrados = useMemo(() => {

        const texto =
            busquedaMovimiento
                .toLowerCase()
                .trim()


        return movimientos.filter(
            movimiento => {

                const coincideTexto =
                    !texto ||
                    movimiento.concepto
                        .toLowerCase()
                        .includes(texto) ||
                    movimiento.beneficiario
                        .toLowerCase()
                        .includes(texto) ||
                    movimiento.numeroDocumento
                        .toLowerCase()
                        .includes(texto) ||
                    movimiento.categoria
                        .toLowerCase()
                        .includes(texto)


                const coincideCaja =
                    filtroCaja === 'TODAS' ||
                    movimiento.cajaId.toString() === filtroCaja


                const coincideTipo =
                    filtroTipo === 'TODOS' ||
                    movimiento.tipo === filtroTipo


                return (
                    coincideTexto &&
                    coincideCaja &&
                    coincideTipo
                )

            }
        )

    }, [
        busquedaMovimiento,
        filtroCaja,
        filtroTipo
    ])


    // =====================================================
    // TOTALES MOVIMIENTOS
    // =====================================================

    const totalIngresos =
        movimientosFiltrados
            .filter(
                movimiento =>
                    movimiento.tipo === 'INGRESO'
            )
            .reduce(
                (
                    total,
                    movimiento
                ) =>
                    total + movimiento.monto,
                0
            )


    const totalEgresos =
        movimientosFiltrados
            .filter(
                movimiento =>
                    movimiento.tipo === 'EGRESO'
            )
            .reduce(
                (
                    total,
                    movimiento
                ) =>
                    total + movimiento.monto,
                0
            )


    // =====================================================
    // TOTALES GENERALES
    // =====================================================

    const cajasActivas =
        cajas.filter(
            caja =>
                caja.estado === 'ACTIVA'
        )


    const saldoTotalPEN =
        cajasActivas
            .filter(
                caja =>
                    caja.moneda === 'PEN'
            )
            .reduce(
                (
                    total,
                    caja
                ) =>
                    total + caja.saldo,
                0
            )


    const saldoTotalUSD =
        cajasActivas
            .filter(
                caja =>
                    caja.moneda === 'USD'
            )
            .reduce(
                (
                    total,
                    caja
                ) =>
                    total + caja.saldo,
                0
            )


    const rendicionesPendientes =
        rendiciones.filter(
            rendicion =>
                rendicion.estado === 'PENDIENTE'
        ).length


    const cuadresConDiferencia =
        cuadres.filter(
            cuadre =>
                cuadre.estado === 'CON DIFERENCIA'
        ).length


    // =====================================================
    // ESTILOS INLINE REUTILIZABLES
    // =====================================================

    const cardStyle = {

        backgroundColor: '#ffffff',

        border: '1px solid #dddddd',

        boxShadow: '0 1px 3px rgba(0,0,0,0.08)'

    }


    const sectionHeaderStyle = {

        backgroundColor: '#f5f5f5',

        borderBottom: '1px solid #dddddd',

        padding: '8px 12px',

        display: 'flex',

        alignItems: 'center',

        justifyContent: 'space-between',

        gap: '10px',

        flexWrap: 'wrap'

    }


    const compactButtonStyle = {

        whiteSpace: 'nowrap'

    }


    // =====================================================
    // BADGE ESTADO
    // =====================================================

    const renderEstadoCaja = (
        estado
    ) => {

        const clase =
            estado === 'ACTIVA'
                ? 'w3-tag w3-green'
                : 'w3-tag w3-grey'


        return (

            <span
                className={`${clase} w3-small`}
            >
                {estado}
            </span>

        )

    }


    // =====================================================
    // BADGE MOVIMIENTO
    // =====================================================

    const renderTipoMovimiento = (
        tipo
    ) => {

        if (tipo === 'INGRESO') {

            return (

                <span className="w3-text-green">

                    <i className="fa fa-arrow-circle-up"></i>

                    &nbsp;

                    <strong>
                        INGRESO
                    </strong>

                </span>

            )

        }


        return (

            <span className="w3-text-red">

                <i className="fa fa-arrow-circle-down"></i>

                &nbsp;

                <strong>
                    EGRESO
                </strong>

            </span>

        )

    }


    // =====================================================
    // BADGE RENDICIÓN
    // =====================================================

    const renderEstadoRendicion = (
        estado
    ) => {

        let clase = 'w3-grey'


        if (estado === 'PENDIENTE') {

            clase = 'w3-orange'

        }


        if (estado === 'RENDIDA') {

            clase = 'w3-green'

        }


        if (estado === 'CERRADA') {

            clase = 'w3-blue-grey'

        }


        return (

            <span
                className={`w3-tag ${clase} w3-small`}
            >
                {estado}
            </span>

        )

    }


    // =====================================================
    // BADGE CUADRE
    // =====================================================

    const renderEstadoCuadre = (
        estado
    ) => {

        if (estado === 'CUADRADO') {

            return (

                <span className="w3-tag w3-green w3-small">

                    <i className="fa fa-check"></i>

                    &nbsp;

                    CUADRADO

                </span>

            )

        }


        return (

            <span className="w3-tag w3-red w3-small">

                <i className="fa fa-warning"></i>

                &nbsp;

                CON DIFERENCIA

            </span>

        )

    }


    // =====================================================
    // RESUMEN - INDICADORES
    // =====================================================

    // const renderIndicadores = () => {

    //     return (

    //         <div className="w3-row-padding">


    //             {/* CAJAS */}

    //             <div className="w3-col l3 m6 s12">

    //                 <div
    //                     className="w3-card w3-white"
    //                     style={cardStyle}
    //                 >

    //                     <div className="w3-container">

    //                         <p
    //                             className="w3-text-grey w3-small"
    //                             style={{
    //                                 marginBottom: '4px'
    //                             }}
    //                         >

    //                             <i className="fa fa-archive"></i>

    //                             &nbsp;

    //                             Cajas activas

    //                         </p>


    //                         <div
    //                             style={{
    //                                 display: 'flex',
    //                                 justifyContent: 'space-between',
    //                                 alignItems: 'center'
    //                             }}
    //                         >

    //                             <strong
    //                                 style={{
    //                                     fontSize: '24px'
    //                                 }}
    //                             >
    //                                 {cajasActivas.length}
    //                             </strong>


    //                             <i
    //                                 className="fa fa-archive w3-text-grey"
    //                                 style={{
    //                                     fontSize: '22px'
    //                                 }}
    //                             ></i>

    //                         </div>


    //                         <p
    //                             className="w3-small w3-text-grey"
    //                             style={{
    //                                 marginTop: '4px'
    //                             }}
    //                         >
    //                             de {cajas.length} registradas
    //                         </p>

    //                     </div>

    //                 </div>

    //             </div>


    //             {/* SALDO PEN */}

    //             <div className="w3-col l3 m6 s12">

    //                 <div
    //                     className="w3-card w3-white"
    //                     style={cardStyle}
    //                 >

    //                     <div className="w3-container">

    //                         <p
    //                             className="w3-text-grey w3-small"
    //                             style={{
    //                                 marginBottom: '4px'
    //                             }}
    //                         >

    //                             <i className="fa fa-money"></i>

    //                             &nbsp;

    //                             Saldo disponible

    //                         </p>


    //                         <strong
    //                             style={{
    //                                 fontSize: '24px'
    //                             }}
    //                         >
    //                             {formatearMonto(
    //                                 saldoTotalPEN
    //                             )}
    //                         </strong>


    //                         <p
    //                             className="w3-small w3-text-grey"
    //                             style={{
    //                                 marginTop: '4px'
    //                             }}
    //                         >
    //                             Moneda PEN
    //                         </p>

    //                     </div>

    //                 </div>

    //             </div>


    //             {/* RENDICIONES */}

    //             <div className="w3-col l3 m6 s12">

    //                 <div
    //                     className="w3-card w3-white"
    //                     style={cardStyle}
    //                 >

    //                     <div className="w3-container">

    //                         <p
    //                             className="w3-text-grey w3-small"
    //                             style={{
    //                                 marginBottom: '4px'
    //                             }}
    //                         >

    //                             <i className="fa fa-file-text-o"></i>

    //                             &nbsp;

    //                             Rendiciones pendientes

    //                         </p>


    //                         <strong
    //                             className={
    //                                 rendicionesPendientes > 0
    //                                     ? 'w3-text-orange'
    //                                     : 'w3-text-green'
    //                             }
    //                             style={{
    //                                 fontSize: '24px'
    //                             }}
    //                         >
    //                             {rendicionesPendientes}
    //                         </strong>


    //                         <p
    //                             className="w3-small w3-text-grey"
    //                             style={{
    //                                 marginTop: '4px'
    //                             }}
    //                         >
    //                             requieren atención
    //                         </p>

    //                     </div>

    //                 </div>

    //             </div>


    //             {/* CUADRES */}

    //             <div className="w3-col l3 m6 s12">

    //                 <div
    //                     className="w3-card w3-white"
    //                     style={cardStyle}
    //                 >

    //                     <div className="w3-container">

    //                         <p
    //                             className="w3-text-grey w3-small"
    //                             style={{
    //                                 marginBottom: '4px'
    //                             }}
    //                         >

    //                             <i className="fa fa-balance-scale"></i>

    //                             &nbsp;

    //                             Cuadres con diferencia

    //                         </p>


    //                         <strong
    //                             className={
    //                                 cuadresConDiferencia > 0
    //                                     ? 'w3-text-red'
    //                                     : 'w3-text-green'
    //                             }
    //                             style={{
    //                                 fontSize: '24px'
    //                             }}
    //                         >
    //                             {cuadresConDiferencia}
    //                         </strong>


    //                         <p
    //                             className="w3-small w3-text-grey"
    //                             style={{
    //                                 marginTop: '4px'
    //                             }}
    //                         >
    //                             por revisar
    //                         </p>

    //                     </div>

    //                 </div>

    //             </div>


    //         </div>

    //     )

    // }


    // =====================================================
    // RESUMEN - CAJAS
    // =====================================================

    // const renderResumenCajas = () => {

    //     return (

    //         <div
    //             className="w3-card w3-white w3-margin-top"
    //             style={cardStyle}
    //         >

    //             <div style={sectionHeaderStyle}>

    //                 <div>

    //                     <strong>

    //                         <i className="fa fa-archive"></i>

    //                         &nbsp;

    //                         Cajas disponibles

    //                     </strong>

    //                     <div
    //                         className="w3-small w3-text-grey"
    //                     >
    //                         Estado y saldo actual de las cajas.
    //                     </div>

    //                 </div>


    //                 <button
    //                     className="w3-button w3-flat-midnight-blue w3-round-small w3-small"
    //                     style={compactButtonStyle}
    //                     onClick={() =>
    //                         cambiarTab('CAJAS')
    //                     }
    //                 >

    //                     <i className="fa fa-list"></i>

    //                     &nbsp;

    //                     Administrar cajas

    //                 </button>

    //             </div>


    //             <div className="w3-responsive">

    //                 <table
    //                     className="w3-table-all w3-small"
    //                 >

    //                     <thead>

    //                         <tr>

    //                             <th>
    //                                 Código
    //                             </th>

    //                             <th>
    //                                 Caja
    //                             </th>

    //                             <th>
    //                                 Responsable
    //                             </th>

    //                             <th>
    //                                 Moneda
    //                             </th>

    //                             <th className="w3-right-align">
    //                                 Saldo
    //                             </th>

    //                             <th className="w3-right-align">
    //                                 Límite
    //                             </th>

    //                             <th>
    //                                 Estado
    //                             </th>

    //                             <th className="w3-center">
    //                                 Acción
    //                             </th>

    //                         </tr>

    //                     </thead>


    //                     <tbody>

    //                         {cajas.map(
    //                             caja => (

    //                                 <tr
    //                                     key={caja.id}
    //                                     className="w3-hover-light-grey"
    //                                 >

    //                                     <td>
    //                                         {caja.codigo}
    //                                     </td>

    //                                     <td>
    //                                         <strong>
    //                                             {caja.nombre}
    //                                         </strong>
    //                                     </td>

    //                                     <td>
    //                                         {caja.responsable}
    //                                     </td>

    //                                     <td>
    //                                         {caja.moneda}
    //                                     </td>

    //                                     <td className="w3-right-align">

    //                                         <strong>
    //                                             {formatearMonto(
    //                                                 caja.saldo,
    //                                                 caja.moneda
    //                                             )}
    //                                         </strong>

    //                                     </td>

    //                                     <td className="w3-right-align">

    //                                         {formatearMonto(
    //                                             caja.limite,
    //                                             caja.moneda
    //                                         )}

    //                                     </td>

    //                                     <td>

    //                                         {renderEstadoCaja(
    //                                             caja.estado
    //                                         )}

    //                                     </td>

    //                                     <td className="w3-center">

    //                                         <button
    //                                             className="w3-button w3-light-grey w3-border w3-round-small w3-small"
    //                                             title="Ver caja"
    //                                             onClick={() =>
    //                                                 abrirModal(
    //                                                     'CAJA',
    //                                                     caja
    //                                                 )
    //                                             }
    //                                         >

    //                                             <i className="fa fa-eye"></i>

    //                                         </button>

    //                                     </td>

    //                                 </tr>

    //                             )
    //                         )}

    //                     </tbody>

    //                 </table>

    //             </div>

    //         </div>

    //     )

    // }


    // =====================================================
    // RESUMEN - ÚLTIMOS MOVIMIENTOS
    // =====================================================

    const renderUltimosMovimientos = () => {

        const ultimos =
            movimientos.slice(
                0,
                5
            )


        return (

            <div
                className="w3-card w3-white w3-margin-top"
                style={cardStyle}
            >

                <div style={sectionHeaderStyle}>

                    <div>

                        <strong>

                            <i className="fa fa-exchange"></i>

                            &nbsp;

                            Últimos movimientos

                        </strong>

                        <div
                            className="w3-small w3-text-grey"
                        >
                            Movimientos registrados recientemente.
                        </div>

                    </div>


                    <button
                        className="w3-button w3-light-grey w3-border w3-round-small w3-small"
                        onClick={() =>
                            cambiarTab('MOVIMIENTOS')
                        }
                    >

                        Ver todos

                        &nbsp;

                        <i className="fa fa-angle-right"></i>

                    </button>

                </div>


                <div className="w3-responsive">

                    <table
                        className="w3-table-all w3-small"
                    >

                        <thead>

                            <tr>

                                <th>
                                    Fecha
                                </th>

                                <th>
                                    Caja
                                </th>

                                <th>
                                    Tipo
                                </th>

                                <th>
                                    Concepto
                                </th>

                                <th>
                                    Documento
                                </th>

                                <th className="w3-right-align">
                                    Monto
                                </th>

                                <th className="w3-center">
                                    Acción
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {ultimos.map(
                                movimiento => (

                                    <tr
                                        key={movimiento.id}
                                        className="w3-hover-light-grey"
                                    >

                                        <td>
                                            {movimiento.fecha}
                                        </td>

                                        <td>
                                            {movimiento.caja}
                                        </td>

                                        <td>

                                            {renderTipoMovimiento(
                                                movimiento.tipo
                                            )}

                                        </td>

                                        <td>
                                            {movimiento.concepto}
                                        </td>

                                        <td>

                                            {movimiento.documento}

                                            <br />

                                            <span className="w3-text-grey">
                                                {movimiento.numeroDocumento}
                                            </span>

                                        </td>

                                        <td className="w3-right-align">

                                            <strong>
                                                {formatearMonto(
                                                    movimiento.monto
                                                )}
                                            </strong>

                                        </td>

                                        <td className="w3-center">

                                            <button
                                                className="w3-button w3-light-grey w3-border w3-round-small w3-small"
                                                onClick={() =>
                                                    abrirModal(
                                                        'MOVIMIENTO',
                                                        movimiento
                                                    )
                                                }
                                            >

                                                <i className="fa fa-eye"></i>

                                            </button>

                                        </td>

                                    </tr>

                                )
                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        )

    }


    // =====================================================
    // RESUMEN
    // =====================================================

    const renderResumen = () => {

        return (

            <>

                {/* {renderIndicadores()} */}

                {/* {renderResumenCajas()} */}

                {renderUltimosMovimientos()}

            </>

        )

    }


    // =====================================================
    // FILTROS MOVIMIENTOS
    // =====================================================

    const renderFiltrosMovimientos = () => {

        return (

            <div
                className="w3-card w3-white w3-margin-bottom"
                style={cardStyle}
            >

                <div style={sectionHeaderStyle}>

                    <strong>

                        <i className="fa fa-filter"></i>

                        &nbsp;

                        Filtros de búsqueda

                    </strong>


                    <button
                        className="w3-button w3-light-grey w3-border w3-round-small w3-small"
                        onClick={
                            limpiarFiltrosMovimientos
                        }
                    >

                        <i className="fa fa-eraser"></i>

                        &nbsp;

                        Limpiar

                    </button>

                </div>


                <div className="w3-container w3-padding-16">

                    <div className="w3-row-padding">


                        {/* BÚSQUEDA */}

                        <div className="w3-col l4 m6 s12">

                            <label className="w3-small">

                                Buscar

                            </label>

                            <input
                                className="w3-input w3-border w3-round-small w3-small"
                                type="text"
                                placeholder="Concepto, beneficiario o documento..."
                                value={
                                    busquedaMovimiento
                                }
                                onChange={event =>
                                    setBusquedaMovimiento(
                                        event.target.value
                                    )
                                }
                            />

                        </div>


                        {/* CAJA */}

                        <div className="w3-col l2 m6 s12">

                            <label className="w3-small">

                                Caja

                            </label>

                            <select
                                className="w3-select w3-border w3-round-small w3-small"
                                value={filtroCaja}
                                onChange={event =>
                                    setFiltroCaja(
                                        event.target.value
                                    )
                                }
                            >

                                <option value="TODAS">
                                    Todas
                                </option>

                                {cajas.map(
                                    caja => (

                                        <option
                                            key={caja.id}
                                            value={caja.id}
                                        >
                                            {caja.nombre}
                                        </option>

                                    )
                                )}

                            </select>

                        </div>


                        {/* TIPO */}

                        <div className="w3-col l2 m6 s12">

                            <label className="w3-small">

                                Tipo

                            </label>

                            <select
                                className="w3-select w3-border w3-round-small w3-small"
                                value={filtroTipo}
                                onChange={event =>
                                    setFiltroTipo(
                                        event.target.value
                                    )
                                }
                            >

                                <option value="TODOS">
                                    Todos
                                </option>

                                <option value="INGRESO">
                                    Ingresos
                                </option>

                                <option value="EGRESO">
                                    Egresos
                                </option>

                            </select>

                        </div>


                        {/* DESDE */}

                        <div className="w3-col l2 m6 s12">

                            <label className="w3-small">

                                Desde

                            </label>

                            <input
                                className="w3-input w3-border w3-round-small w3-small"
                                type="date"
                                value={
                                    filtroFechaDesde
                                }
                                onChange={event =>
                                    setFiltroFechaDesde(
                                        event.target.value
                                    )
                                }
                            />

                        </div>


                        {/* HASTA */}

                        <div className="w3-col l2 m6 s12">

                            <label className="w3-small">

                                Hasta

                            </label>

                            <input
                                className="w3-input w3-border w3-round-small w3-small"
                                type="date"
                                value={
                                    filtroFechaHasta
                                }
                                onChange={event =>
                                    setFiltroFechaHasta(
                                        event.target.value
                                    )
                                }
                            />

                        </div>

                    </div>

                </div>

            </div>

        )

    }


    // =====================================================
    // MOVIMIENTOS
    // =====================================================

    const renderMovimientos = () => {

        return (

            <>

                {renderFiltrosMovimientos()}


                <div
                    className="w3-card w3-white"
                    style={cardStyle}
                >

                    <div style={sectionHeaderStyle}>

                        <div>

                            <strong>

                                <i className="fa fa-exchange"></i>

                                &nbsp;

                                Movimientos de caja

                            </strong>

                            <div
                                className="w3-small w3-text-grey"
                            >
                                {movimientosFiltrados.length}
                                &nbsp;
                                registros encontrados.
                            </div>

                        </div>


                        <button
                            className="w3-button w3-flat-midnight-blue w3-round-small w3-small"
                            style={compactButtonStyle}
                            onClick={() =>
                                abrirModal(
                                    'NUEVO_MOVIMIENTO'
                                )
                            }
                        >

                            <i className="fa fa-plus"></i>

                            &nbsp;

                            Nuevo movimiento

                        </button>

                    </div>


                    {/* RESUMEN DE MOVIMIENTOS */}

                    <div
                        className="w3-container w3-padding-small"
                        style={{
                            borderBottom:
                                '1px solid #dddddd'
                        }}
                    >

                        <div
                            style={{
                                display: 'flex',
                                gap: '25px',
                                flexWrap: 'wrap'
                            }}
                        >

                            <span className="w3-small">

                                Ingresos:

                                &nbsp;

                                <strong className="w3-text-green">

                                    {formatearMonto(
                                        totalIngresos
                                    )}

                                </strong>

                            </span>


                            <span className="w3-small">

                                Egresos:

                                &nbsp;

                                <strong className="w3-text-red">

                                    {formatearMonto(
                                        totalEgresos
                                    )}

                                </strong>

                            </span>


                            <span className="w3-small">

                                Movimiento neto:

                                &nbsp;

                                <strong>

                                    {formatearMonto(
                                        totalIngresos -
                                        totalEgresos
                                    )}

                                </strong>

                            </span>

                        </div>

                    </div>


                    <div className="w3-responsive">

                        <table
                            className="w3-table-all w3-small"
                        >

                            <thead>

                                <tr>

                                    <th>
                                        Fecha
                                    </th>

                                    <th>
                                        Caja
                                    </th>

                                    <th>
                                        Tipo
                                    </th>

                                    <th>
                                        Categoría
                                    </th>

                                    <th>
                                        Concepto
                                    </th>

                                    <th>
                                        Beneficiario
                                    </th>

                                    <th>
                                        Documento
                                    </th>

                                    <th className="w3-right-align">
                                        Monto
                                    </th>

                                    <th className="w3-center">
                                        Estado
                                    </th>

                                    <th className="w3-center">
                                        Acción
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {movimientosFiltrados.length === 0 && (

                                    <tr>

                                        <td
                                            colSpan="10"
                                            className="w3-center w3-text-grey"
                                        >

                                            No se encontraron
                                            movimientos.

                                        </td>

                                    </tr>

                                )}


                                {movimientosFiltrados.map(
                                    movimiento => (

                                        <tr
                                            key={movimiento.id}
                                            className="w3-hover-light-grey"
                                        >

                                            <td>
                                                {movimiento.fecha}
                                            </td>

                                            <td>
                                                {movimiento.caja}
                                            </td>

                                            <td>

                                                {renderTipoMovimiento(
                                                    movimiento.tipo
                                                )}

                                            </td>

                                            <td>
                                                {movimiento.categoria}
                                            </td>

                                            <td>
                                                {movimiento.concepto}
                                            </td>

                                            <td>
                                                {movimiento.beneficiario}
                                            </td>

                                            <td>

                                                {movimiento.documento}

                                                <br />

                                                <span className="w3-text-grey">
                                                    {movimiento.numeroDocumento}
                                                </span>

                                            </td>

                                            <td className="w3-right-align">

                                                <strong>

                                                    {formatearMonto(
                                                        movimiento.monto
                                                    )}

                                                </strong>

                                            </td>

                                            <td className="w3-center">

                                                <span className="w3-tag w3-green w3-small">

                                                    {movimiento.estado}

                                                </span>

                                            </td>

                                            <td className="w3-center">

                                                <button
                                                    className="w3-button w3-light-grey w3-border w3-round-small w3-small"
                                                    title="Ver movimiento"
                                                    onClick={() =>
                                                        abrirModal(
                                                            'MOVIMIENTO',
                                                            movimiento
                                                        )
                                                    }
                                                >

                                                    <i className="fa fa-eye"></i>

                                                </button>

                                            </td>

                                        </tr>

                                    )
                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </>

        )

    }


    // =====================================================
    // RENDICIONES
    // =====================================================

    const renderRendiciones = () => {

        const rendicionesFiltradas =
            rendiciones.filter(
                rendicion =>
                    filtroEstadoRendicion === 'TODOS' ||
                    rendicion.estado === filtroEstadoRendicion
            )


        return (

            <div
                className="w3-card w3-white"
                style={cardStyle}
            >

                <div style={sectionHeaderStyle}>

                    <div>

                        <strong>

                            <i className="fa fa-file-text-o"></i>

                            &nbsp;

                            Rendiciones de caja

                        </strong>

                        <div
                            className="w3-small w3-text-grey"
                        >
                            Control y cierre de rendiciones.
                        </div>

                    </div>


                    <div>

                        <select
                            className="w3-select w3-border w3-round-small w3-small"
                            style={{
                                width: '150px',
                                display: 'inline-block',
                                marginRight: '6px'
                            }}
                            value={
                                filtroEstadoRendicion
                            }
                            onChange={event =>
                                setFiltroEstadoRendicion(
                                    event.target.value
                                )
                            }
                        >

                            <option value="TODOS">
                                Todos los estados
                            </option>

                            <option value="PENDIENTE">
                                Pendiente
                            </option>

                            <option value="RENDIDA">
                                Rendida
                            </option>

                            <option value="CERRADA">
                                Cerrada
                            </option>

                        </select>


                        <button
                            className="w3-button w3-flat-midnight-blue w3-round-small w3-small"
                            onClick={() =>
                                abrirModal(
                                    'NUEVA_RENDICION'
                                )
                            }
                        >

                            <i className="fa fa-plus"></i>

                            &nbsp;

                            Nueva rendición

                        </button>

                    </div>

                </div>


                <div className="w3-responsive">

                    <table
                        className="w3-table-all w3-small"
                    >

                        <thead>

                            <tr>

                                <th>
                                    Código
                                </th>

                                <th>
                                    Caja
                                </th>

                                <th>
                                    Periodo
                                </th>

                                <th>
                                    Responsable
                                </th>

                                <th className="w3-right-align">
                                    Saldo inicial
                                </th>

                                <th className="w3-right-align">
                                    Ingresos
                                </th>

                                <th className="w3-right-align">
                                    Egresos
                                </th>

                                <th className="w3-right-align">
                                    Saldo final
                                </th>

                                <th className="w3-center">
                                    Estado
                                </th>

                                <th className="w3-center">
                                    Acción
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {rendicionesFiltradas.map(
                                rendicion => (

                                    <tr
                                        key={rendicion.id}
                                        className="w3-hover-light-grey"
                                    >

                                        <td>
                                            {rendicion.codigo}
                                        </td>

                                        <td>
                                            <strong>
                                                {rendicion.caja}
                                            </strong>
                                        </td>

                                        <td>
                                            {rendicion.periodo}
                                        </td>

                                        <td>
                                            {rendicion.responsable}
                                        </td>

                                        <td className="w3-right-align">

                                            {formatearMonto(
                                                rendicion.saldoInicial
                                            )}

                                        </td>

                                        <td className="w3-right-align w3-text-green">

                                            {formatearMonto(
                                                rendicion.ingresos
                                            )}

                                        </td>

                                        <td className="w3-right-align w3-text-red">

                                            {formatearMonto(
                                                rendicion.egresos
                                            )}

                                        </td>

                                        <td className="w3-right-align">

                                            <strong>

                                                {formatearMonto(
                                                    rendicion.saldoFinal
                                                )}

                                            </strong>

                                        </td>

                                        <td className="w3-center">

                                            {renderEstadoRendicion(
                                                rendicion.estado
                                            )}

                                        </td>

                                        <td className="w3-center">

                                            <button
                                                className="w3-button w3-light-grey w3-border w3-round-small w3-small"
                                                title="Ver rendición"
                                                onClick={() =>
                                                    abrirModal(
                                                        'RENDICION',
                                                        rendicion
                                                    )
                                                }
                                            >

                                                <i className="fa fa-eye"></i>

                                            </button>

                                        </td>

                                    </tr>

                                )
                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        )

    }


    // =====================================================
    // CUADRES
    // =====================================================

    const renderCuadres = () => {

        const cuadresFiltrados =
            cuadres.filter(
                cuadre =>
                    filtroEstadoCuadre === 'TODOS' ||
                    cuadre.estado === filtroEstadoCuadre
            )


        return (

            <div
                className="w3-card w3-white"
                style={cardStyle}
            >

                <div style={sectionHeaderStyle}>

                    <div>

                        <strong>

                            <i className="fa fa-balance-scale"></i>

                            &nbsp;

                            Cuadres de caja

                        </strong>

                        <div
                            className="w3-small w3-text-grey"
                        >
                            Comparación entre saldo del sistema y efectivo físico.
                        </div>

                    </div>


                    <div>

                        <select
                            className="w3-select w3-border w3-round-small w3-small"
                            style={{
                                width: '165px',
                                display: 'inline-block',
                                marginRight: '6px'
                            }}
                            value={
                                filtroEstadoCuadre
                            }
                            onChange={event =>
                                setFiltroEstadoCuadre(
                                    event.target.value
                                )
                            }
                        >

                            <option value="TODOS">
                                Todos los estados
                            </option>

                            <option value="CUADRADO">
                                Cuadrados
                            </option>

                            <option value="CON DIFERENCIA">
                                Con diferencia
                            </option>

                        </select>


                        <button
                            className="w3-button w3-flat-midnight-blue w3-round-small w3-small"
                            onClick={() =>
                                abrirModal(
                                    'NUEVO_CUADRE'
                                )
                            }
                        >

                            <i className="fa fa-calculator"></i>

                            &nbsp;

                            Nuevo cuadre

                        </button>

                    </div>

                </div>


                <div className="w3-responsive">

                    <table
                        className="w3-table-all w3-small"
                    >

                        <thead>

                            <tr>

                                <th>
                                    Código
                                </th>

                                <th>
                                    Fecha
                                </th>

                                <th>
                                    Caja
                                </th>

                                <th>
                                    Responsable
                                </th>

                                <th className="w3-right-align">
                                    Saldo sistema
                                </th>

                                <th className="w3-right-align">
                                    Efectivo físico
                                </th>

                                <th className="w3-right-align">
                                    Diferencia
                                </th>

                                <th className="w3-center">
                                    Estado
                                </th>

                                <th className="w3-center">
                                    Acción
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {cuadresFiltrados.map(
                                cuadre => (

                                    <tr
                                        key={cuadre.id}
                                        className="w3-hover-light-grey"
                                    >

                                        <td>
                                            {cuadre.codigo}
                                        </td>

                                        <td>
                                            {cuadre.fecha}
                                        </td>

                                        <td>
                                            <strong>
                                                {cuadre.caja}
                                            </strong>
                                        </td>

                                        <td>
                                            {cuadre.responsable}
                                        </td>

                                        <td className="w3-right-align">

                                            {formatearMonto(
                                                cuadre.saldoSistema
                                            )}

                                        </td>

                                        <td className="w3-right-align">

                                            {formatearMonto(
                                                cuadre.efectivoFisico
                                            )}

                                        </td>

                                        <td className="w3-right-align">

                                            <strong
                                                className={
                                                    cuadre.diferencia === 0
                                                        ? 'w3-text-green'
                                                        : 'w3-text-red'
                                                }
                                            >

                                                {formatearMonto(
                                                    cuadre.diferencia
                                                )}

                                            </strong>

                                        </td>

                                        <td className="w3-center">

                                            {renderEstadoCuadre(
                                                cuadre.estado
                                            )}

                                        </td>

                                        <td className="w3-center">

                                            <button
                                                className="w3-button w3-light-grey w3-border w3-round-small w3-small"
                                                title="Ver cuadre"
                                                onClick={() =>
                                                    abrirModal(
                                                        'CUADRE',
                                                        cuadre
                                                    )
                                                }
                                            >

                                                <i className="fa fa-eye"></i>

                                            </button>

                                        </td>

                                    </tr>

                                )
                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        )

    }


    // =====================================================
    // CAJAS
    // =====================================================

    const renderCajas = () => {

        return (

            <div
                className="w3-card w3-white"
                style={cardStyle}
            >

                <div style={sectionHeaderStyle}>

                    <div>

                        <strong>

                            <i className="fa fa-archive"></i>

                            &nbsp;

                            Administración de cajas

                        </strong>

                        <div
                            className="w3-small w3-text-grey"
                        >
                            Registro, responsables, límites y estado.
                        </div>

                    </div>


                    <button
                        className="w3-button w3-flat-midnight-blue w3-round-small w3-small"
                        onClick={() =>
                            abrirModal(
                                'NUEVA_CAJA'
                            )
                        }
                    >

                        <i className="fa fa-plus"></i>

                        &nbsp;

                        Nueva caja

                    </button>

                </div>


                <div className="w3-responsive">

                    <table
                        className="w3-table-all w3-small"
                    >

                        <thead>

                            <tr>

                                <th>
                                    Código
                                </th>

                                <th>
                                    Nombre
                                </th>

                                <th>
                                    Responsable
                                </th>

                                <th>
                                    Moneda
                                </th>

                                <th className="w3-right-align">
                                    Saldo inicial
                                </th>

                                <th className="w3-right-align">
                                    Límite
                                </th>

                                <th className="w3-right-align">
                                    Saldo actual
                                </th>

                                <th>
                                    Apertura
                                </th>

                                <th>
                                    Estado
                                </th>

                                <th className="w3-center">
                                    Acción
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {cajas.map(
                                caja => (

                                    <tr
                                        key={caja.id}
                                        className="w3-hover-light-grey"
                                    >

                                        <td>
                                            {caja.codigo}
                                        </td>

                                        <td>

                                            <strong>
                                                {caja.nombre}
                                            </strong>

                                        </td>

                                        <td>
                                            {caja.responsable}
                                        </td>

                                        <td>
                                            {caja.moneda}
                                        </td>

                                        <td className="w3-right-align">

                                            {formatearMonto(
                                                caja.saldoInicial,
                                                caja.moneda
                                            )}

                                        </td>

                                        <td className="w3-right-align">

                                            {formatearMonto(
                                                caja.limite,
                                                caja.moneda
                                            )}

                                        </td>

                                        <td className="w3-right-align">

                                            <strong>

                                                {formatearMonto(
                                                    caja.saldo,
                                                    caja.moneda
                                                )}

                                            </strong>

                                        </td>

                                        <td>
                                            {caja.fechaApertura}
                                        </td>

                                        <td>

                                            {renderEstadoCaja(
                                                caja.estado
                                            )}

                                        </td>

                                        <td className="w3-center">

                                            <button
                                                className="w3-button w3-light-grey w3-border w3-round-small w3-small"
                                                title="Ver caja"
                                                onClick={() =>
                                                    abrirModal(
                                                        'CAJA',
                                                        caja
                                                    )
                                                }
                                            >

                                                <i className="fa fa-eye"></i>

                                            </button>

                                            &nbsp;

                                            <button
                                                className="w3-button w3-light-grey w3-border w3-round-small w3-small"
                                                title="Editar caja"
                                                onClick={() =>
                                                    abrirModal(
                                                        'EDITAR_CAJA',
                                                        caja
                                                    )
                                                }
                                            >

                                                <i className="fa fa-pencil"></i>

                                            </button>

                                        </td>

                                    </tr>

                                )
                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        )

    }


    // =====================================================
    // FORMULARIO NUEVO MOVIMIENTO
    // =====================================================

    const renderFormularioMovimiento = () => {

        return (

            <div className="w3-container">

                <div className="w3-row-padding">


                    <div className="w3-col l4 m6 s12">

                        <label className="w3-small">
                            Tipo de movimiento *
                        </label>

                        <select
                            className="w3-select w3-border w3-round-small w3-small"
                            value={tipoMovimiento}
                            onChange={event =>
                                setTipoMovimiento(
                                    event.target.value
                                )
                            }
                        >

                            <option value="EGRESO">
                                Egreso
                            </option>

                            <option value="INGRESO">
                                Ingreso
                            </option>

                        </select>

                    </div>


                    <div className="w3-col l4 m6 s12">

                        <label className="w3-small">
                            Caja *
                        </label>

                        <select
                            className="w3-select w3-border w3-round-small w3-small"
                            value={cajaMovimiento}
                            onChange={event =>
                                setCajaMovimiento(
                                    event.target.value
                                )
                            }
                        >

                            <option value="">
                                Seleccione
                            </option>

                            {cajas
                                .filter(
                                    caja =>
                                        caja.estado === 'ACTIVA'
                                )
                                .map(
                                    caja => (

                                        <option
                                            key={caja.id}
                                            value={caja.id}
                                        >
                                            {caja.nombre}
                                        </option>

                                    )
                                )}

                        </select>

                    </div>


                    <div className="w3-col l4 m6 s12">

                        <label className="w3-small">
                            Fecha *
                        </label>

                        <input
                            className="w3-input w3-border w3-round-small w3-small"
                            type="date"
                            value={fechaMovimiento}
                            onChange={event =>
                                setFechaMovimiento(
                                    event.target.value
                                )
                            }
                        />

                    </div>


                    <div className="w3-col l4 m6 s12">

                        <label className="w3-small">
                            Categoría *
                        </label>

                        <select
                            className="w3-select w3-border w3-round-small w3-small"
                            value={categoriaMovimiento}
                            onChange={event =>
                                setCategoriaMovimiento(
                                    event.target.value
                                )
                            }
                        >

                            <option value="">
                                Seleccione
                            </option>

                            {categorias.map(
                                categoria => (

                                    <option
                                        key={categoria}
                                        value={categoria}
                                    >
                                        {categoria}
                                    </option>

                                )
                            )}

                        </select>

                    </div>


                    <div className="w3-col l8 m12 s12">

                        <label className="w3-small">
                            Concepto *
                        </label>

                        <input
                            className="w3-input w3-border w3-round-small w3-small"
                            type="text"
                            placeholder="Ingrese el concepto del movimiento"
                            value={conceptoMovimiento}
                            onChange={event =>
                                setConceptoMovimiento(
                                    event.target.value
                                )
                            }
                        />

                    </div>


                    <div className="w3-col l6 m6 s12">

                        <label className="w3-small">
                            Beneficiario / proveedor *
                        </label>

                        <input
                            className="w3-input w3-border w3-round-small w3-small"
                            type="text"
                            placeholder="Nombre del beneficiario"
                            value={beneficiarioMovimiento}
                            onChange={event =>
                                setBeneficiarioMovimiento(
                                    event.target.value
                                )
                            }
                        />

                    </div>


                    <div className="w3-col l3 m6 s12">

                        <label className="w3-small">
                            Documento
                        </label>

                        <select
                            className="w3-select w3-border w3-round-small w3-small"
                            value={tipoDocumento}
                            onChange={event =>
                                setTipoDocumento(
                                    event.target.value
                                )
                            }
                        >

                            <option value="">
                                Seleccione
                            </option>

                            <option value="FACTURA">
                                Factura
                            </option>

                            <option value="BOLETA">
                                Boleta
                            </option>

                            <option value="RECIBO">
                                Recibo
                            </option>

                            <option value="OTRO">
                                Otro
                            </option>

                        </select>

                    </div>


                    <div className="w3-col l3 m6 s12">

                        <label className="w3-small">
                            N.º documento
                        </label>

                        <input
                            className="w3-input w3-border w3-round-small w3-small"
                            type="text"
                            placeholder="000000"
                            value={numeroDocumento}
                            onChange={event =>
                                setNumeroDocumento(
                                    event.target.value
                                )
                            }
                        />

                    </div>


                    <div className="w3-col l4 m6 s12">

                        <label className="w3-small">
                            Monto *
                        </label>

                        <input
                            className="w3-input w3-border w3-round-small w3-small"
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            value={montoMovimiento}
                            onChange={event =>
                                setMontoMovimiento(
                                    event.target.value
                                )
                            }
                        />

                    </div>


                    <div className="w3-col l8 m6 s12">

                        <label className="w3-small">
                            Observación
                        </label>

                        <input
                            className="w3-input w3-border w3-round-small w3-small"
                            type="text"
                            placeholder="Observación adicional"
                            value={observacionMovimiento}
                            onChange={event =>
                                setObservacionMovimiento(
                                    event.target.value
                                )
                            }
                        />

                    </div>

                </div>

            </div>

        )

    }


    // =====================================================
    // CUADRE - CÁLCULOS
    // =====================================================

    const cajaCuadreSeleccionada =
        cajas.find(
            caja =>
                caja.id.toString() === cajaCuadre
        )

    const efectivoFisicoCalculado =
        denominaciones.reduce(
            (total, denominacion) =>
                total +
                Number(denominacion.valor) *
                Number(
                    cantidadesEfectivo[denominacion.valor] || 0
                ),
            0
        )

    const saldoSistemaCuadre =
        cajaCuadreSeleccionada
            ? cajaCuadreSeleccionada.saldo
            : 0

    const diferenciaCuadre =
        efectivoFisicoCalculado - saldoSistemaCuadre


    const actualizarCantidadEfectivo = (
        valor,
        cantidad
    ) => {

        const cantidadNumerica = Math.max(
            0,
            Number.parseInt(cantidad, 10) || 0
        )

        setCantidadesEfectivo(
            anterior => ({
                ...anterior,
                [valor]: cantidadNumerica
            })
        )
    }


    // =====================================================
    // FORMULARIO NUEVO CUADRE
    // =====================================================

    const renderFormularioCuadre = () => {

        return (
            <div>

                <div
                    className="w3-row-padding"
                    style={{ marginBottom: '8px' }}
                >

                    <div className="w3-col l6 m6 s12">

                        <label className="w3-small">
                            Caja *
                        </label>

                        <select
                            className="w3-select w3-border w3-round-small w3-small"
                            value={cajaCuadre}
                            onChange={event =>
                                setCajaCuadre(
                                    event.target.value
                                )
                            }
                        >

                            <option value="">
                                Seleccione una caja
                            </option>

                            {cajas
                                .filter(
                                    caja =>
                                        caja.estado === 'ACTIVA'
                                )
                                .map(
                                    caja => (
                                        <option
                                            key={caja.id}
                                            value={caja.id}
                                        >
                                            {caja.nombre} - {caja.moneda}
                                        </option>
                                    )
                                )}

                        </select>

                    </div>

                    <div className="w3-col l6 m6 s12">

                        <label className="w3-small">
                            Fecha del cuadre *
                        </label>

                        <input
                            className="w3-input w3-border w3-round-small w3-small"
                            type="date"
                            value={fechaCuadre}
                            onChange={event =>
                                setFechaCuadre(
                                    event.target.value
                                )
                            }
                        />

                    </div>

                </div>

                {!cajaCuadreSeleccionada && (
                    <div
                        className="w3-panel w3-pale-blue w3-border"
                        style={{ margin: '8px 0 0' }}
                    >
                        <p className="w3-small" style={{ margin: 0 }}>
                            <i className="fa fa-info-circle"></i>
                            &nbsp; Seleccione una caja para iniciar el conteo del efectivo físico.
                        </p>
                    </div>
                )}

                {cajaCuadreSeleccionada && (
                    <>

                        <div
                            className="w3-panel w3-light-grey w3-border"
                            style={{ margin: '10px 8px' }}
                        >
                            <div className="w3-row-padding">

                                <div className="w3-col l4 m4 s12">
                                    <span className="w3-small w3-text-grey">
                                        Caja
                                    </span>
                                    <br />
                                    <strong className="w3-small">
                                        {cajaCuadreSeleccionada.nombre}
                                    </strong>
                                </div>

                                <div className="w3-col l4 m4 s12">
                                    <span className="w3-small w3-text-grey">
                                        Moneda
                                    </span>
                                    <br />
                                    <strong className="w3-small">
                                        {cajaCuadreSeleccionada.moneda}
                                    </strong>
                                </div>

                                <div className="w3-col l4 m4 s12 w3-right-align">
                                    <span className="w3-small w3-text-grey">
                                        Saldo según sistema
                                    </span>
                                    <br />
                                    <strong className="w3-small">
                                        {formatearMonto(
                                            saldoSistemaCuadre,
                                            cajaCuadreSeleccionada.moneda
                                        )}
                                    </strong>
                                </div>

                            </div>
                        </div>

                        <div
                            className="w3-responsive"
                            style={{ marginTop: '10px' }}
                        >
                            <table className="w3-table-all w3-small">
                                <thead>
                                    <tr>
                                        <th>Tipo</th>
                                        <th className="w3-right-align">Cantidad</th>
                                        <th className="w3-right-align">Denominación</th>
                                        <th className="w3-right-align">Total S/</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {denominaciones.map(
                                        denominacion => {
                                            const cantidad =
                                                cantidadesEfectivo[denominacion.valor] || 0

                                            const total =
                                                cantidad * denominacion.valor

                                            return (
                                                <tr key={denominacion.valor}>
                                                    <td>
                                                        {denominacion.tipo === 'BILLETE'
                                                            ? 'Billete'
                                                            : 'Moneda'}
                                                    </td>

                                                    <td
                                                        className="w3-right-align"
                                                        style={{ padding: '2px 8px' }}
                                                    >
                                                        <input
                                                            className="w3-input w3-border w3-round-small w3-small w3-right-align"
                                                            style={{
                                                                width: '90px',
                                                                display: 'inline-block',
                                                                padding: '4px 6px'
                                                            }}
                                                            type="number"
                                                            min="0"
                                                            step="1"
                                                            value={cantidad}
                                                            onChange={event =>
                                                                actualizarCantidadEfectivo(
                                                                    denominacion.valor,
                                                                    event.target.value
                                                                )
                                                            }
                                                        />
                                                    </td>

                                                    <td className="w3-right-align">
                                                        {denominacion.valor.toFixed(2)}
                                                    </td>

                                                    <td className="w3-right-align">
                                                        {total > 0
                                                            ? formatearNumero(total)
                                                            : '-'}
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <div
                            className="w3-row-padding"
                            style={{ marginTop: '12px' }}
                        >

                            <div className="w3-col l6 m6 s12">
                                <label className="w3-small">
                                    Observación
                                </label>

                                <textarea
                                    className="w3-input w3-border w3-round-small w3-small"
                                    rows="3"
                                    placeholder="Ingrese una observación si existe diferencia..."
                                    value={observacionCuadre}
                                    onChange={event =>
                                        setObservacionCuadre(
                                            event.target.value
                                        )
                                    }
                                ></textarea>
                            </div>

                            <div className="w3-col l6 m6 s12">
                                <div
                                    className="w3-border"
                                    style={{ padding: '8px 12px' }}
                                >
                                    <div className="w3-row">
                                        <div className="w3-col s7 w3-right-align w3-small">
                                            EFECTIVO FÍSICO
                                        </div>
                                        <div className="w3-col s5 w3-right-align">
                                            <strong>
                                                {formatearMonto(
                                                    efectivoFisicoCalculado,
                                                    cajaCuadreSeleccionada.moneda
                                                )}
                                            </strong>
                                        </div>
                                    </div>

                                    <div className="w3-row">
                                        <div className="w3-col s7 w3-right-align w3-small">
                                            SISTEMA
                                        </div>
                                        <div className="w3-col s5 w3-right-align">
                                            <strong>
                                                {formatearMonto(
                                                    saldoSistemaCuadre,
                                                    cajaCuadreSeleccionada.moneda
                                                )}
                                            </strong>
                                        </div>
                                    </div>

                                    <div
                                        className="w3-border-top"
                                        style={{
                                            marginTop: '5px',
                                            paddingTop: '5px'
                                        }}
                                    >
                                        <div className="w3-row">
                                            <div className="w3-col s7 w3-right-align w3-small">
                                                DIFERENCIA +/-
                                            </div>
                                            <div className="w3-col s5 w3-right-align">
                                                <strong
                                                    className={
                                                        Math.abs(diferenciaCuadre) < 0.005
                                                            ? 'w3-text-green'
                                                            : 'w3-text-red'
                                                    }
                                                >
                                                    {formatearMonto(
                                                        diferenciaCuadre,
                                                        cajaCuadreSeleccionada.moneda
                                                    )}
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </>
                )}

            </div>
        )
    }


    // =====================================================
    // MODAL
    // =====================================================

    const renderModal = () => {

        if (!modalAbierto) {
            return null
        }


        let titulo =
            'Detalle'


        let icono =
            'fa-info-circle'


        if (
            modalTipo === 'NUEVO_MOVIMIENTO'
        ) {

            titulo =
                'Nuevo movimiento'

            icono =
                'fa-exchange'

        }


        if (
            modalTipo === 'NUEVA_RENDICION'
        ) {

            titulo =
                'Nueva rendición'

            icono =
                'fa-file-text-o'

        }


        if (
            modalTipo === 'NUEVO_CUADRE'
        ) {

            titulo =
                'Nuevo cuadre'

            icono =
                'fa-balance-scale'

        }


        if (
            modalTipo === 'NUEVA_CAJA'
        ) {

            titulo =
                'Nueva caja'

            icono =
                'fa-archive'

        }


        if (
            modalTipo === 'CAJA' ||
            modalTipo === 'EDITAR_CAJA'
        ) {

            titulo =
                modalTipo === 'EDITAR_CAJA'
                    ? 'Editar caja'
                    : 'Detalle de caja'

            icono =
                'fa-archive'

        }


        if (
            modalTipo === 'MOVIMIENTO'
        ) {

            titulo =
                'Detalle del movimiento'

            icono =
                'fa-exchange'

        }


        return (

            <div
                className="w3-modal"
                style={{
                    display: 'block',
                    backgroundColor: 'rgba(0,0,0,0.35)'
                }}
            >

                <div
                    className="w3-modal-content w3-card-4"
                    style={{
                        maxWidth: '850px'
                    }}
                >


                    {/* CABECERA */}

                    <header
                        className="w3-container"
                        style={{
                            backgroundColor: '#f5f5f5',
                            borderBottom: '1px solid #ddd',
                            padding: '10px 16px'
                        }}
                    >

                        <button
                            className="w3-button w3-display-topright w3-small"
                            onClick={cerrarModal}
                            title="Cerrar"
                        >

                            <i className="fa fa-close"></i>

                        </button>


                        <h5>

                            <i className={`fa ${icono}`}></i>

                            &nbsp;

                            {titulo}

                        </h5>

                    </header>


                    {/* CONTENIDO */}

                    <div className="w3-container w3-padding-16">


                        {/* NUEVO MOVIMIENTO */}

                        {modalTipo === 'NUEVO_MOVIMIENTO' && (

                            renderFormularioMovimiento()

                        )}


                        {/* DETALLE MOVIMIENTO */}

                        {modalTipo === 'MOVIMIENTO' &&
                            movimientoSeleccionado && (

                                <>

                                    <div className="w3-row-padding">

                                        <div className="w3-col l4 m6 s12">

                                            <p className="w3-small">

                                                <span className="w3-text-grey">
                                                    Fecha
                                                </span>

                                                <br />

                                                <strong>
                                                    {movimientoSeleccionado.fecha}
                                                </strong>

                                            </p>

                                        </div>


                                        <div className="w3-col l4 m6 s12">

                                            <p className="w3-small">

                                                <span className="w3-text-grey">
                                                    Caja
                                                </span>

                                                <br />

                                                <strong>
                                                    {movimientoSeleccionado.caja}
                                                </strong>

                                            </p>

                                        </div>


                                        <div className="w3-col l4 m6 s12">

                                            <p className="w3-small">

                                                <span className="w3-text-grey">
                                                    Tipo
                                                </span>

                                                <br />

                                                {renderTipoMovimiento(
                                                    movimientoSeleccionado.tipo
                                                )}

                                            </p>

                                        </div>


                                        <div className="w3-col l4 m6 s12">

                                            <p className="w3-small">

                                                <span className="w3-text-grey">
                                                    Categoría
                                                </span>

                                                <br />

                                                <strong>
                                                    {movimientoSeleccionado.categoria}
                                                </strong>

                                            </p>

                                        </div>


                                        <div className="w3-col l8 m6 s12">

                                            <p className="w3-small">

                                                <span className="w3-text-grey">
                                                    Concepto
                                                </span>

                                                <br />

                                                <strong>
                                                    {movimientoSeleccionado.concepto}
                                                </strong>

                                            </p>

                                        </div>


                                        <div className="w3-col l6 m6 s12">

                                            <p className="w3-small">

                                                <span className="w3-text-grey">
                                                    Beneficiario
                                                </span>

                                                <br />

                                                {movimientoSeleccionado.beneficiario}

                                            </p>

                                        </div>


                                        <div className="w3-col l3 m6 s12">

                                            <p className="w3-small">

                                                <span className="w3-text-grey">
                                                    Documento
                                                </span>

                                                <br />

                                                {movimientoSeleccionado.documento}

                                            </p>

                                        </div>


                                        <div className="w3-col l3 m6 s12">

                                            <p className="w3-small">

                                                <span className="w3-text-grey">
                                                    N.º documento
                                                </span>

                                                <br />

                                                {movimientoSeleccionado.numeroDocumento}

                                            </p>

                                        </div>


                                        <div className="w3-col l6 m6 s12">

                                            <p className="w3-small">

                                                <span className="w3-text-grey">
                                                    Monto
                                                </span>

                                                <br />

                                                <strong
                                                    style={{
                                                        fontSize: '20px'
                                                    }}
                                                    className={
                                                        movimientoSeleccionado.tipo === 'INGRESO'
                                                            ? 'w3-text-green'
                                                            : 'w3-text-red'
                                                    }
                                                >
                                                    {formatearMonto(
                                                        movimientoSeleccionado.monto
                                                    )}
                                                </strong>

                                            </p>

                                        </div>


                                        <div className="w3-col l6 m6 s12">

                                            <p className="w3-small">

                                                <span className="w3-text-grey">
                                                    Usuario
                                                </span>

                                                <br />

                                                {movimientoSeleccionado.usuario}

                                            </p>

                                        </div>

                                    </div>

                                </>

                            )}


                        {/* DETALLE CAJA */}

                        {(
                            modalTipo === 'CAJA' ||
                            modalTipo === 'EDITAR_CAJA'
                        ) &&
                            cajaSeleccionada && (

                                <div className="w3-row-padding">

                                    <div className="w3-col l3 m6 s12">

                                        <label className="w3-small">
                                            Código
                                        </label>

                                        <input
                                            className="w3-input w3-border w3-small"
                                            value={
                                                cajaSeleccionada.codigo
                                            }
                                            readOnly={
                                                modalTipo === 'CAJA'
                                            }
                                        />

                                    </div>


                                    <div className="w3-col l5 m6 s12">

                                        <label className="w3-small">
                                            Nombre
                                        </label>

                                        <input
                                            className="w3-input w3-border w3-small"
                                            value={
                                                cajaSeleccionada.nombre
                                            }
                                            readOnly={
                                                modalTipo === 'CAJA'
                                            }
                                        />

                                    </div>


                                    <div className="w3-col l4 m6 s12">

                                        <label className="w3-small">
                                            Responsable
                                        </label>

                                        <input
                                            className="w3-input w3-border w3-small"
                                            value={
                                                cajaSeleccionada.responsable
                                            }
                                            readOnly={
                                                modalTipo === 'CAJA'
                                            }
                                        />

                                    </div>


                                    <div className="w3-col l3 m6 s12">

                                        <label className="w3-small">
                                            Moneda
                                        </label>

                                        <input
                                            className="w3-input w3-border w3-small"
                                            value={
                                                cajaSeleccionada.moneda
                                            }
                                            readOnly
                                        />

                                    </div>


                                    <div className="w3-col l3 m6 s12">

                                        <label className="w3-small">
                                            Saldo inicial
                                        </label>

                                        <input
                                            className="w3-input w3-border w3-small"
                                            value={
                                                formatearMonto(
                                                    cajaSeleccionada.saldoInicial,
                                                    cajaSeleccionada.moneda
                                                )
                                            }
                                            readOnly
                                        />

                                    </div>


                                    <div className="w3-col l3 m6 s12">

                                        <label className="w3-small">
                                            Límite
                                        </label>

                                        <input
                                            className="w3-input w3-border w3-small"
                                            value={
                                                formatearMonto(
                                                    cajaSeleccionada.limite,
                                                    cajaSeleccionada.moneda
                                                )
                                            }
                                            readOnly
                                        />

                                    </div>


                                    <div className="w3-col l3 m6 s12">

                                        <label className="w3-small">
                                            Saldo actual
                                        </label>

                                        <input
                                            className="w3-input w3-border w3-small"
                                            value={
                                                formatearMonto(
                                                    cajaSeleccionada.saldo,
                                                    cajaSeleccionada.moneda
                                                )
                                            }
                                            readOnly
                                        />

                                    </div>

                                </div>

                            )}


                        {/* NUEVA CAJA */}

                        {modalTipo === 'NUEVA_CAJA' && (

                            <div className="w3-row-padding">

                                <div className="w3-col l3 m6 s12">

                                    <label className="w3-small">
                                        Código *
                                    </label>

                                    <input
                                        className="w3-input w3-border w3-small"
                                        placeholder="CJ-005"
                                    />

                                </div>


                                <div className="w3-col l5 m6 s12">

                                    <label className="w3-small">
                                        Nombre *
                                    </label>

                                    <input
                                        className="w3-input w3-border w3-small"
                                        placeholder="Nombre de la caja"
                                    />

                                </div>


                                <div className="w3-col l4 m6 s12">

                                    <label className="w3-small">
                                        Responsable *
                                    </label>

                                    <input
                                        className="w3-input w3-border w3-small"
                                        placeholder="Responsable"
                                    />

                                </div>


                                <div className="w3-col l4 m6 s12">

                                    <label className="w3-small">
                                        Moneda *
                                    </label>

                                    <select className="w3-select w3-border w3-small">

                                        <option value="">
                                            Seleccione
                                        </option>

                                        <option value="PEN">
                                            Soles - PEN
                                        </option>

                                        <option value="USD">
                                            Dólares - USD
                                        </option>

                                    </select>

                                </div>


                                <div className="w3-col l4 m6 s12">

                                    <label className="w3-small">
                                        Saldo inicial *
                                    </label>

                                    <input
                                        className="w3-input w3-border w3-small"
                                        type="number"
                                        step="0.01"
                                        placeholder="0.00"
                                    />

                                </div>


                                <div className="w3-col l4 m6 s12">

                                    <label className="w3-small">
                                        Límite *
                                    </label>

                                    <input
                                        className="w3-input w3-border w3-small"
                                        type="number"
                                        step="0.01"
                                        placeholder="0.00"
                                    />

                                </div>

                            </div>

                        )}


                        {/* NUEVA RENDICIÓN */}

                        {modalTipo === 'NUEVA_RENDICION' && (

                            <div className="w3-row-padding">

                                <div className="w3-col l6 m6 s12">

                                    <label className="w3-small">
                                        Caja *
                                    </label>

                                    <select className="w3-select w3-border w3-small">

                                        <option value="">
                                            Seleccione
                                        </option>

                                        {cajas
                                            .filter(
                                                caja =>
                                                    caja.estado === 'ACTIVA'
                                            )
                                            .map(
                                                caja => (

                                                    <option
                                                        key={caja.id}
                                                        value={caja.id}
                                                    >
                                                        {caja.nombre}
                                                    </option>

                                                )
                                            )}

                                    </select>

                                </div>


                                <div className="w3-col l6 m6 s12">

                                    <label className="w3-small">
                                        Periodo *
                                    </label>

                                    <input
                                        className="w3-input w3-border w3-small"
                                        type="month"
                                        defaultValue="2026-08"
                                    />

                                </div>


                                <div className="w3-col l6 m6 s12">

                                    <label className="w3-small">
                                        Fecha desde
                                    </label>

                                    <input
                                        className="w3-input w3-border w3-small"
                                        type="date"
                                        defaultValue="2026-08-01"
                                    />

                                </div>


                                <div className="w3-col l6 m6 s12">

                                    <label className="w3-small">
                                        Fecha hasta
                                    </label>

                                    <input
                                        className="w3-input w3-border w3-small"
                                        type="date"
                                        defaultValue="2026-08-30"
                                    />

                                </div>

                            </div>

                        )}


                        {/* NUEVO CUADRE */}

                        {modalTipo === 'NUEVO_CUADRE' && (
                            renderFormularioCuadre()
                        )}

                    </div>


                    {/* PIE */}

                    <footer
                        className="w3-container"
                        style={{
                            borderTop: '1px solid #ddd',
                            padding: '10px 16px',
                            textAlign: 'right'
                        }}
                    >

                        <button
                            className="w3-button w3-light-grey w3-border w3-round-small w3-small"
                            onClick={cerrarModal}
                        >

                            Cancelar

                        </button>


                        &nbsp;


                        {modalTipo !== 'CAJA' &&
                            modalTipo !== 'MOVIMIENTO' && (

                                <button
                                    className="w3-button w3-flat-midnight-blue w3-round-small w3-small"
                                    onClick={() =>
                                        cerrarModal()
                                    }
                                >

                                    <i className="fa fa-save"></i>

                                    &nbsp;

                                    Guardar

                                </button>

                            )}

                    </footer>

                </div>

            </div>

        )

    }


    // =====================================================
    // CONTENIDO PRINCIPAL
    // =====================================================

    const renderContenido = () => {

        switch (tabActual) {

            case 'MOVIMIENTOS':

                return renderMovimientos()


            case 'RENDICIONES':

                return renderRendiciones()


            case 'CUADRES':

                return renderCuadres()


            case 'CAJAS':

                return renderCajas()


            default:

                return renderResumen()

        }

    }


    // =====================================================
    // INTERFAZ PRINCIPAL
    // =====================================================

    return (

        <div className="w3-container">


            {/* =================================================
                CABECERA DEL MÓDULO
            ================================================= */}

            <div
                style={{
                    marginTop: '8px',
                    marginBottom: '14px'
                }}
            >

                <h3
                    className="w3-text-dark-grey"
                    style={{
                        marginBottom: '4px'
                    }}
                >

                    <i className="fa fa-money"></i>

                    &nbsp;

                    Caja Chica

                </h3>


                <p
                    className="w3-text-grey w3-small"
                    style={{
                        margin: 0
                    }}
                >

                    Administración y control de cajas chicas.

                </p>

            </div>


            {/* =================================================
                BARRA DE GESTIÓN
            ================================================= */}

            <div
                className="w3-card w3-white w3-margin-bottom"
                style={{
                    ...cardStyle,
                    padding: '10px 14px'
                }}
            >

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '10px'
                    }}
                >


                    {/* INFORMACIÓN */}

                    <div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '7px'
                            }}
                        >

                            <i className="fa fa-archive"></i>

                            <strong>
                                Gestión de Caja Chica
                            </strong>

                        </div>


                        <div
                            className="w3-small w3-text-grey"
                            style={{
                                marginTop: '3px'
                            }}
                        >

                            Control de cajas, movimientos, rendiciones y efectivo.

                        </div>

                    </div>


                    {/* ACCIONES */}

                    <div
                        style={{
                            display: 'flex',
                            gap: '5px',
                            flexWrap: 'wrap'
                        }}
                    >

                        <button
                            className="w3-button w3-light-grey w3-border w3-round-small w3-small"
                            onClick={() =>
                                cambiarTab('CAJAS')
                            }
                        >

                            <i className="fa fa-archive"></i>

                            &nbsp;

                            Cajas

                        </button>


                        <button
                            className="w3-button w3-flat-midnight-blue w3-round-small w3-small"
                            onClick={() =>
                                abrirModal(
                                    'NUEVO_MOVIMIENTO'
                                )
                            }
                        >

                            <i className="fa fa-plus"></i>

                            &nbsp;

                            Nuevo movimiento

                        </button>

                    </div>

                </div>

            </div>


            {/* =================================================
                NAVEGACIÓN DEL MÓDULO
            ================================================= */}

            <div
                className="w3-border-bottom"
                style={{
                    marginBottom: '14px'
                }}
            >

                <div className="w3-bar">


                    {/* RESUMEN */}

                    <button
                        className={
                            tabActual === 'RESUMEN'
                                ? 'w3-bar-item w3-button w3-flat-midnight-blue w3-small'
                                : 'w3-bar-item w3-button w3-small'
                        }
                        onClick={() =>
                            cambiarTab('RESUMEN')
                        }
                    >

                        <i className="fa fa-dashboard"></i>

                        &nbsp;

                        Resumen

                    </button>


                    {/* MOVIMIENTOS */}

                    <button
                        className={
                            tabActual === 'MOVIMIENTOS'
                                ? 'w3-bar-item w3-button w3-flat-midnight-blue w3-small'
                                : 'w3-bar-item w3-button w3-small'
                        }
                        onClick={() =>
                            cambiarTab('MOVIMIENTOS')
                        }
                    >

                        <i className="fa fa-exchange"></i>

                        &nbsp;

                        Movimientos

                    </button>


                    {/* RENDICIONES */}

                    <button
                        className={
                            tabActual === 'RENDICIONES'
                                ? 'w3-bar-item w3-button w3-flat-midnight-blue w3-small'
                                : 'w3-bar-item w3-button w3-small'
                        }
                        onClick={() =>
                            cambiarTab('RENDICIONES')
                        }
                    >

                        <i className="fa fa-file-text-o"></i>

                        &nbsp;

                        Rendiciones

                    </button>


                    {/* CUADRES */}

                    <button
                        className={
                            tabActual === 'CUADRES'
                                ? 'w3-bar-item w3-button w3-flat-midnight-blue w3-small'
                                : 'w3-bar-item w3-button w3-small'
                        }
                        onClick={() =>
                            cambiarTab('CUADRES')
                        }
                    >

                        <i className="fa fa-balance-scale"></i>

                        &nbsp;

                        Cuadres

                    </button>


                    {/* CAJAS */}

                    <button
                        className={
                            tabActual === 'CAJAS'
                                ? 'w3-bar-item w3-button w3-flat-midnight-blue w3-small'
                                : 'w3-bar-item w3-button w3-small'
                        }
                        onClick={() =>
                            cambiarTab('CAJAS')
                        }
                    >

                        <i className="fa fa-archive"></i>

                        &nbsp;

                        Cajas

                    </button>

                </div>

            </div>


            {/* =================================================
                CONTENIDO
            ================================================= */}

            <div>

                {renderContenido()}

            </div>


            {/* =================================================
                MODAL
            ================================================= */}

            {renderModal()}


        </div>

    )

}


export default CajaChicaPage