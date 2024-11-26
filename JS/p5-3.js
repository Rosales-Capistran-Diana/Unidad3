let cantNum = Number(prompt("¿Cuántos números deseas ingresar?"));
let numeros =[];
for(let i=0; i <cantNum; i++){
    let num = Number(prompt("Ingresa el número #" + (i + 1)));
numeros.push (num);
}
function prom(){
    let suma = 0;
    for(let i=0; i <cantNum; i++){
        suma = suma+ Number(numeros[i]);
    }
    let promedio= suma/cantNum;
    return promedio;
}
alert("Los números ingresados fueron: " + numeros.join(", ") +"\nEl promedio final es: " + prom());