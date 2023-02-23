// Captura de errores

const otraFuncion = () => {
  return seRompe();
};

const seRompe = () => {
  return 3 + z;
};

/**
 * En funciones asincronas, lo mejor es implementar el
 * try catch dentro de la función
 * @param {function} cb Callback
 */
const seRompeAsincrona = async (cb) => {
  setTimeout(() => {
    try {
      return 3 + TEXTO;
    } catch (err) {
      console.error(err.message);
      cb(err);
    }
  }, 2000);
};

try {
  seRompeAsincrona((err) => {
    console.warn("🐞 Se encontró el siguiente error:", err.message);
  });
} catch (err) {
  console.error("Algo salió mal");
  console.error(err.message);
}
console.log("✅ Finalizado");
