function modificar() {
    let titulo = document.querySelectorAll(".grid h3");
        titulo.forEach(elemento => {
            elemento.innerHTML = "Adivine qué práctica es";
    });

    let caja = document.getElementById("bento"); // o querySelector(".bento") si es clase
        caja.style.backgroundColor = "red";
        caja.style.color = "black";
        caja.style.padding = "30px";
}