function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log('Hola, ' + nombre);
    miCallback(nombre);
  }, 1500);
}

function adios(nombre, otroCallbak) {
  setTimeout(function () {
    console.log('Adios ' + nombre + ' :(');
    otroCallbak();
  }, 1000);
}

console.log('Iniciando proceso...');

hola('Johan', function (nombre) {
  adios(nombre, function () {
    console.log('Terminando proceso...');
  });
});

/* hola('Johan', function () {});
adios('Johan', function () {}); */
