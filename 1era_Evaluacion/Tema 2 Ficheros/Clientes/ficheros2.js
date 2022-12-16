//SOLO LECTURA
const fs = require('fs');
let fichero = fs.readFileSync('./clientes.json');

let contenido = JSON.parse(fichero);
contenido.listaClientes[1].nombre = "Jonathan";

//CAMBIA EL CONTENIDO DEL FICHERO
fs.writeFileSync('./clientes.json',JSON.stringify(contenido));
console.log(contenido.listaClientes[1].nombre);

