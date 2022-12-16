let datos = [1,2,3,4];
console.log(datos);

datos.push(5,6);
console.log(datos);

datos.unshift(7,8);
console.log(datos);

datos.splice(2,3);
console.log(datos);

datos.splice(datos.length-1, 0, "inser","tado");
console.log(datos);

console.log(datos.join("==>"));