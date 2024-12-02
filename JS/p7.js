function eliminar(){
    let borrar = document.querySelector("li")
    borrar.remove();
}

function añadir(){
    let peli= prompt("Agregue el nombre de una película: ");
    let url = prompt("Ingrese el link de esa misma película: ");
    let nav = document.createElement('nav');
    nav.innerHTML = "<a href='"+ url +"'>"+ peli +"</a>";

    let pelnuev = document.getElementById("menu");
    pelnuev.appendChild(nav);

    
}
