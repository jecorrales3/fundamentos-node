const os = require('os');

//console.log(os.arch());
//console.log(os.platform());
//console.log(os.cpus());
//console.log(os.cpus().length);
//console.log(os.constants);
const SIZE = 1024;
const FREE_MEMORY = os.freemem();
const TOTAL_MEMORY = os.totalmem();

function kb(bytes) {
  return bytes / SIZE;
}
function mb(bytes) {
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  return mb(bytes) / SIZE;
}

console.log(os.freemem());
console.log(kb(FREE_MEMORY) + ' KB');
console.log(mb(FREE_MEMORY) + ' MB');
console.log(gb(FREE_MEMORY) + ' GB');

console.log(gb(TOTAL_MEMORY) + ' GB');

console.log('dir: ', os.homedir());
console.log('tmp: ', os.tmpdir());
console.log('host: ', os.hostname());
console.log(os.networkInterfaces());
