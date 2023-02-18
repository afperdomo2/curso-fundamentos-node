/**
 * "exec" se utiliza para ejecutar un comando de shell en un subproceso
 * y obtener su salida, mientras que "spawn" se utiliza para iniciar un
 * nuevo proceso hijo que puede ejecutar comandos.
 */
const { exec, spawn } = require("child_process");

/**
 * exec se utiliza para ejecutar comandos de una sola vez y obtener
 * su salida
 */
const funcionExecDeChildProcess = () => {
  exec("ls -la", (error, stdout, stderr) => {
    console.log(stdout);
  });
  exec("node modulos/consola.js", (err, stdout, stderr) => {
    // Si el comando se ejecuta con éxito, error será nulo
    if (err) {
      console.error(err);
      return false;
    }
    // stdout contendrá la salida del comando
    console.log(stdout);
  });
};
//funcionExecDeChildProcess();

/**
 * spawn se utiliza para ejecutar procesos en segundo plano con la
 * capacidad de interactuar con ellos
 */
const funcionSpawnDeChildProcess = () => {
  let proceso = spawn("ls", ["-la"]);
  console.log(proceso); // Imprime todos los elementos del proceso
  console.log(proceso.connected); // Para saber si el proceso esta conectado
  console.log(proceso.pid); // Imprime el pid del proceso

  /**
   * Establece un escuchador de eventos en la salida estándar del proceso hijo
   * ("stdout"). Cuando el proceso hijo envía datos a la salida estándar, el
   * escuchador se activa y ejecuta la función de devolución de llamada
   * (callback) proporcionada.
   */
  proceso.stdout.on("data", (datos) => {
    console.warn(`⚠ ¿ El proceso está muerto ?: ${proceso.killed}`);
    console.log(datos.toString());
  });

  /**
   * Escuchador que se ejecuta al salir del proceso
   */
  proceso.on("exit", () => {
    console.log("El proceso ha terminado");
    console.warn(`⚠ ¿ El proceso está muerto ?: ${proceso.killed}`);
  });
};
funcionSpawnDeChildProcess();
