let cali = confirm ("¿Desea añadir calificaciones?")
if (cali){
    let horario = {
    Materia1: prompt("Ingrese la calificación para Lenguajes y autómatas I"),
    Materia2: prompt("Ingrese la calificación para Arquitectura de computadoras"), 
    Materia3: prompt("Ingrese la calificación para Telecomunicaciones"),
    Materia4: prompt("Ingrese la calificación para Taller de bases de datos"),
    Materia5: prompt("Ingrese la calificación para Fundamentos de ingeniería de SW)",
    Materia6: prompt("Ingrese la calificación para Sistemas Operativos"),
    Materia7: prompt("Ingrese la calificación para Programación Web"),
    };
} else{
    alert("Vuelva pronto :)");
}
