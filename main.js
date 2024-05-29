const form = document.getElementById('form-contatos');
const limpar = document.getElementById('reset');
const contatos = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
});

limpar.addEventListener('click', function() {
    if (contatos.length >= 1){
        window.location.reload();
    }
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome').value;
    const inputTelefone = document.getElementById('telefone').value;

    // Verifica se os campos obrigatórios estão preenchidos
    if (!inputNome || !inputTelefone) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Verifica se o telefone já está na lista de contatos
    if (contatos.includes(inputTelefone)) {
        alert(`Esse telefone ${inputTelefone} já foi inserido na agenda`);
        return;
    } 

    // Adiciona o contato à lista de contatos
    contatos.push(inputTelefone);

    // Cria a linha da tabela e a adiciona às linhas existentes
    let linha = '<tr>';
    linha += `<td>${inputNome}</td>`;
    linha += `<td>${inputTelefone}</td>`;
    linha += '</tr>';
    linhas += linha;

    // Atualiza o corpo da tabela com as linhas
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
