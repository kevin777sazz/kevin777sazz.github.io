function cambiarFondo1() {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
}

function cambiarFondo() {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
}

function validarFormulario() {
    const nombre = document.getElementById("nombre").value
}

function mostrarHora(){
    const ahora = new Date();
    const horaActual = ahora.toLocaleTimeString();
    document.getElementById("hora").innerText = horaActual;
}

setInterval(mostrarHora, 1000);

mostrarHora();

/*compra ventana*/









