const fs = require('fs');
let fichero = fs.readFileSync('./libros.json');

let libros = new Array();
libros = JSON.parse(fichero);

console.log(libros);