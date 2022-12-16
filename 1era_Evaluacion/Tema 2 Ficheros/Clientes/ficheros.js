const fs = require('fs');
let fichero = fs.readFileSync('./clientes.json');

let clientes = new Array();

//clientes = JSON.parse(fichero);
//console.log(clientes);
//console.log(clientes[0].nombre);

clientes = JSON.parse(fichero);
let nuevo = {
    dni: "77777777",
    nombre: "Pepín",
    telefono: "777"
}
clientes.push(nuevo);

console.log(clientes);

fs.writeFileSync('./clientes.json', JSON.stringify(clientes));