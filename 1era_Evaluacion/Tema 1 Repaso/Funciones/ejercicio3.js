function e3(cadena, letra) {
    let cont = 0;
    if(typeof cadena !== "string" || typeof letra !== "string") {
        console.log("No es un string");
    } 
    if(letra.length != 1) {
        console.log("El segundo parámetro debe ser una letra");
    }
    for(let i = 0; i < cadena.length; i++) {
        if (cadena[i] == letra) {
            cont++;
        }
    }
    console.log(cont);
}

e3("arandano","a");