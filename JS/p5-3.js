let cantNum = Number(prompt("¿Cuántos números deseas ingresar?"));
let numeros =[];
for(let i=0; i <cantNum; i++){
    let num = Number(prompt("Ingresa el nombre de la fruta #" + (i + 1));)
numeros.push (num);
}
function prom(){
    let suma = 0;
    for(let i=0; i <cantCali; i++){
        suma = suma+ Number(cali[i]);
    }
    let promedio= suma/cantCali;
    return promedio;
}
alert("Los números ingresados fueron: " + numeros.join(", ") +"\nEl promedio final es: " + prom());