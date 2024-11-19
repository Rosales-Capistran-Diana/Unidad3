let nombre = prompt("Bienvenido al sitio. ¿Cuál es su nombre y actividad favorita?");
saludar(nombre);
let guardar = confirm("¿Desea guardar la información?");
confirmar(guardar);
if(guardar){
    alert("Sus datos han sido registrados correctamente.");

} else{
    alert("Sus datos no han sido registrados.");
}

despedida();
feliz();

function saludar(nombre){
    alert("Hola " + nombre);   
}

function confirmar(guardar){
    alert("¿Desea guardar la información? " + guardar);   
}

function despedida(){
    alert("Gracias por ingresar tus datos");
}
function feliz(){
    alert(":)");
}