// 4. De Callback Hell a Promises

const paises = [];

const nuevoPais = (pais) => new Promise((resolve, reject) => {
    setTimeout(() => {
        paises.push(pais);
        // console.log('ver ' + pais);
        if (pais) { // '' dejar vacio para aplicar el reject 
            resolve(`Resultado del resolve: Agregado ${pais}`);
        } else {
            reject('No tiene país');
        }
    }, 2000);
});

// Llamando a Promise
nuevoPais('Alemania')
    .then( resultado => {
        console.log(resultado); // resolve
        console.log(paises); // Arreglo Paises
        return nuevoPais('Francia'); //Llamar el Promise
    })
    .then( resultado => {// al agregar Francia entonces
        console.log(resultado)
        console.log(paises); // Arreglo Paises
        return nuevoPais('Inglaterra')
    })
    .then ( resultado => {
        console.log(resultado)
        console.log(paises); // Arreglo Paises
    })    
    .catch( error => console.log(error));