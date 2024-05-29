import { listaUsuarios } from "../validaCamposFormularioNovoUsuario.js";

const formularioEntrar = document.querySelector(".formulario__entrar");
const formularioNovoUsuario = document.querySelector(".formulario__registrar");
const camposFormulario = formularioEntrar.querySelectorAll("[required]");
const btnLogar = document.querySelector(".botao__logar");
const modal = document.querySelector(".modal");
const cpf = document.querySelector("#cpf__logar");
const senha = document.querySelector("#senha__logar");
const divMensagemSucesso = document.querySelector(".mensagem__feedback-sucesso");
const mensagemSucesso = document.querySelector(".mensagem-sucesso");
const mensagemErroUsuario = document.querySelector(".mensagem-erro__logar");

btnLogar.addEventListener("click", () => {
    camposFormulario.forEach((campo) => verificaCampoFormulario(campo));
    verificarUsuario();
});

camposFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => { 
        verificaCampoFormulario(campo)
        mensagemErroUsuario.textContent = "";
    });
    campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

formularioEntrar.addEventListener("submit", (evento) => {
    evento.preventDefault();
    formularioEntrar.reset();
    formularioNovoUsuario.reset();
    modal.style.display = "none";
    gerarMensagemSucesso();
});

const mensagens = {
    cpf__logar: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
    },
    senha__logar: {
        valueMissing: 'O campo não pode estar vazio.',
    },
}

function verificaCampoFormulario(campo) {
    let mensagem = "";
    const mensagemErro = campo.parentNode.querySelector(".mensagem-erro")
    if(campo.validity.valueMissing) {
        mensagem = mensagens[campo.id].valueMissing;
    }

    mensagemErro.textContent = mensagem;
}

function verificarUsuario() {
    const cpfFormatado = cpf.value.replace(/\.|-/g, "");
    cpf.setCustomValidity("");
    senha.setCustomValidity("");
    let mensagem = ""; 
    if(cpf.value && senha.value) {
        const usuario = listaUsuarios.filter((usuario) => usuario.cpf == cpfFormatado);
        if(usuario.length == 0) {
            cpf.setCustomValidity("Usuário não encontrado");
            mensagem = "CPF e/ou senha informados estão incorretos!";
        } else {
            if(senha.value != usuario[0].senha) {
                senha.setCustomValidity("Senha informada está errada!");
                mensagem = "CPF e/ou senha informados estão incorretos!";
            }
        }
    }
    mensagemErroUsuario.textContent = mensagem;
}

function gerarMensagemSucesso() {
    mensagemSucesso.innerHTML = `
        <p class="mensagem-sucesso__texto">Login realizado com sucesso!<p>
        <img src="../assets/Logo.svg" class="mensagem-sucesso__imagem">`;

    divMensagemSucesso.classList.add("show");
    
    setTimeout(() => {
        divMensagemSucesso.classList.remove("show");
    }, 5000);

}
