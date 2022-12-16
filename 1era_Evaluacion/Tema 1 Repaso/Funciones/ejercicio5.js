let e5 = (str1, str2) => {
    str1 = String(str1);
    str2 = String(str2);
    
    if (str1.includes(str2)) {
        console.log("La primera cadena contiene a la segunda palabra");
    } else {
        console.log("No contiene la segunda palabra");
    }
};

e5("caballogalopando","llogal");