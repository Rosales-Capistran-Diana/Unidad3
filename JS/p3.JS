let nombre = prompt("Bienvenido al sitio. ¿Cuál es su nombre y actividad favorita?");
let guardar = confirm("¿Desea guardar la información?");
if(guardar){
    alert("Sus datos han sido registrados correctamente.");

} else{
    alert("Sus datos no han sido registrados.");
}
despedida();
feliz();


function saludar(nombre){
    console.log("Hola " + nombre);   
}
saludar(nombre);

function confirmar(guardar){
    console.log("¿Desea guardar la información? " + guardar);   
}
confirmar(guardar);

function despedida(){
    alert("Gracias por ingresar tus datos");
}
function feliz(){
    alert(":)");
}