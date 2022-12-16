'use strict'

// lectura de servidor
const http = require('http');

let options = {
	host: '127.0.0.1',
	port: 3000,
	path: '/'
};
let data = "";
let productos;

//petición de datos al servidor
let request = http.get(options, function (res) {
	// Un fragmento de datos ha sido recibido.
	res.on('data', function (rparcial) {
		data += rparcial;
	});
	// Toda la respuesta ha sido recibida.
	res.on('end', function () {
		productos = JSON.parse(data);
		//hasta que no recibo los datos no genero dom
		console.log(productos);
		generaDOM();
	});
	//en caso de error
	res.on('error', function (e) {
		console.log("There was an error: " + e.message);
	});
});

let generaDOM = () => {

	//contruir select
	let cadenaDOM = '<select id="select">';
	productos.forEach(producto => {
		cadenaDOM += `<option value="${producto.nombre}">${producto.nombre}</option>`;
	});
	cadenaDOM += '</select>';
	console.log(cadenaDOM);
	document.getElementById("desplegable").innerHTML = cadenaDOM;

	//función que cronstruye el div información
	let creaInformacion = (indice) => {
		cadenaDOM = `<table class="table-striped"><tbody>
				<tr><td>Descripción:</td><td>${productos[indice].nombre}</td></tr>
				<tr><td>Precio coste:</td><td>${productos[indice].precioCoste}</td></tr>
				<tr><td>Precio venta:</td><td>${productos[indice].precioVenta}</td></tr>
				<tr><td>Stock actual:</td><td>${productos[indice].stockActual}</td></tr>
				<tr><td>Stock mínimo:</td><td>${productos[indice].stockMin}</td></tr>
				<tbody></table>`;
		document.getElementById("informacion").innerHTML = cadenaDOM;
	}

	//añadir escuchador al select:
	document.getElementById("select").addEventListener('click', () => {
		let indice = document.getElementById("select").selectedIndex;
		console.log(indice);
		creaInformacion(indice);
	});

	//Ponemos la información del primer producto
	creaInformacion(0);

	//crear totales
	//primero se hacen los 'calculos'
	let suma = 0;
	productos.forEach(p => {
		suma += parseInt(p.stockActual);
	});
	console.log(suma);

	let stockmin = productos.filter(p => {
		return p.stockActual < p.stockMin;
	});
	console.log(stockmin);
	//después se contruye el html
	cadenaDOM = `<ul>
			<li>Total Productos: ${productos.length}</li>
			<li>Total Stock Actual: ${suma}</li>
			<li>Productos con stock por debajo del mínimo:
			
				<ol>`;

	stockmin.forEach(p => {
		cadenaDOM += `<li> ${p.nombre} </li>`;
	});
	cadenaDOM += `</ol>
			</li>
		</ul>`;
	console.log(cadenaDOM);
	document.getElementById("totales").innerHTML = cadenaDOM;
}