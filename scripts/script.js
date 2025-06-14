function mostrarAlerta() {
    alert("¡Cuidado! exceso de facha más adelante.");
}

function mostrarSeccion(id) {
    // Oculta todas las secciones
    const secciones = document.querySelectorAll('section');
    secciones.forEach(sec => {
        sec.style.display = "none";
    });

    // Muestra la sección seleccionada
    const activa = document.getElementById(id);
    if (activa) {
        activa.style.display = "block";
    }
}

// Cuando se carga la página
window.onload = function () {
    mostrarAlerta();
    mostrarSeccion("home");
};