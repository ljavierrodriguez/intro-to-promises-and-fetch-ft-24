function operacionAsincrona() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Operacion Exitosa!')
        }, 2000)
    })
}


async function miFuncionAsincrona() {

    try {

        const resultado = await operacionAsincrona()
        console.log(resultado) // Operacion Exitosa!
        console.log("Hola Mundo!") // Hola Mundo!

    } catch (error) {
        console.log(error.message)
    }
    /* 
    const respuesta = operacionAsincrona();

    respuesta
        .then((resultado) => {
            console.log(resultado)
        })
        .catch((error) => {
            console.log(error.message)
        })

    console.log("Hola Mundo")
    */
}

miFuncionAsincrona()