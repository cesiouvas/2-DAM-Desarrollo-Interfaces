const num = 0;
for (let i = 20; i > num; i--) {
    console.log(" * ".repeat(i)+" *");
}

/* EJEMPLO DEL SENIOR */

const n = 20;
let s = "";
for(let i = 0; i < n; i++) {
    s = " * ";
    for(let j = 0; j < (n-i); j++) {
        s+= " * ";
    }
    console.log(s);
}