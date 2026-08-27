import Swal from 'sweetalert2'


export const mostrarExito = (mensaje) => {

    Swal.fire({
        icon: 'success',
        title: 'Operación exitosa',
        text: mensaje,
        confirmButtonText: 'Aceptar'
    })

}


export const mostrarError = (mensaje) => {

    Swal.fire({
        icon: 'error',
        title: 'Ocurrió un error',
        text: mensaje,
        confirmButtonText: 'Aceptar'
    })

}


export const mostrarAdvertencia = (mensaje) => {

    Swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: mensaje,
        confirmButtonText: 'Aceptar'
    })

}