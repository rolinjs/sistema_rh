import { useEffect, useState } from 'react'

import {
    obtenerEstadoServidor,
    suscribirseEstadoServidor,
    establecerEstadoServidor
} from '../../services/serverStatus'

import apiClient from '../../services/apiClient'


function ServerStatus() {

    const [online, setOnline] = useState(
        obtenerEstadoServidor()
    )


    // =====================================================
    // ESCUCHAR CAMBIOS DEL ESTADO
    // =====================================================

    useEffect(() => {

        const cancelarSuscripcion =
            suscribirseEstadoServidor(estado => {
                setOnline(estado)
            })

        return cancelarSuscripcion

    }, [])


    // =====================================================
    // HEARTBEAT
    // =====================================================

    useEffect(() => {

        const comprobarServidor = async () => {

            try {

                await apiClient.get('/health', {
                    timeout: 3000
                })

                establecerEstadoServidor(true)

            } catch (error) {

                establecerEstadoServidor(false)

            }

        }


        // Comprobar inmediatamente

        comprobarServidor()


        // Comprobar cada 30 segundos

        const intervalo = setInterval(
            comprobarServidor,
            5000
        )


        // Limpiar intervalo cuando desaparece el componente

        return () => {
            clearInterval(intervalo)
        }

    }, [])


    return (

        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px'
            }}
        >

            <span
                className={!online ? 'server-offline' : ''}
                style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: online
                        ? '#28a745'
                        : '#dc3545',
                    display: 'inline-block'
                }}
            ></span>


            <span>

                {online
                    ? 'Servidor activo'
                    : 'Servidor desconectado'
                }

            </span>

        </div>

    )

}

export default ServerStatus