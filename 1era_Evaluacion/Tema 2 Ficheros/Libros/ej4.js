const fs = require('fs');
let fichero = fs.readFileSync('./libros.json');

let libros = new Array();
libros = JSON.parse(fichero);

libros.forEach((item) => {
    if (item.eslibro === true) {
        console.log("Libro: ",item.title);
    } else {
        console.log("Comic: ",item.title);
    }
});