let cantCali = Number(prompt("¿Cuántas calificaciones quieres ingresar?"));
let cali =[];
    for(let i=0; i <cantCali; i++){
    let calif = prompt("Ingresa tu calificación #" + (i + 1));
    cali.push (calif);
}

function prom(){
    let suma = 0;
    for(let i=0; i <cantCali; i++){
        suma = suma+ Number(cali[i]);
    }
    let promedio= suma/cantCali;
    return promedio;
}

alert("Su promedio final es: " + prom() );
