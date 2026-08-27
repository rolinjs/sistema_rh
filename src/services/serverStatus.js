let servidorOnline = true

const listeners = new Set()


export const obtenerEstadoServidor = () => {

    return servidorOnline

}


export const establecerEstadoServidor = (estado) => {

    servidorOnline = estado

    listeners.forEach(listener => {
        listener(estado)
    })

}


export const suscribirseEstadoServidor = (listener) => {

    listeners.add(listener)

    return () => {
        listeners.delete(listener)
    }

}