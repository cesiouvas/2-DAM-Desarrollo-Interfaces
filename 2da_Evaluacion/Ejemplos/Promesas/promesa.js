let datos = [
    { nombre: "Nacho", telefono: "966112233", edad: 40 },
    { nombre: "Ana", telefono: "911223344", edad: 35 },
    { nombre: "Mario", telefono: "611998877", edad: 15 },
    { nombre: "Laura", telefono: "633663366", edad: 17 }
];

//PRIMERA FORMA DE DEFINIR PROMESA
let promesaMayoresDeEdad = new Promise((resolve, reject) => {
    //CODIGO A EJECUTAR
    let resultado = datos.filter(persona => persona.edad >= 10);
    if (resultado.length > 0) //SI HA IDO BIEN
        resolve(resultado);
    else                      //SI HA IDO MAL
        reject("No hay resultados");
});

promesaMayoresDeEdad.then(resultado => {
    // Si entramos aquí, la promesa se ha procesado bien
    // En "resultado" podemos acceder al resultado obtenido
    console.log("Coincidencias encontradas:");
    console.log(resultado);
}).catch(error => {
    // Si entramos aquí, ha habido un error al procesar la promesa
    // En "error" lo podemos consultar
    console.log("Error:", error);
});

//SEGUNDA FORMA DE DEFINIR PROMESA
let promesaMayoresDeEdad1 = listado => {
    return new Promise((resolve, reject) => {
        let resultado = listado.filter(persona => persona.edad >= 18);
        if (resultado.length > 0)
            resolve(resultado);
        else
            reject("No hay resultados");
    });
};

let p = promesaMayoresDeEdad1(datos).then(resultado => {
    // Si entramos aquí, la promesa se ha procesado bien
    // En "resultado" podemos acceder al resultado obtenido
    console.log("Coincidencias encontradas:");
    console.log(resultado);
}).catch(error => {
    // Si entramos aquí, ha habido un error al procesar la promesa
    // En "error" lo podemos consultar
    console.log("Error:", error);
});

//esperando que acabe
Promise.all([p]).then(values => { //podríamos acabar a que acabaran más de una promesa
    console.log("acabaron las promesas");
});

//uso asíncrono con await y async
const buscar = async () => {
    try {
        const resultado = await promesaMayoresDeEdad(datos);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
};
buscar();