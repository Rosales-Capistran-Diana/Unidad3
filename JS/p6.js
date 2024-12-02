function modificar() {
    let fondo = document.querySelector("body"); 
        fondo.style.backgroundColor= "white";
        
    let titulo = document.querySelectorAll(".grid h3");
        titulo.forEach(elemento => {
            elemento.innerHTML = "Adivine qué práctica es";
            elemento.style.color="black";
    });

    let subtitulo = document.querySelectorAll(".grid p");
    subtitulo.forEach(elemento => {
        elemento.innerHTML = "Adivino adivinador.";
        elemento.style.color="black";
    });

    let caja = document.querySelectorAll(".bento"); 
        caja.forEach(elemento => {
            elemento.style.backgroundColor = "white";
            elemento.style.padding = "30px";
    });

    let cuadros = document.querySelectorAll(".grid"); 
    cuadros.forEach(cuadro => {
        cuadro.addEventListener("mouseenter", () => {
            cuadro.style.backgroundColor = "black";
            cuadro.style.padding = "30px";
    });

    cuadro.addEventListener("mouseleave", () => {
        cuadro.style.backgroundColor = "pink";
        cuadro.style.padding = "";
    });
});

    
}