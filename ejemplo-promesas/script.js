const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const terminado = false;
        if (terminado) {
            resolve('Tarea Terminada con exito')
        } else {
            reject(new Error('Error: algo salio mal!'))
        }
    }, 3000)
})


miPromesa
    .then((resultado) => { // Exito
        console.log(resultado) // Tarea Terminada con exito
    })
    .catch((error) => { // Error
        console.error(error.message) // Error: algo salio mal!
    })