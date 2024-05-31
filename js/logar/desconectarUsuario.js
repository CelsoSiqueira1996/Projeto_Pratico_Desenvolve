import gerarMensagemSucesso from "../mensagemFeedback/mensagemStatusSucesso.js";

const btnUsuario = document.querySelector("#pagina__inicial");
const btnUsuarioLogado = document.querySelector("#usuario__logado");
const btnSair = document.querySelector(".botao__sair");

function esconderElementoLog(elemento) {
    elemento.style.display = "none";
}

function aparecerElementoLog(elemento) {
    elemento.style.display = "flex";
}

btnUsuarioLogado.addEventListener("click", () => {
    btnSair.style.display = (btnSair.style.display == "block")? "none" : "block";
});

btnSair.addEventListener("click", () => {
    btnUsuarioLogado.querySelector("p").textContent = "";
    esconderElementoLog(btnUsuarioLogado);
    aparecerElementoLog(btnUsuario);
    gerarMensagemSucesso("sair");
});

