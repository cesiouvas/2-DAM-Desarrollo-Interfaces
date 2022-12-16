function producto(nombre="producto generico", precio = 100, impuesto = 21) {
    nombre = String(nombre);
    precio = Number(precio);
    impuesto = Number(impuesto);

    console.log(nombre,precio,impuesto);
}

producto();
producto("sandia", 45,4);
producto("sandia", "juan",4);