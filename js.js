const pantalla = document.querySelector(".pantalla");
const btn = document.querySelectorAll(".btn");

function manejarEntrada(boton) {
    const botonApretado = boton.textContent;

    if (boton.id === "c") {
        pantalla.textContent = "0";
        return;
    }

    if (boton.id === "borrar") {
        pantalla.textContent = pantalla.textContent.length === 1 || pantalla.textContent === "Error!"
            ? "0"
            : pantalla.textContent.slice(0, -1);
        return;
    }

    if (boton.id === "igual") {
        try {
            pantalla.textContent = Function(`"use strict"; return (${pantalla.textContent})`)();
        } catch {
            pantalla.textContent = "Error!";
        }
        return;
    }

    pantalla.textContent =
        pantalla.textContent === "0" || pantalla.textContent === "Error!"
            ? botonApretado
            : pantalla.textContent + botonApretado;
}

btn.forEach(boton => {
    boton.addEventListener("click", () => manejarEntrada(boton));
});
