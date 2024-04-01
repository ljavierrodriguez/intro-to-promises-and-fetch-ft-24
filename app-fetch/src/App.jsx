import React, { useEffect, useState } from 'react'

const App = () => {

    const [personajes, setPersonajes] = useState(null)
    const [empleados, setEmpleados] = useState(null)
    const [songs, setSongs] = useState(null)

    useEffect(() => {
        buscarPersonajes()
        buscarEmpleados()
        buscarCanciones()
    }, [])

    const buscarPersonajes = () => {

        const url = 'https://rickandmortyapi.com/api/character';
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(url, options)
            .then(response => response.json()) // respuesta del servidor
            .then(datos => {
                console.log(datos)
                setPersonajes(datos)
            }) // datos recibidos del servidor
            .catch(error => console.log(error.message)) // en caso de que ocurra un error
    }

    const buscarEmpleados = async () => {
        const url = 'https://jsonplaceholder.typicode.com/users'
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const response = await fetch(url, options)

            const datos = await response.json()

            setEmpleados(datos)

        } catch (error) {
            console.log(error.message)
        }
    }

    const buscarCanciones = () => {
        const url = 'https://playground.4geeks.com/sound/songs'
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(url, options)
            .then((response) => response.json())
            .then((datos) => setSongs(datos.songs))
            .catch((error) => console.log(error.message))
    }

    return (
        <>
            <div>App</div>
            <button onClick={buscarPersonajes}>Buscar personajes</button>
            <h4>Personajes</h4>
            <ul>
                {
                    !!personajes &&
                    personajes.results.length > 0 &&
                    personajes.results.map((personaje) => {
                        return (
                            <li key={personaje.id}>{personaje.name}</li>
                        )
                    })
                }
            </ul>
            <h4>Empleados</h4>
            <ul>
                {
                    !!empleados &&
                    empleados.length > 0 &&
                    empleados.map((empleado) => {
                        return (
                            <li key={empleado.id}>{empleado.name}</li>
                        )
                    })
                }
            </ul>
            <h4>Canciones</h4>
            <ul>
                {
                    !!songs &&
                    songs.length > 0 &&
                    songs.map((song) => {
                        return (
                            <li key={song.id}>{song.name}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default App