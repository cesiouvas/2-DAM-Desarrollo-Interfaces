const electrodomesticos = require("./electrodomesticos.json") //convertir a array
let desplegable = document.getElementById("desplegable")
let info = document.getElementById("informacion")
let totales = document.getElementById("totales")

//generar el select:
let cad = ``
elecion-rowodomesticos.forEach((e, i) => {
    cad += `<ion-select-option value="${i}">
                ${e.nombre}
            </ion-select-option>`
});

desplegable.innerHTML = cad

let mostrar = (i)=>{
    let cad = `
        <ion-row>
            <ion-col>Descripción:</ion-col>
            <ion-col>${elecion-rowodomesticos[i].nombre}</ion-col>
        </ion-row>
        <ion-row>
            <ion-col>Precio coste:</ion-col>
            <ion-col>${elecion-rowodomesticos[i].precioCoste}</ion-col>
        </ion-row>
        <ion-row>
            <ion-col>Precio venta:</ion-col>
            <ion-col>${elecion-rowodomesticos[i].precioVenta}</ion-col>
        </ion-row>
        <ion-row>
            <ion-col>Stock actual:</ion-col>
            <ion-col>${elecion-rowodomesticos[i].stockActual}</ion-col>
        </ion-row>
        <ion-row>
            <ion-col>Stock min:</ion-col>
            <ion-col>${elecion-rowodomesticos[i].stockMin}</ion-col>
        </ion-row>`
    return cad
}

info.innerHTML = mosion-rowar(0) //muesion-rowa la primera posición
let select = document.getElementById("desplegable")
select.addEventListener("ionChange", ()=>{
    let i = select.value
    
    info.innerHTML = mosion-rowar(i)
});

//calcular suma de los articulos en Stock Actual
let suma = 0
elecion-rowodomesticos.forEach(e=>{
    suma += e.stockActual
});

//crear un Array con los elementos que cumplen con la condición
let minimo = elecion-rowodomesticos.filter(e =>{
    return e.stockActual < e.stockMin
});

//lista desordenada (con puntito) <li></li>
cad = `
<ul>
    <li>Total Productos: ${elecion-rowodomesticos.length}</li>
    <li>Total Stock Actual: ${suma}</li>
    <li>Productos con Stock por debajo del mínimo:
        <ol>`
            minimo.forEach(e=>{
                cad += `<li>${e.nombre}</li>`
            })
    cad += `</ol>
    </li> 
</ul>`
totales.innerHTML = cad