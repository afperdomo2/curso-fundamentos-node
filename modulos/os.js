const os = require("os");

// Imprime la arquitectura del sistema operativo en la consola
console.log("arquitectura:", os.arch());

// Imprime la plataforma en la que está corriendo la consola
console.log("plataforma:", os.platform());

// Imprime una matriz de objetos que contienen información sobre los procesadores
//console.log("info cpus: ", os.cpus());
console.log("Cantidad núcleos:", os.cpus().length);

// Imprime un objeto que contiene todas las constantes
//console.log("constantes", os.constants);

const SIZE = 1024;
const kb = (bytes) => bytes / SIZE;
const mb = (bytes) => kb(bytes) / SIZE;
const gb = (bytes) => mb(bytes) / SIZE;

// Imprime la cantidad de memoria libre
console.log("Memoria libre (bytes):", os.freemem());
console.log("Memoria libre (kb):", kb(os.freemem()));
console.log("Memoria libre (mb):", mb(os.freemem()));

console.log("Memoria Total (gb):", gb(os.totalmem()));

console.log("Ruta del Home del usuario actual:", os.homedir());
console.log("Ruta al directorio temporal:", os.tmpdir());

console.log("Nombre del Host:", os.hostname());
//console.log("Interfaces de red:", os.networkInterfaces());
