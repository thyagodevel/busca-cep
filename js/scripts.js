const limparFormulario = (endereco) => {
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('complemento').value = '';
    document.getElementById('localidade').value = '';
}

const formulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('uf').value = endereco.uf;
    document.getElementById('complemento').value = endereco.complemento;
    document.getElementById('localidade').value = endereco.localidade;
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async () => {
    limparFormulario();

    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)) {
        const data = await fetch(url);
        const endereco = await data.json();
        if (endereco.hasOwnProperty('erro')) {
            alert("CEP não encontrado!");
        } else {
            formulario(endereco);
        }
    } else {
        alert("CEP incorreto!");
    }
    
}

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);