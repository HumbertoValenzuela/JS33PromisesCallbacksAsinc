// 3. Creando un Promise y .then y .catch
// Palabra reservada de los Promise resolve, reject
// resolve se ejecuta cuando el Promise se cumple
// reject se ejecuta cuando el Promise no se cumple, o un error 
// Vamos a definir un promise



const aplicarDescuento = new Promise( (resolve, reject) => {
    // Cambiar a false para ver el estado reject del Promise
    // Cambiar a true para ver el estado resolve del Promise
    // Eliminar contenido para ver Promise cuando no tiene aún un resolve o reject. este es llamado pending (pendiente)
    const descuento = true;

    if (descuento) {
        resolve('Se Cumple');
    } else {
        reject('No se Cumple');
    }
});

// Viendo los estados del Promise. Tiene 3 Estados
console.log(aplicarDescuento);
// Promise {<fulfilled>: "Se Cumple"}
// Promise {<rejected>: "No se Cumple"}
// Promise {<pending>} No se ha cumplido ni rechazado

// ¿como acceder a la respuesta del resolve 'Se Cumple' y el reject?
// Primero se ejecuta aplicarDescuento y luego el (then) es la acción que realiza el Promise 
// Para mostrar el reject se utiliza .catch el error común cuando no se agrega el .catch es Uncaught (in promise)
aplicarDescuento
    .then(resultado => {
        console.log(resultado);
        descuento(resultado);
    })////descuento = true Se Cumple
    .catch(error => console.log(error));//descuento = false No se Cumple

    //Si puedes ejecutar funciones para no tener mucho código, la respuesta es si...
function descuento(resultado) {
    console.log(resultado);
}