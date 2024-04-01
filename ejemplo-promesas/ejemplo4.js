/*
fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET', // GET, POST, PUT, DELETE
    //body: data, // POST, PUT 
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then((response) => { // la respuesta del servidor
        console.log(response)
        console.log(response.status)
        console.log(response.ok)

        if (!response.ok) throw new Error('Error al consultar los datos')

        return response.json()
    })
    .then((datos) => { // procesamos los datos recibidos
        console.log(datos)
    })
    .catch((error) => { // si ocurre algun error imprimimos el error
        console.error(error.message)
    })

*/

async function buscarPersonajes() {
    try {

        const response = await fetch('https://rickandmortyapi.com/api/character', {
            method: 'GET', // GET, POST, PUT, DELETE
            //body: data, // POST, PUT 
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log(response)
        console.log(response.status)
        console.log(response.ok)

        if (!response.ok) throw new Error('Error al consultar los datos')

        const datos = await response.json()

        console.log(datos)

    } catch (error) {
        console.log(error.message)
    }
}

buscarPersonajes()