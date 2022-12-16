const { MongoClient } = require('mongodb');
const { text } = require('stream/consumers');

//URL para conectarse a la base de datos
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
//Base de datos que se va a usar
const dbName = 'encuestas';
let preguntas;

async function main() {
    //Promesa --> Espera a que se ejecute para poder continuar, se conecta a la base de datos, si no existe la crea
    await client.connect();
    console.log('Connected successfully to server');
    //Que base de datos se va a usar
    const db = client.db(dbName);
    //Que tabla se va a usar
    const collection = db.collection('preguntas');

    preguntas = await collection.find({}).toArray();
}

//Llamar a la función
main()
    .then(() => {
        console.log(preguntas);
        let text = document.getElementById("texto");
        let r1 = document.getElementById("radio1");
        let r2 = document.getElementById("radio2");
        let r3 = document.getElementById("radio3");
        let cad = ``;
        let id = 1;

        function rellenar() {
            for (let i = 0; i < preguntas.length; i++) {
                cad += `<img src="images/${i + 1}.png" class="redondo">
                        <p><b>${preguntas[i].pregunta}</b></p>
                        <input type="radio" id="radio${id}" name="radios${i}" value="a"> ${preguntas[i].rA}
                        <br>`;
                id++;
                cad += `<input type="radio" id="radio${id}" name="radios${i}" value="b"> ${preguntas[i].rB}
                        <br>`;
                id++;
                cad += `<input type="radio" id="radio${id}" name="radios${i}" value="c"> ${preguntas[i].rC}
                        <`;
                id++;
            }
            return cad;
        }
        text.innerHTML = rellenar();
    })

    .catch(() => {
        console.log("Ha ocurrido un error")
    })
    
    .finally(() => {
        client.close()
    });



