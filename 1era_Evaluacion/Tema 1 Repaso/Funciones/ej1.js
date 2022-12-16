/*FINCIÓN TRADICIONAL
function sumar(num1, num2) {
    return num1 + num2;
};   */

/* FUNCIÓN ANÓNIMA
let sumar = function(num1, num2) {
    return num1 + num2;
};   */

let sumar = (num1, num2) => {
    return num1 + num2;
};

let s = sumar(4,6);
console.log(s);
    