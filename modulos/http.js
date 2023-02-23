const { createServer } = require("http");

const port = 4200;

/**
 * @param {} req Request = Petición del cliente (cabeceras, metodos, etc)
 * @param {} res Response = Respuesta del servidor
 */
const router = (req, res) => {
  console.log(`Nueva petición: "${req.url}"`);

  switch (req.url) {
    case "/":
      res.write("<h1>Estas en el Home</h1>");
      res.end();
      break;

    case "/hola":
      res.write("Hola como estas");
      res.end();
      break;

    default:
      res.write("Error 404: Archivo no encontrado");
      res.end();
      break;
  }

  res.end();
};

const server = createServer(router);

server.listen(port, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log(`Servidor http://localhost:${port}`);
});
