let datos = [
    {nombre: "Nacho", telefono: "966112233", edad: 40},
    {nombre: "Ana", telefono: "911223344", edad: 35},
    {nombre: "Mario", telefono: "611998877", edad: 15},
    {nombre: "Laura", telefono: "633663366", edad: 17}
];

datos.push({nombre: "Pedro", telefono: "611944444", edad: 25},
           {nombre: "Julia", telefono: "633232323", edad: 37});
console.log("2. Añade elementos al final");
console.log(datos);

let c = datos.sort(function(a,b){
    return a.edad-b.edad
});

console.log("\n4. Ordena por edad");
console.log(c);

let d = datos.sort((a,b) => a.nombre.localeCompare(b.nombre));
console.log("\n5. Ordena por nombre");
console.log(d);

let nuevo = new Array();
nuevo = datos.filter(function(num) {
    return num.edad > 30;
});

console.log("\n6. Crea otro vector con solo mayores de 30 años");
console.log(nuevo);