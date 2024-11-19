let nombre = prompt("¿Cuál es tu nombre completo?");
let edad = prompt ("¿Cuál es tu edad?");
let pais = prompt ("¿Cuál es tu pais de residencia?");
alert("Hola " + nombre + ", usted acaba de registrar que cuenta con la edad de  " + edad + " años, además de contar con un lugar de residencia en " + pais  +". Usted ha sido registrad@");

let v = prompt("¿Los datos ingresados son correctos?");
if (v =="SI" || v == "Si" || v =="si"){
    alert("Registro guardado correctamente:" + nombre + ", " + edad + " años, " + pais);
}else{
    alert("Registro borrado."); 
}