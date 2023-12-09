const botaoSalvar = document.querySelector('.SalvarInsumo');

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

// Função para buscar os insumos do localStorage
function obterInsumosLocalStorage() {
  const insumosLocalStorage = localStorage.getItem('meusInsumos');
  return insumosLocalStorage ? JSON.parse(insumosLocalStorage) : [];
}

// Função para exibir os insumos na página
function exibirInsumosNaPagina(insumos) {
  const divListaInsumos = document.querySelector('.listaIn');

  // Limpar a lista de insumos na página antes de exibir os novos insumos
  divListaInsumos.innerHTML = '';

  // Iterar sobre cada insumo e criar a lista na página
  insumos.forEach(insumo => {
    const ulInsumo = document.createElement('ul');

    const liDescricao = document.createElement('li');
    liDescricao.textContent = `${insumo.descricaoInsumo}`;
    liDescricao.classList.add('listaBorda');

    const liValor = document.createElement('li');
    liValor.textContent = `${insumo.valorinsumo}`;
    liValor.classList.add('listaBorda');

    const liQuantidade = document.createElement('li');
    liQuantidade.textContent = `${insumo.quantidadeInsumo}`;
    liQuantidade.classList.add('listaBorda');

    const liUnidade = document.createElement('li');
    liUnidade.textContent = `${insumo.unidadeInsumo}`;
    liUnidade.classList.add('listaBorda');

    ulInsumo.appendChild(liDescricao);
    ulInsumo.appendChild(liValor);
    ulInsumo.appendChild(liQuantidade);
    ulInsumo.appendChild(liUnidade);

    ulInsumo.classList.add('ListaUl');
    divListaInsumos.appendChild(ulInsumo);
  });
}

// Função para salvar as informações no objeto
botaoSalvar.addEventListener('click', (event) => {
  event.preventDefault(); // Impede o comportamento padrão de atualização da página ao clicar no botão

  const descricaoInsumo = document.getElementById('NomeInsumo').value;
  const valorinsumo = document.getElementById('ValorInsumo').value;
  const quantidadeInsumo = document.getElementById('QuantidadeInsumo').value;
  const unidadeInsumo = document.getElementById('opcoes').value;

  // Validando se os valores são numéricos antes de criar as <li>
  if (!validarNumero(valorinsumo)) {
    exibirMensagemErro(document.getElementById('ValorInsumo'), 'O valor do insumo deve conter apenas números.');
    return; // Interrompe a execução do código caso o valor não seja numérico
  }

  if (!validarNumero(quantidadeInsumo)) {
    exibirMensagemErro(document.getElementById('QuantidadeInsumo'), 'A quantidade do insumo deve conter apenas números.');
    return; // Interrompe a execução do código caso o valor não seja numérico
  }

  // Criando um objeto com as informações do novo insumo
  const novoInsumo = {
    descricaoInsumo,
    valorinsumo,
    quantidadeInsumo,
    unidadeInsumo,
  };

  // Obtendo os insumos existentes no localStorage
  const insumosExistente = obterInsumosLocalStorage();

  // Adicionando o novo insumo ao array existente
  insumosExistente.push(novoInsumo);

  // Salvando o array atualizado no localStorage
  localStorage.setItem('meusInsumos', JSON.stringify(insumosExistente));

  // Exibindo os insumos atualizados na página
  exibirInsumosNaPagina(insumosExistente);

  // Exibindo as informações no console
  console.log("Insumo adicionado:", novoInsumo);

  // Limpar os campos do formulário após adicionar o insumo
  document.getElementById('NomeInsumo').value = '';
  document.getElementById('ValorInsumo').value = '';
  document.getElementById('QuantidadeInsumo').value = '';
  document.getElementById('UnidadeInsumo').value = '';
});

// Carregar e exibir os insumos ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  const insumos = obterInsumosLocalStorage();
  exibirInsumosNaPagina(insumos);
});



/*function salvarInformacoes() {
  meuInsumo.descricao = prompt('Digite sua descrição:');
  meuInsumo.quantidade = parseInt(prompt('Digite à quantidade:'));
  meuInsumo.unidademedida = prompt('Digite à unidade de medida:');
  meuInsumo.valor = parseInt(prompt('Digite o valor:'));
}


const valoresDefinidos = {};
for (const chave in meuInsumo) {
  if (meuInsumo[chave] !== undefined) {
    valoresDefinidos[chave] = meuInsumo[chave];
  }
}



/* Função para apresentar as informações na tela
function apresentarInformacoes() {
  console.log('descricao: ' + meuInsumo.descricao);
  console.log('quantidade: ' + meuInsumo.quantidade);
  console.log('unidademedida: ' + meuInsumo.unidademedida);
  console.log('Valor: ' + meuInsumo.valor);
}*/

// Chama a função para salvar as informações
//salvarInformacoes();

// Chama a função para apresentar as informações
//apresentarInformacoes();*/

