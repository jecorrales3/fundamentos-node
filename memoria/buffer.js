//let buffer = Buffer.alloc(4);
//let buffer = Buffer.from([1, 2, 5]);
let buffer = Buffer.from('Hola Mundo!');

//console.log('Buffer: ', buffer.toString());

let abc = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
  //console.log(`[${i}]: ${abc[i]}`);
}

console.log(abc.toString());
