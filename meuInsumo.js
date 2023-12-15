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

// Função para buscar os insumos do localStorage
function obterInsumosLocalStorage() {
  const chavesLocalStorage = Object.keys(localStorage);
  const insumos = chavesLocalStorage.filter(chave => chave.startsWith('meuInsumo'))
                                     .map(chave => JSON.parse(localStorage.getItem(chave)));
  return insumos;
}

// Função para exibir os insumos na página
function exibirInsumosNaPagina(insumos) {
  const divListaInsumos = document.querySelector('.listaIn');

  // Verificar se o elemento com ID 'paginaReceitas' está presente na página
  const paginaReceitas = document.getElementById('paginaReceitas');

  // Se o elemento #paginaReceitas não existir, exibe a lista de insumos
  if (!paginaReceitas) {
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
}

// Função para salvar as informações no localStorage com chave única
function adicionarNovoInsumo(descricaoInsumo, valorinsumo, quantidadeInsumo, unidadeInsumo) {
  let proximoNumero = 1;

  while (localStorage.getItem(`meuInsumo${proximoNumero}`) !== null) {
    proximoNumero++;
  }

  const novoInsumo = {
    descricaoInsumo,
    valorinsumo,
    quantidadeInsumo,
    unidadeInsumo,
  };

  localStorage.setItem(`meuInsumo${proximoNumero}`, JSON.stringify(novoInsumo));
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

  // Adiciona o novo insumo ao localStorage com chave única
  adicionarNovoInsumo(descricaoInsumo, valorinsumo, quantidadeInsumo, unidadeInsumo);

  // Exibindo os insumos atualizados na página
  exibirInsumosNaPagina(obterInsumosLocalStorage());
  

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
if (!document.getElementById('paginaReceitas')) {
  const insumos = obterInsumosLocalStorage();
  exibirInsumosNaPagina(insumos);
}