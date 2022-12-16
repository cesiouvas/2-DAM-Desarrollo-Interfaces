/*CAMBIO EL VALOR DEL TEXTO
let juan = document.getElementById('tit');
juan.innerHTML = "Adios sergio :'("*/

let d = document.getElementById('dick');
let b = document.getElementById('siono');
let b2 = document.getElementById('noosi');
let b3 = document.getElementById('libro');
let t = document.getElementById('tit');
let c = 0;
let nom = ["juan", "nohema", "sergiouvas", "calvo", "manolo", "ojete"];
let libros = require('./data/libros.json');

//inerHTML para todo tipo de etiquetas menos las "input"
//value sólo para etiquetas input
b.addEventListener('click', () => {
    /*
    c++;
    d.innerHTML = "tumaharbitsaun "+c+"<br>"; //= sobreescribe     += añade sin sobreescribir
    t.value = c;
    */
    d.innerHTML = "";
    let n = Number(t.value);
    for (let i = 1; i <= n; i++) {
        d.innerHTML += "juan " + i + " veces<br>";
    }
});

t.addEventListener('keyup', (evento) => {
    d.innerHTML = "";
    if (evento.key == "Enter") {
        let n = Number(t.value);
        for (let i = 1; i <= n; i++) {
            d.innerHTML += "juan " + i + " veces<br>";
        }
        //alert("ENTRA!!");
    }
});

b2.addEventListener('click', () => {
    d.innerHTML = "";
    for (let i = 0; i < nom.length; i++) {
        d.innerHTML += nom[i] + "</br>";
    }
});

b3.addEventListener('click', () => {
    let cad = '<table class="table-striped">' +
        '<thead>' +
        '<tr>' +
        '<th>titulo tocapelota</th><th>autor</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>';
    for (let i = 0; i < libros.length; i++) {
        cad += '<tr>' +
               '<td>' + libros[i].title + "</td>" +
               '<td>' + libros[i].author + "</td>" +
               "</tr>";
    }
    cad += '</tbody></table>';
    console.log(cad);
    d.innerHTML = cad;
});