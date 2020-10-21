//const p = require('process');
process.on('beforeExit', () => {
  console.log('El proceso va a terminar');
});

process.on('exit', () => {
  console.log('Ale, el proceso acabó!');
  setTimeout(function () {
    console.log('Esto no se va a ejecutar nunca');
  }, 0);
});

setTimeout(function () {
  console.log('Esto si se va a ejecutar');
}, 0);

process.on('uncaughtException', (err, origen) => {
  console.log('Se nos ha olvidado capturar un error: ');
  console.log(err);
});

//funcionQueNoExiste();

console.log('Si el error no se maneja, no podríamos continuar');
//process.on('uncaughtRejection', )
