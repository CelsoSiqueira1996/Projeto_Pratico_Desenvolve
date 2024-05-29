const modal = document.querySelector(".modal");
const loginUsuario = document.querySelector(".container__link-usuario");
const registrarUsuario = document.querySelector(".formulario__texto__novo-usuario");
const formularioNovoUsuario = document.querySelector(".formulario__registrar");
const formularioLogin = document.querySelector(".formulario__entrar");
const modalTextoInicial = document.querySelector(".formulario__texto-inicial");
const modalTextoSecundario = document.querySelector(".formulario__texto-secundario");
const logarUsuario = document.querySelector(".formulario__texto__login");
const btnFecharModal = document.querySelector(".fechar");

function esconderElemento(elemento) {
    elemento.style.display = "none";
}

function aparecerElemento(elemento) {
    elemento.style.display = "block";
}

loginUsuario.addEventListener("click", () => {
    aparecerElemento(modal);
});

window.addEventListener("click", (evento) => {
    if(evento.target == modal) {
        esconderElemento(modal);
    }
});

registrarUsuario.addEventListener("click", () => {
    esconderElemento(formularioLogin);
    esconderElemento(modalTextoInicial);
    aparecerElemento(formularioNovoUsuario);
    aparecerElemento(modalTextoSecundario);
});

logarUsuario.addEventListener("click", () => {
    aparecerElemento(formularioLogin);
    aparecerElemento(modalTextoInicial);
    esconderElemento(formularioNovoUsuario);
    esconderElemento(modalTextoSecundario);
});

registrarUsuario.addEventListener("mouseover", () => {
    registrarUsuario.setAttribute(
        "style",
        "text-decoration: underline; cursor: pointer; color: green" 
    );
});

registrarUsuario.addEventListener("mouseout", () => {
    registrarUsuario.removeAttribute("style");
});

logarUsuario.addEventListener("mouseover", () => {
    logarUsuario.setAttribute(
        "style",
        "text-decoration: underline; cursor: pointer; color: green" 
    );
});

logarUsuario.addEventListener("mouseout", () => {
    logarUsuario.removeAttribute("style");
});

btnFecharModal.addEventListener('click', () => {
    esconderElemento(modal);
});