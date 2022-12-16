const { dialog } = require('@electron/remote');
let imagen = document.getElementById("imagen");
let guiones = document.getElementById("guiones");
let gui = "";
let fallos = 0;
let acierto = false;

letra.disabled = true;

palabra.addEventListener('keyup', (evento) => {
    if (evento.key == "Enter") {
        for (let i = 0; i < palabra.value.length; i++) {
            gui += "-";
        }
        guiones.innerHTML = gui;
        palabra.disabled = true;
        letra.disabled = false;
    }
});

letra.addEventListener('keyup', (evento) => {
    if (evento.key == "Enter") {
        acierto = false;
        let gui = guiones.innerHTML;
        for (let i = 0; i < palabra.value.length; i++) {
            if (letra.value == palabra.value[i]) {
                //acierto
                gui = gui.substring(0, i) +
                    letra.value +
                    gui.substring(i + 1, palabra.length);
                acierto = true;
            }
        }

        if (acierto == false) {
            fallos++;
        }
        //FALLO Y CAMBIO DE IMAGEN
        if (fallos == 1) {
            imagen = document.getElementById("imagen").src = "./img/1.png";
        } else if (fallos == 2) {
            imagen = document.getElementById("imagen").src = "./img/2.png";
        } else if (fallos == 3) {
            imagen = document.getElementById("imagen").src = "./img/3.png";
        } else if (fallos == 4) {
            imagen = document.getElementById("imagen").src = "./img/4.png";
        } else if (fallos == 5) {
            imagen = document.getElementById("imagen").src = "./img/5.png";
        } else if (fallos == 6) {
            imagen = document.getElementById("imagen").src = "./img/6.png";
        }
        guiones.innerHTML = gui;

        if (fallos > 6) {
            dialog.showMessageBox({
                message: 'Fin del juego!',
                type: 'info',
                buttons: ['Okay'],
                title: 'Ahorcado'
            });
            palabra.disabled = true;
            letra.disabled = true;
        }
    
        if (gui==palabra.value) {
            dialog.showMessageBox({
                message: 'Has ganado!!',
                type: 'info',
                buttons: ['Okay'],
                title: 'Ahorcado'
            });
            palabra.disabled = true;
            letra.disabled = true;
        }
    }
});

reset.addEventListener("click", () => {
    imagen = document.getElementById("imagen").src = "./img/0.png";
    palabra.value = "";
    letra.value = "";
    gui = "";
    fallos = 0;
    palabra.disabled = false;
    guiones.innerHTML = gui;
    acierto = false;
});
