// 2. El  Callback Hell

// Listado de paises
const paises = [];

// Un nuevo pais se agrega despues de 2 segundos...
function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregado: ${pais}`);
    callback();
};

// Los paises se muestran despues de 1 segundo
function mostrarPaises() {
    console.log(paises);// llamar al arreglo paises
};

function iniciarCallbackHell() {
    setTimeout(() => {
          // Agregar nuevo pais
        nuevoPais('Alemania', mostrarPaises);
        setTimeout(() => {
            nuevoPais('Chile', mostrarPaises);
            setTimeout(() => {
                nuevoPais('Venezuela', mostrarPaises);
            }, 3000);
        }, 3000);
    }, 3000);
};

iniciarCallbackHell();