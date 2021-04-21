// 1. Ejemplo de Callbacks

const paises = ['Francia', 'España', 'Portugal', 'Chile', 'Venezuela' ];

// Un nuevo pais se agrega despues de 2 segundos...
function nuevoPais(pais, callback) {//parametro pais contiene el pais, callback contiene la función mostrarPaises
    setTimeout(() => {
        paises.push(pais);
        callback();//Notar que no tenemos una función llamada callback

    }, 2000);// Pero el segundo ya paso, luego se agrega un nuevo país, ejecutamos el callback para que se vuelva a llamar la función para agregar al último país
}

// Los paises se muestran despues de 1 segundo
function mostrarPaises() {
    
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        });    
    }, 1000);// Después de un segundo obtenemos los paises...
};

mostrarPaises();

// Agregar nuevoPais y contiene dos argumentos alemania y función mostrarPaises
nuevoPais('Alemania', mostrarPaises);// mostrarPaises es el callback, una vez agregado alemania se va a ejecutar el callback en este caso es mostrarPaises...