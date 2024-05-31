// Seleciona o formulário de contatos pelo ID
const form = document.getElementById('form-contatos');
// Seleciona o botão de limpar pelo ID
const limpar = document.getElementById('reset');
// Inicializa a lista de contatos
const contatos = [];
// Inicializa a variável para armazenar as linhas da tabela
let linhas = '';

// Adiciona um evento de escuta para o formulário quando ele for enviado
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    adicionaLinha(); // Chama a função para adicionar uma nova linha à tabela
});

// Adiciona um evento de escuta para o botão de limpar
limpar.addEventListener('click', function() {
    if (contatos.length >= 1) {
        window.location.reload(); // Recarrega a página se houver contatos
    }
});

// Função para adicionar uma nova linha à tabela
function adicionaLinha() {
    // Obtém os valores dos campos de entrada
    const inputNome = document.getElementById('nome').value;
    const inputTelefone = document.getElementById('telefone').value;

    // Verifica se os campos obrigatórios estão preenchidos
    if (!inputNome || !inputTelefone) {
        alert('Por favor, preencha todos os campos.');
        return; // Sai da função se algum campo estiver vazio
    }

    // Verifica se o telefone já está na lista de contatos
    if (contatos.includes(inputTelefone)) {
        alert(`Esse telefone ${inputTelefone} já foi inserido na agenda`);
        return; // Sai da função se o telefone já estiver na lista
    }

    // Adiciona o telefone à lista de contatos
    contatos.push(inputTelefone);

    // Cria uma nova linha da tabela
    let linha = '<tr>';
    linha += `<td>${inputNome}</td>`;
    linha += `<td>${inputTelefone}</td>`;
    linha += '</tr>';
    linhas += linha; // Adiciona a nova linha às linhas existentes

    // Atualiza o corpo da tabela com as novas linhas
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
