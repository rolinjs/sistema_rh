const menuConfig = [

    // =====================================================
    // DASHBOARD
    // =====================================================

    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'fa-dashboard',
        path: '/'
    },


    // =====================================================
    // MAESTROS
    // =====================================================

    {
        id: 'maestros',
        label: 'Maestros',
        icon: 'fa-database',
        children: [

            {
                id: 'trabajadores',
                label: 'Trabajadores',
                icon: 'fa-user',
                path: '/trabajadores'
            },

            {
                id: 'areas',
                label: 'Áreas',
                icon: 'fa-sitemap',
                path: '/areas'
            },

            {
                id: 'cargos',
                label: 'Cargos',
                icon: 'fa-briefcase',
                path: '/cargos'
            },

            {
                id: 'jornadas',
                label: 'Jornadas',
                icon: 'fa-calendar',
                path: '/jornadas'
            },

            {
                id: 'bancos',
                label: 'Bancos',
                icon: 'fa-bank',
                path: '/bancos'
            },

            {
                id: 'periodos-pago',
                label: 'Periodos de pago',
                icon: 'fa-calendar-check-o',
                path: '/periodos-pago'
            },

            {
                id: 'regimenes-laborales',
                label: 'Regímenes laborales',
                icon: 'fa-legal',
                path: '/regimenes-laborales'
            }

        ]
    },


    // =====================================================
    // GESTIÓN LABORAL
    // =====================================================

    {
        id: 'gestion-laboral',
        label: 'Gestión Laboral',
        icon: 'fa-id-card',
        children: [

            {
                id: 'contratos',
                label: 'Contratos',
                icon: 'fa-file-text-o',
                path: '/contratos'
            },

            {
                id: 'ingresos',
                label: 'Ingresos',
                icon: 'fa-sign-in',
                path: '/ingresos'
            },

            {
                id: 'ceses',
                label: 'Ceses',
                icon: 'fa-sign-out',
                path: '/ceses'
            },

            {
                id: 'movimientos',
                label: 'Movimientos',
                icon: 'fa-exchange',
                path: '/movimientos'
            }

        ]
    },


    // =====================================================
    // ASISTENCIA
    // =====================================================

    {
        id: 'asistencia',
        label: 'Asistencia',
        icon: 'fa-clock-o',
        children: [

            {
                id: 'marcaciones',
                label: 'Marcaciones',
                icon: 'fa-check-square-o',
                path: '/marcaciones'
            },

            {
                id: 'jornadas-asistencia',
                label: 'Jornadas',
                icon: 'fa-calendar',
                path: '/asistencia/jornadas'
            },

            {
                id: 'tardanzas',
                label: 'Tardanzas',
                icon: 'fa-clock-o',
                path: '/tardanzas'
            },

            {
                id: 'horas-extras',
                label: 'Horas extras',
                icon: 'fa-hourglass-half',
                path: '/horas-extras'
            }

        ]
    },


    // =====================================================
    // REMUNERACIONES
    // =====================================================

    {
        id: 'remuneraciones',
        label: 'Remuneraciones',
        icon: 'fa-money',
        children: [

            {
                id: 'conceptos',
                label: 'Conceptos',
                icon: 'fa-list',
                path: '/conceptos'
            },

            {
                id: 'periodos-remuneracion',
                label: 'Periodos',
                icon: 'fa-calendar',
                path: '/remuneraciones/periodos'
            },

            {
                id: 'configuracion-regimen',
                label: 'Configuración de regímenes',
                icon: 'fa-sliders',
                path: '/remuneraciones/configuracion-regimen'
            },

            {
                id: 'calculos',
                label: 'Cálculos',
                icon: 'fa-calculator',
                path: '/calculos'
            }

        ]
    },


    // =====================================================
    // COMEDOR
    // =====================================================

    {
        id: 'comedor',
        label: 'Comedor',
        icon: 'fa-cutlery',
        children: [

            {
                id: 'consumos',
                label: 'Consumos',
                icon: 'fa-shopping-basket',
                path: '/consumos'
            },

            {
                id: 'control-comedor',
                label: 'Control',
                icon: 'fa-check-circle',
                path: '/comedor/control'
            }

        ]
    },


    // =====================================================
    // AUDITORÍA
    // =====================================================

    {
        id: 'auditoria',
        label: 'Auditoría',
        icon: 'fa-history',
        children: [

            {
                id: 'auditoria-usuario',
                label: 'Usuario',
                icon: 'fa-user',
                path: '/auditoria/usuario'
            },

            {
                id: 'auditoria-accion',
                label: 'Acción',
                icon: 'fa-bolt',
                path: '/auditoria/accion'
            },

            {
                id: 'auditoria-fecha',
                label: 'Fecha',
                icon: 'fa-calendar',
                path: '/auditoria/fecha'
            },

            {
                id: 'auditoria-cambios',
                label: 'Cambios',
                icon: 'fa-history',
                path: '/auditoria/cambios'
            }

        ]
    },


    // =====================================================
    // SECCIÓN ALMACÉN
    // =====================================================

    // =====================================================
