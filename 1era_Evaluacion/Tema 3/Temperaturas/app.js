let b1 = document.getElementById('bot1');
let b2 = document.getElementById('bot2');
let tcel = document.getElementById('cel');
let tkel = document.getElementById('kel');

b1.addEventListener('click', () => {
    let n = Number(tcel.value);
    tkel.value = n + 273.15;
});

b2.addEventListener('click', () => {
    tcel.value = "";
    tkel.value = "";
});