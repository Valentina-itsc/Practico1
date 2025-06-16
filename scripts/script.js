function mostrarAlerta() {
    alert("¡Cuidado! exceso de facha más adelante.");
}

function mostrarSeccion(id) {
    /*Oculta todas las secciones*/
    const secciones = document.querySelectorAll('section');
    secciones.forEach(sec => {
        sec.style.display = "none";
    });

    /*Muestra la sección actuva*/
    const activa = document.getElementById(id);
    if (activa) {
        activa.style.display = "block";
    }
}

/*Va a mostrar esto cuando cargue la pagina (la alerta y home)*/
window.onload = function () {
    mostrarAlerta();
    mostrarSeccion("home");

    /*aca va el evento para el select*/
    const pregunta = document.getElementById("pregunta");
    const otraOpcion = document.getElementById("otraOpcion");
    otraOpcion.classList.add("escondida");

    pregunta.addEventListener("change", function () {
        const op = this.value;
        if (op === "otro") {
            otraOpcion.classList.remove("escondida");
        } else {
            otraOpcion.classList.add("escondida");
        }
    });
};

/*alerta cuando se hace click en el boton*/

const boton = document.getElementById("boton");
boton.addEventListener("click", function () {
    alert("¡Mensaje enviado!");
});