let contador = 0;
const contadorElemento = document.getElementById("contador");
contadorElemento.textContent = contador;

function atualizarContador() {
    contadorElemento.textContent = contador;
    contadorElemento.style.transform = "scale(1.2)";
    setTimeout (() => contadorElemento.style.transform = "scale(1)", 200);
    localStorage.setItem("contador", contador)

    const modoEscuroAtivo = document.body.classList.contains("dark-mode");

    if (contador < 0) {
        contadorElemento.style.color = "red";
    } else {
        contadorElemento.style.color = modoEscuroAtivo ? "white" : "black";
    }
}

document.getElementById("incrementar").addEventListener("click", () => {
    contador++;
    atualizarContador();
});

document.getElementById("decrementar").addEventListener("click", () => {
    contador--;
    atualizarContador();
});

document.getElementById("resetar").addEventListener("click", () => {
    contador = 0;
    atualizarContador();
});

document.getElementById("modo-escuro").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    atualizarContador();
});

atualizarContador();