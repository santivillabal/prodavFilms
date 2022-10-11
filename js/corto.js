const corto = JSON.parse(localStorage.getItem("corto"));
const cortoTitulo = document.getElementById("cortoTitulo");
const cortoAfiche = document.getElementById("cortoAfiche");
const cortoDescripcion = document.getElementById("cortoDescripcion");
const cortoBtn = document.getElementById("cortoBtn");

document.addEventListener("DOMContentLoaded", () => {
    console.log(corto);
    cortoTitulo.innerText = corto.nombre;
    cortoDescripcion.innerText = corto.sinopsis;
    cortoAfiche.src = corto.afiche;
    corto.link !== "" ? cortoBtn.href = corto.link : cortoBtn.style.display = "none";
})
