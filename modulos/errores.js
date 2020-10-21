function otraFuncion() {
  seRompe();
}

function seRompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (error) {
      console.log('Error en mi función asincrona');
      cb(error);
    }
  });
}

try {
  //otraFuncion();
  seRompeAsincrona(function (error) {
    console.log('Encontramos un nuevo error: ', error.message);
  });
} catch (error) {
  console.log('Error:', error.message);
  console.log('El error ha sido capturado');
}
