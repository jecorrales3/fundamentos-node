function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log('Hola, ' + nombre);
    miCallback(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log('Bla bla bla...');
    callbackHablar();
  }, 1000);
}

function adios(nombre, otroCallbak) {
  setTimeout(function () {
    console.log('Adios ' + nombre + ' :(');
    otroCallbak();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

console.log('Iniciando proceso...');

hola('Johan', function (nombre) {
  conversacion(nombre, 3, function () {
    console.log('Proceso terminado!');
  });
});

/* 
hola('Johan', function (nombre) {
  adios(nombre, function () {
    console.log('Terminamos!');
  });
});
 */
/* hola('Johan', function (nombre) {
  hablar(function () {
    hablar(function () {
      hablar(function () {
        adios(nombre, function () {
          console.log('Terminando proceso...');
        });
      });
    });
  });
});
 */
