let nombre = prompt("Bienvenido al sitio. ¿Cuál es su nombre y actividad favorita?");
let guardar = confirm("¿Desea guardar la información?");
if(guardar){
    alert("Sus datos han sido registrados correctamente.");
} else{
    alert("Sus datos no han sido registrados.");
}

let registro = confirm("¿Desea agregar más registros?")
if(registro){
    let nombre = prompt("Bienvenido nuevamente al sitio. ¿Cuál es su nombre y actividad favorita?");
    let guardar = confirm("¿Desea guardar la información?");
        if(guardar){
            alert("Sus datos han sido registrados correctamente.");
        } else{
            alert("Sus datos no han sido registrados.");
        }
} else{
    alert("¡Gracias! Sus datos han sido registrados.");
}