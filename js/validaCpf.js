export default function ehUmCpfValido(campo, listaUsuarios) {
    const cpf = campo.value.replace(/\.|-/g, "");
    let mensagem = "";
    let usuarioJaExiste = false;
    if(listaUsuarios.length != 0){
        listaUsuarios.forEach((usuario) => {
            if(usuario.cpf == cpf) {
                usuarioJaExiste = true;
            }
        });
        if(usuarioJaExiste) {
            campo.setCustomValidity("CPF inválido.");
            mensagem = "Este CPF já possui conta!";
        }
    }
    
    if(mensagem == "" && (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf))) {
        campo.setCustomValidity("CPF inválido.");
        mensagem = "O CPF digitado não existe.";
    } 

    return mensagem;
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ];

    return numerosRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;
    
    for(let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho]*multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if(soma == 10) {
        soma = 0;
    }

    return soma != cpf[9];
}

function validaSegundoDigito(cpf) {
    let multiplicador = 11;
    let soma = 0;

    for(let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if(soma == 10) {
        soma = 0;
    }

    return soma != cpf[10];
}