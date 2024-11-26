let cali = confirm ("¿Desea añadir calificaciones?")
if (cali){
    let horario = {
    Materia1: Number(prompt("Ingrese la calificación para Lenguajes y autómatas I")),
    Materia2: Number(prompt("Ingrese la calificación para Arquitectura de computadoras")), 
    Materia3: Number(prompt("Ingrese la calificación para Telecomunicaciones")),
    Materia4: Number(prompt("Ingrese la calificación para Taller de bases de datos")),
    Materia5: Number(prompt("Ingrese la calificación para Fundamentos de ingeniería de SW")),
    Materia6: Number(prompt("Ingrese la calificación para Sistemas Operativos")),
    Materia7: Number(prompt("Ingrese la calificación para Programación Web")),

    sumarMat: function(){
        return this.Materia1 + this.Materia2 + this.Materia3 + this.Materia4 + this.Materia5 + this.Materia6 + this.Materia7; 
    },
    prom: function(){
    return this.sumarMat()/7;
    }

    };

    alert("La suma de sus calificaciones es: " + horario.sumarMat() + "\nSu promedio final es: " + horario.prom());
} else{
    alert("Vuelva pronto :)");
}
