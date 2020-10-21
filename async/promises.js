function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Hola, ' + nombre);
      resolve(nombre);
    }, 1500);
  });
}

function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Bla bla bla...');
      //resolve(nombre);
      reject('¡Oops! We have found an error');
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Adios ' + nombre + ' :(');
      resolve(nombre);
    }, 1000);
  });
}

// ----
console.log('Iniciando el proceso...');
hola('Johan')
  .then((nombre) => {
    return hablar(nombre);
  })
  .then(hablar)
  .then(hablar)
  .then((nombre) => {
    return adios(nombre);
  })
  .then((nombre) => {
    console.log('¡Proceso terminado!');
  })
  .catch((error) => {
    console.log('Error: ', error);
  });
