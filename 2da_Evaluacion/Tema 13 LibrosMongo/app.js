const { MongoClient } = require('mongodb')

//URL para conectarse a la base de datos
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);
//Base de datos que se va a usar
const dbName = 'ejLibros'
let libros;

async function main() {
    //Promesa --> Espera a que se ejecute para poder continuar, se conecta a la base de datos, si no existe la crea
    await client.connect();
    console.log('Connected successfully to server');
    //Que base de datos se va a usar
    const db = client.db(dbName);
    //Que tabla se va a usar
    const collection = db.collection('libros');

    libros = await collection.find({}).toArray();
}

main()
    .then(() => {
        console.log(libros);
        let main = document.getElementById("main")
        let cad = ``
        let cesta = []
        let comp = false
        let btnCantidad = document.getElementById('btn')

        //Imprime todos los libros disponibles de la tienda
        function rellenar() {
            for (let i = 0; i < libros.length; i++) {
                cad += `
                <div class="tabla" id="libro${i}">
                    <img id="img${i}" src="./images/${libros[i].img}" class="imagen">
                    <p class="tit">${libros[i].title}</p>
                    <p>${libros[i].author}</p>
                </div>`
            }
            return cad
        }

        //Crea los botones de cada libro y los añade a la cesta de libros
        function crearBotones() {
            for (let i = 0; i < libros.length; i++) {
                document.getElementById("libro" + i).addEventListener('click', () => {
                    if (comp == false) {
                        cesta.push(libros[i])
                        btnCantidad.innerHTML = cesta.length
                    }
                })
            }
        }

        //Imprime la barra lateral (cesta) y le asigna el evento click a los botones de eliminar
        function barraLateral() {
            let cad2 = ``
            for (let i = 0; i < cesta.length; i++) {
                cad2 += `
            <div class="lateral sidebar">
                <img src="./images/${cesta[i].img}" class="imagenCesta">
                <h2 class="textoCesta">${cesta[i].title}</h2>
                <h2 class="textoCesta">${cesta[i].author}</h2>
                <button id="elim${i}" class="elim">Eliminar</button>
            </div>`
            }
            console.log(cesta)
            sacar.innerHTML = cad2

            for (let i = 0; i < cesta.length; i++) {
                document.getElementById("elim" + i).addEventListener('click', () => { borrarCesta(i) })
            }
        }

        //Botón que enseña o esconde la cesta de libros que se quieren comprar
        btnCantidad.addEventListener('click', () => {
            if (comp == false) {
                barraLateral()
                if (cesta.length == 0) {
                    sacar.innerHTML = `<div class="lateral sidebar">
                                       </div>`
                }
                comp = true
            } else {
                sacar.innerHTML = ""
                comp = false
            }
        })

        //Borra los libros de la cesta y la imprime en tiempo real
        function borrarCesta(num) {
            cesta.splice(num, 1)
            console.log(cesta)
            btnCantidad.innerHTML = cesta.length
            barraLateral()
            if (comp == true && cesta.length == 0) {
                sacar.innerHTML = `<div class="lateral sidebar">
                                       </div>`
            }
        }

        //Llamamiento de métodos
        main.innerHTML = rellenar()
        crearBotones()
        borrarCesta()

    })

    .catch(() => {
        console.log("Ha ocurrido un error")
    })

    .finally(() => {
        client.close()
    })