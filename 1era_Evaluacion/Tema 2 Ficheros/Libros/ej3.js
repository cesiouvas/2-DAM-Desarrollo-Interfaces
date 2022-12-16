const fs = require('fs');
let fichero = fs.readFileSync('./libros.json');

let libros = new Array();
libros = JSON.parse(fichero);
//AÑADIR LIBRO
let añadir = {
    "title": "Buenas noches Punpun",
    "author": "Inio Asano",
    "price": "9",
    "img": "10.jpg",
    "eslibro": false
}
libros.push(añadir);

fs.writeFileSync('./libros.json', JSON.stringify(libros));

//ELIMINAR LIBRO
let nuevoL = remove("Buenas noches Punpun");
//console.log(libros);

fs.writeFileSync('./libros.json', JSON.stringify(libros));

function remove(tit) {
    let nuevo = libros.filter((tit) => nuevo.title !== tit);
    return nuevo;
};