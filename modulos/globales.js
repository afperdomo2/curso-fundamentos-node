/**
 * Funciones globales de node
 *
 * Lo recomendable es implementar lo menos posible las
 * variables globales, solo bajo situaciones necesarias
 */

// Ejemplos de funciones globales
console.log(global);
console.log(process);
console.log(__dirname);
console.log(__filename);

// Declarar y utilizar variables globales
global.token = "1234567890";
console.log(global.token);
console.log(token);

console.log("------------->");

/**
 * Ejecutar un setInterval, esto se puede utilizar para
 * re intentar la conexión fallida a una base de datos
 *
 * setInterval,setImmediate = Es una función global
 */
let i = 0;
const intervalo = setInterval(() => {
  console.log(`Hola mundo ${i}`);
  if (i === 3) {
    // Detener un setInterval
    clearInterval(intervalo);
  }
  i++;
}, 1000);

// Ejecutar una función asincrona de forma inmediata
setImmediate(() => {
  console.log("Saludar");
});
