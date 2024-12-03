const suma = (a, b) => a + b;
const mostrarSuma = () => {
    const resultado = suma(7, 123);
    alert("El resultado de 7 + 123 es:" + resultado);
};

function esPar() {
    const numero = 5;
    const comparacion = (num) => {
        if (num % 2 === 0) {
            return "Es par";
        } else {
            return "Es impar";
        }
    };
    const resultado = document.getElementById('Resultado_comparar');
            alert("El numero 5 es: " + comparacion(numero));
        }

function map(){
    let arreglo = [4, 5, 6, 7];
    let numeros = arreglo.map(num => num * 2);
    let Resultado = document.getElementById('esPar');
    alert("Números: [4, 5, 6, 7]"+ "\nResultado: " + numeros);
}

function nombres(){
    let objeto = [
        {
            id: 1,
            nombre: "a"
        },
        {
            id: 2,
            nombre: "e"
        },
        {
            id: 3,
            nombre: "i"
        },
        {
            id: 4,
            nombre: "o"
        },
        {
            id: 5,
            nombre: "u"
        }
    ]

    let nombres = objeto.map(obj => obj.nombre);
    let Resultado = document.getElementById('Nombres');
    alert("Los nombres son: " + nombres);
}