let frutas =[];
for(let i=0; i <4; i++){
    let fruta = prompt("Ingresa el nombre de la fruta #" + (i + 1));
frutas.push (fruta);
}
alert("Las frutas que se ingresaron fueron: " + frutas.join(", "));