const http = require('http');
const PORT = 3000;

http.createServer(router).listen(PORT);

function router(req, res) {
  console.log('Nueva petición!');
  console.log(req.url);

  switch (req.url) {
    case '/hola':
      res.write('Hola, ¿qué tal?');
      res.end();
      break;

    default:
      res.write('Error 404: No se lo que quieres');
      res.end();
      break;
  }

  /* //Escribir respuesta al usuario
  res.write('Hola, ya se usar HTTP de NodeJS');

  res.end(); */
}
console.log(`Escuchando http en el puerto ${PORT}`);
