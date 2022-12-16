let apuesta = document.getElementById('apuesta');
let palo = document.getElementById('palo');
let credito = document.getElementById('credito');

let btnApostar = document.getElementById('btnApostar');
let reset = document.getElementById('reset');
let noti = document.getElementById('noti');

let cre = 0;
let creditTotal = 1000;
let inPalo;
let inApuesta;
let cart = new Array(6);

let numVuelta = 0;
let srcImg;
let coincide = 0;

credito.innerHTML = creditTotal;

//LLAMADA DEL METODO APOSTAR
btnApostar.addEventListener("click", () => {
    apostar();
    palo.disabled = false;
});

//METODO PARA REINICIAR EL PROGRAMA
reset.addEventListener('click', () => {
    creditTotal = 1000;
    credito.innerHTML = creditTotal;
    numVuelta = 0;
    coincide = 0;
    apuesta.value = 0;
    palo.value = "Oros";
    for (let i = 1; i <= cart.length; i++) {
        cart[i - 1] = "./images/dorso.png";
        document.getElementById("img" + i).src = "./images/dorso.png";
    }
});

//LLAMADA DE GIRAR CARTAS
document.getElementById("img1").addEventListener('click', () => { cartasVuelta(1); });
document.getElementById("img2").addEventListener('click', () => { cartasVuelta(2); });
document.getElementById("img3").addEventListener('click', () => { cartasVuelta(3); });
document.getElementById("img4").addEventListener('click', () => { cartasVuelta(4); });
document.getElementById("img5").addEventListener('click', () => { cartasVuelta(5); });
document.getElementById("img6").addEventListener('click', () => { cartasVuelta(6); });

//FUNCION PARA APOSTAR
function apostar() {
    inApuesta = apuesta.value;

    for (let i = 1; i <= cart.length; i++) {
        cart[
            i - 1] = Math.round(Math.random() * (4 - 1) + 1);
        console.log("resultado " + 1 + ": " + cart[i - 1]);
    }
}

//FUNCION PARA DARLE LA VUELTA A LAS CARTAS
function cartasVuelta(carta) {
    inPalo = palo.value;
    numVuelta++;
    switch (cart[carta - 1]) {
        case 1:
            srcImg = "./images/oros.png";
            if (inPalo == "oros") {
                coincide++;
            }
            break;
        case 2:
            srcImg = "./images/bastos.png";
            if (inPalo == "bastos") {
                coincide++;
            }
            break;
        case 3:
            srcImg = "./images/espadas.png";
            if (inPalo == "espadas") {
                coincide++;
            }
            break;
        case 4:
            srcImg = "./images/copas.png";
            if (inPalo == "copas") {
                coincide++;
            }
            break;
    }

    //CAMBIAR IMAGEN DE LA CARTA
    document.getElementById("img" + carta).setAttribute("src", srcImg)
    if (numVuelta == 6) {
        comprobar();
    }
}

//COMPROBAR SI SE GANA O SE PIERDE
function comprobar() {
    if (coincide >= 2) {
        creditTotal = parseInt(creditTotal) + parseInt(apuesta.value);
        credito.innerHTML = creditTotal;
    } else {
        creditTotal = parseInt(creditTotal) - parseInt(apuesta.value);
        credito.innerHTML = creditTotal;
    }
    coincide = 0;
    numVuelta = 0;
    noti.opened = true;
    palo.disabled = false;
}