let ver = confirm("¿Desea visualizar el horario?")
if (ver){
let horario = {
    Materia1: "9-10: Lenguajes y autómatas I",
    Materia2: "12-13: Arquitectura de computadoras", 
    Materia3: "13-14: Telecomunicaciones",
    Materia4: "14-15: Taller de bases de datos",
    Materia5: "15-16: Fundamentos de ingeniería de SW",
    Materia6: "16-17: Sistemas Operativos",
    Materia7: "17-18: Programación Web",

};
alert(JSON.stringify(horario, null,7));
} else{
    alert("Vuelva pronto :)");
}


