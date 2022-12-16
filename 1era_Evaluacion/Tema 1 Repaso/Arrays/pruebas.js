let datos = [
    {nombre: "Nacho", telefono: "966112233", edad: 40},
    {nombre: "Ana", telefono: "911223344", edad: 35},
    {nombre: "Mario", telefono: "611998877", edad: 15},
    {nombre: "Laura", telefono: "633663366", edad: 17}
];
let d = datos.map(function(juan) {
    return juan.nombre;
});
console.log(d);

//nombre mayor
datos.sort(function(a,b) {
    return (a.edad - b.edad);
});
console.log("el mayor es "+datos[datos.length -1].nombre);