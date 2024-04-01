const miPromesa = fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET', // GET, POST, PUT, DELETE
    //body: data, // POST, PUT 
    headers: {
        'Content-Type': 'application/json'
    }
})

miPromesa
    .then((response) => {
        console.log(response)
        console.log(response.status)
        console.log(response.ok)

        if (!response.ok) throw new Error('Error al consultar los datos')

        return response.json()
    })
    .then((datos) => {
        console.log(datos)
    })
    .catch((error) => {
        console.error(error.message)
    })

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