const btnUsuario = document.querySelector("#pagina__inicial");
const btnUsuarioLogado = document.querySelector("#usuario__logado");
const btnSair = document.querySelector(".botao__sair");
const divMensagemSucesso = document.querySelector(".mensagem__feedback-sucesso");
const mensagemSucesso = document.querySelector(".mensagem-sucesso");

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
    gerarMensagemSucessoLogout();
});

function gerarMensagemSucessoLogout() {
    const mensagemSucessoTexto = document.createElement("p");
    mensagemSucessoTexto.classList.add("mensagem-sucesso__texto");
    mensagemSucessoTexto.textContent = "Logout realizado com sucesso!";

    while(mensagemSucesso.childElementCount > 1 ) {
        mensagemSucesso.removeChild(mensagemSucesso.firstChild);
    }
    
    mensagemSucesso.insertBefore(mensagemSucessoTexto, mensagemSucesso.firstChild);
    divMensagemSucesso.classList.add("show");
    
    setTimeout(() => {
        divMensagemSucesso.classList.remove("show");
    }, 5000);

}
