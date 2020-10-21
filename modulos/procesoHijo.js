const { exec, spawn } = require('child_process');

/* exec('dir', (err, stdout, sterr) => {
  if (err) {
    console.log('error: ', err);
    return false;
  }

  console.log(stdout);
}); */

let proceso = spawn('dir');

console.log('Proceso: ', proceso.pid);
console.log('Conexión: ', proceso.connected);

proceso.stdout.on('data', function (dato) {
  console.log('¿Está muerto? ', proceso.killed);
  console.log('data:', dato.toString());
});

proceso.on('exit', function () {
  console.log('El proceso terminó!');
});
