async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Hola, ' + nombre);
      resolve(nombre);
    }, 1500);
  });
}

async function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Bla bla bla...');
      resolve(nombre);
      //reject('¡Oops! We have found an error');
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Adios ' + nombre + ' :(');
      resolve(nombre);
    }, 1000);
  });
}

async function main() {
  let nombre = 'Johan';
  await hola(nombre);
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);

  console.log('Terminamos el proceso.');
}
console.log('Empezamos el proceso...');

main();

console.log('Va a ser la segunda instrucción');
