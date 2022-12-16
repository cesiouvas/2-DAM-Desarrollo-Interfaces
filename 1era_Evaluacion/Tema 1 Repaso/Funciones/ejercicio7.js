function media(nombre,...notas) {
    let cont = 0;
    let tot = 0, ju = 0;
    console.log(notas);
    console.log(notas.reduce(function(total, num) {
        cont++;
        ju = ju + total + num;
        return tot/cont; 
    }));
    
    };

media("cesio", 6, 7, 2 ,9, 8);