// GESTIÓN DE ALMACÉN
// =====================================================

{
    id: 'gestion-almacen',
    label: 'Gestión de Almacén',
    icon: 'fa-archive',
    children: [

        // =============================================
        // MAESTROS
        // =============================================

        {
            id: 'almacen-productos',
            label: 'Productos / Materiales',
            icon: 'fa-cube',
            path: '/almacen/productos'
        },

        {
            id: 'almacen-destinos',
            label: 'Destinos / Mercados',
            icon: 'fa-map-marker',
            path: '/almacen/destinos'
        },

        {
            id: 'almacen-periodos',
            label: 'Periodos / Semanas',
            icon: 'fa-calendar',
            path: '/almacen/periodos'
        },


        // =============================================
        // MOVIMIENTOS
        // =============================================

        {
            id: 'almacen-entradas',
            label: 'Entradas',
            icon: 'fa-sign-in',
            path: '/almacen/entradas'
        },

        {
            id: 'almacen-salidas',
            label: 'Salidas',
            icon: 'fa-sign-out',
            path: '/almacen/salidas'
        },

        {
            id: 'almacen-movimientos',
            label: 'Movimientos',
            icon: 'fa-exchange',
            path: '/almacen/movimientos'
        },


        // =============================================
        // KARDEX
        // =============================================

        {
            id: 'almacen-kardex',
            label: 'Kardex',
            icon: 'fa-list-alt',
            path: '/almacen/kardex'
        },


        // =============================================
        // INVENTARIO
        // =============================================

        {
            id: 'almacen-inventario-fisico',
            label: 'Inventario físico',
            icon: 'fa-check-square-o',
            path: '/almacen/inventario-fisico'
        },

        {
            id: 'almacen-diferencias',
            label: 'Diferencias de inventario',
            icon: 'fa-balance-scale',
            path: '/almacen/diferencias'
        },


        // =============================================
        // COSTEO
        // =============================================

        {
            id: 'almacen-costeo',
            label: 'Costeo',
            icon: 'fa-calculator',
            path: '/almacen/costeo'
        },

        {
            id: 'almacen-reglas-costeo',
            label: 'Reglas de costeo',
            icon: 'fa-sliders',
            path: '/almacen/reglas-costeo'
        },


        // =============================================
        // REPORTES
        // =============================================

        {
            id: 'almacen-consumo',
            label: 'Consumo por semana / destino',
            icon: 'fa-bar-chart',
            path: '/almacen/reportes/consumo'
        },

        {
            id: 'almacen-stock-final',
            label: 'Stock final valorizado',
            icon: 'fa-cubes',
            path: '/almacen/reportes/stock-final'
        }

    ]
}

]

export default menuConfig