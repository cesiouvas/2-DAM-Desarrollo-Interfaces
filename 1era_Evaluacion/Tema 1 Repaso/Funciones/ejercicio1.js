function e1(st1, st2) {
    if(typeof st1 !== "string" || typeof st2 !== "string") {
        console.log("No es un string");
    } 
    if (st1.length > st2.length) {
        console.log("La cadena 1 es la más larga");
    } else 
    if (st1.length < st2.length) {
        console.log("La cadena 2 es la más larga");
    } else 
    if (st1.length == st2.length) {
        console.log("Las cadenas miden lo mismo");
    }
}

e1("federico","juan");
e1("juan","federico");
e1("carlos","carlos");
e1("jose",2);