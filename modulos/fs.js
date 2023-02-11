const fs = require('fs').promises;

const leer = async (ruta) => {
    try {
        const archivo = await fs.readFile(ruta);
        console.log('--------');
        console.log('[Log] Leyendo: ', ruta,'\n');

        console.log(archivo.toString());
        console.log('--------');
    } catch (error) {
        console.error(error);
    }
};

const escribir = async (ruta, contenido) => {
    try {
        await fs.writeFile(ruta, contenido);
        console.log('[Log] ✅ Archivo Creado:', ruta);
    } catch (error) {
        console.error(error);
    }
};

const borrar = async (ruta) => {
    try {
        await fs.unlink(ruta);
        console.log('[Log] 🧺 Archivo Borrado:', ruta);
    } catch (error) {
        console.error(error);
    }
};

const ejecutarFunciones = async () => {
    await leer(__dirname + '/datos.txt');

    const archivoNuevo = __dirname + '/datos1.txt';

    await escribir(archivoNuevo, 'Archivo nuevo con texto');
    await leer(archivoNuevo);

    await borrar(archivoNuevo);
};
ejecutarFunciones();
