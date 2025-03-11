document.addEventListener("DOMContentLoaded", function () {
    const botonModoOscuro = document.getElementById("modoOscuroBtn");

    // Cargar modo oscuro si estaba activado antes
    if (localStorage.getItem("modoOscuro") === "activado") {
        document.body.classList.add("dark-mode");
    }

    botonModoOscuro.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Guardar preferencia en localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("modoOscuro", "activado");
        } else {
            localStorage.setItem("modoOscuro", "desactivado");
        }
    });
});
