/**
 * Comando node para pasar variables de entorno
 * 
 * NOMBRE=Felipe WEB=pruebas.com node conceptos/entorno
 */

let nombre = process.env.NOMBRE || 'persona';
let web = process.env.WEB || 'no tengo web';

console.log(`Hola ${nombre}, mi web es: ${web}`);
