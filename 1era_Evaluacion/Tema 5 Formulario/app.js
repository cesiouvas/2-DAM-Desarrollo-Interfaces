let dni = document.getElementById('dni');
let nom = document.getElementById('nom');
let tlf = document.getElementById('tlf');

const { sign } = require('crypto');
const { dialog } = require('@electron/remote');
const fs = require('fs');
const { dirname } = require('path');
let fichero = fs.readFileSync('./cliente.json');
let control = false;

let vclientes = new Array();
vclientes = JSON.parse(fichero);

/* Muestra los clientes de las posiciones actuales */
let pos = 0;
let mostrar = () => {
    dni.value = vclientes[pos].dni;
    nom.value = vclientes[pos].nombre;
    tlf.value = vclientes[pos].telefono;
};

/* Primer cliente */
prim.addEventListener("click", () => {
    pos = 0;
    mostrar();
});

/* Siguiente cliente */
sig.addEventListener("click", () => {
    if (pos < vclientes.length - 1) {
        pos++;
        mostrar();
    } else {
        dialog.showErrorBox("Atención", "Último cliente");
        mostrar();
    }
});

/* Anterior cliente */
ant.addEventListener("click", () => {
    if (pos > 0) {
        pos--;
        mostrar();
    } else {
        dialog.showErrorBox("Atención", "Primer cliente");
        mostrar();
    }
});

/* Último cliente */
fin.addEventListener("click", () => {
    pos = vclientes.length - 1;
    mostrar();
});

/* Elimina el cliente actual */
del.addEventListener("click", () => {
    vclientes.splice(pos, 1);
    fs.writeFileSync('./cliente.json', JSON.stringify(vclientes));
});

/* Actualiza el cliente que se está editando en estos momentos */
upload.addEventListener("click", () => {
    vclientes[pos].dni = dni.value;
    vclientes[pos].nombre = nom.value;
    vclientes[pos].telefono = tlf.value;
    fs.writeFileSync('./cliente.json', JSON.stringify(vclientes));
});

insert.addEventListener("click", () => {
    if (control == false) {
        //Codigo ....
        dni.value = "";
        nom.value = "";
        tlf.value = "";
        //cambio la clase del botÃ³n
        insert.classList.remove("btn-primary");
        insert.classList.add("btn-negative");
        control = true
    } else {
        //Codigo ....
        let imp = {
            dni: dni.value, nombre: nom.value, telefono: tlf.value
        }
        vclientes.push(imp);
        fs.writeFileSync('./cliente.json', JSON.stringify(vclientes));
        //cambio la clase del botÃ³n
        insert.classList.remove("btn-negative");
        insert.classList.add("btn-primary");
        control = false
    }
});
