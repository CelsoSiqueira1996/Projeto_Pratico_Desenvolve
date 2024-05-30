const modal = document.querySelector(".modal");
const loginUsuario = document.querySelector("#pagina__inicial");
const registrarUsuario = document.querySelector(".formulario__texto__novo-usuario");
const formularioNovoUsuario = document.querySelector(".formulario__registrar");
const formularioLogin = document.querySelector(".formulario__entrar");
const modalTextoInicial = document.querySelector(".formulario__texto-inicial");
const modalTextoSecundario = document.querySelector(".formulario__texto-secundario");
const logarUsuario = document.querySelector(".formulario__texto__login");
const btnFecharModal = document.querySelector(".fechar");
const mensagensErro = document.querySelectorAll(".mensagem-erro");

function apagarMensagensErro() {
    mensagensErro.forEach((mensagem) => {
        mensagem.textContent = "";
    })
}

function resetarFormulario(formulario) {
    formulario.reset();
}

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
        resetarFormulario(formularioNovoUsuario);
        resetarFormulario(formularioLogin);
        apagarMensagensErro();
    }
});

registrarUsuario.addEventListener("click", () => {
    esconderElemento(formularioLogin);
    esconderElemento(modalTextoInicial);
    resetarFormulario(formularioLogin);
    apagarMensagensErro();
    aparecerElemento(formularioNovoUsuario);
    aparecerElemento(modalTextoSecundario);
});

logarUsuario.addEventListener("click", () => {
    aparecerElemento(formularioLogin);
    aparecerElemento(modalTextoInicial);
    resetarFormulario(formularioNovoUsuario);
    apagarMensagensErro();
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
    resetarFormulario(formularioNovoUsuario);
    resetarFormulario(formularioLogin);
    apagarMensagensErro();
});