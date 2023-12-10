const botaoSalvar = document.getElementById('salvar');

// Função para verificar se o valor é numérico
function validarNumero(valor) {
  return /^[\d,]+$/.test(valor); // Expressão regular para verificar se a string contém apenas números
}

// Função para exibir uma mensagem de erro
function exibirMensagemErro(element, mensagem) {
  const erro = document.createElement('p');
  erro.textContent = mensagem;
  erro.classList.add('mensagemErro');
  element.insertAdjacentElement('afterend', erro);
}

// Função para buscar os clientes do localStorage
function obterClientesLocalStorage() {
  const clientesLocalStorage = localStorage.getItem('meusClientes');
  return clientesLocalStorage ? JSON.parse(clientesLocalStorage) : [];
}

// Função para exibir os clientes na página
function exibirClientesNaPagina(clientes) {
  const divListaClientes = document.querySelector('.listaIn');

  // Limpar a lista de clientes na página antes de exibir os novos clientes
  divListaClientes.innerHTML = '';

  // Iterar sobre cada cliente e criar a lista na página
  clientes.forEach(cliente => {
    const ulCliente = document.createElement('ul');

    const liNomeCliente = document.createElement('li');
    liNomeCliente.textContent = `${cliente.nomeCliente}`;
    liNomeCliente.classList.add('listaBorda');

    const liTelefoneCliente = document.createElement('li');
    liTelefoneCliente.textContent = `${cliente.telefoneCliente}`;
    liTelefoneCliente.classList.add('listaBorda');


    ulCliente.appendChild(liNomeCliente);
    ulCliente.appendChild(liTelefoneCliente);


    ulCliente.classList.add('ListaUl');
    divListaClientes.appendChild(ulCliente);
  });
}

// Função para salvar as informações no objeto
botaoSalvar.addEventListener('click', (event) => {
  event.preventDefault(); // Impede o comportamento padrão de atualização da página ao clicar no botão

  const nomeCliente = document.getElementById('nomeCliente').value;
  const telefoneCliente = document.getElementById('telefoneCliente').value;


  // Validando se os valores são numéricos antes de criar as <li>
  if (!validarNumero(telefoneCliente)) {
    exibirMensagemErro(document.getElementById('telefoneCliente'), 'O telefone do cliente deve conter apenas números.');
    return; // Interrompe a execução do código caso o valor não seja numérico
  }


  // Criando um objeto com as informações do novo cliente
  const novoCliente = {
    nomeCliente,
    telefoneCliente,
  };

  // Obtendo os clientes existentes no localStorage
  const clienteExistente = obterClientesLocalStorage();

  // Adicionando o novo cliente ao array existente
  clienteExistente.push(novoCliente);

  // Salvando o array atualizado no localStorage
  localStorage.setItem('meusClientes', JSON.stringify(clienteExistente));

  // Exibindo os clientes atualizados na página
  exibirClientesNaPagina(clienteExistente);

  // Exibindo as informações no console
  console.log("Cliente adicionado:", novoCliente);

  // Limpar os campos do formulário após adicionar o cliente
  document.getElementById('nomeCliente').value = '';
  document.getElementById('telefoneCliente').value = '';
});

// Carregar e exibir os clientes ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  const clientes = obterClientesLocalStorage();
  exibirClientesNaPagina(clientes);
});



/*function salvarInformacoes() {
  meucliente.descricao = prompt('Digite sua descrição:');
  meucliente.quantidade = parseInt(prompt('Digite à quantidade:'));
  meucliente.unidademedida = prompt('Digite à unidade de medida:');
  meucliente.valor = parseInt(prompt('Digite o valor:'));
}


const valoresDefinidos = {};
for (const chave in meucliente) {
  if (meucliente[chave] !== undefined) {
    valoresDefinidos[chave] = meucliente[chave];
  }
}



/* Função para apresentar as informações na tela
function apresentarInformacoes() {
  console.log('descricao: ' + meucliente.descricao);
  console.log('quantidade: ' + meucliente.quantidade);
  console.log('unidademedida: ' + meucliente.unidademedida);
  console.log('Valor: ' + meucliente.valor);
}*/

// Chama a função para salvar as informações
//salvarInformacoes();

// Chama a função para apresentar as informações
//apresentarInformacoes();*/

