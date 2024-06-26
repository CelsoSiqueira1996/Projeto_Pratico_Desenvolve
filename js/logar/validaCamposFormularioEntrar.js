import { listaUsuarios } from "../validaCamposFormularioNovoUsuario.js";
import resetarModal from "../reset/resetarModal.js";
import gerarMensagemSucesso from "../mensagemFeedback/mensagemStatusSucesso.js";

const formularioEntrar = document.querySelector(".formulario__entrar");
const camposFormulario = formularioEntrar.querySelectorAll("[required]");
const btnLogar = document.querySelector(".botao__logar");
const cpf = document.querySelector("#cpf__logar");
const senha = document.querySelector("#senha__logar");
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
    const cpfLogado = cpf.value.replace(/\.|-/g, "");
    const usuarioCpfLogado = listaUsuarios.filter((usuario) => usuario.cpf == cpfLogado);
    const nomeUsuarioLogado = usuarioCpfLogado[0].nome;
    const primeiroNomeUsuarioLogado = nomeUsuarioLogado.trim().split(" ")[0];
    resetarModal();
    gerarMensagemSucesso("entrar");
    usuarioLogado(primeiroNomeUsuarioLogado);
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

function usuarioLogado(nome) {
    const btnUsuario = document.querySelector("#pagina__inicial");
    const btnUsuarioLogado = document.querySelector("#usuario__logado");
    const btnUsuarioLogadoTexto = btnUsuarioLogado.querySelector("p");
    btnUsuario.style.display = "none";
    btnUsuarioLogadoTexto.textContent = `Olá, ${nome}!`
    btnUsuarioLogado.style.display = "flex";
}
