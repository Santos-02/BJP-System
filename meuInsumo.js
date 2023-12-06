// Criação de um objeto para armazenar informações
const botaoSalvar = document.querySelector('.SalvarInsumo');
const listaInsumos = document.getElementById('listaInsumos');

// Função para salvar as informações no objeto
botaoSalvar.addEventListener('click', () => {
  // Obtendo os valores dos inputs quando o botão é clicado
  const descricaoInsumo = document.getElementById('NomeInsumo').value;
  const valorinsumo = document.getElementById('ValorInsumo').value;
  const quantidadeInsumo = document.getElementById('QuantidadeInsumo').value;
  const unidadeInsumo = document.getElementById('UnidadeInsumo').value;

  const liDescricao = document.createElement('li');
  liDescricao.textContent = `Descrição: ${descricaoInsumo}`;

  const liValor = document.createElement('li');
  liValor.textContent = `Valor: ${valorinsumo}`;

  const liQuantidade = document.createElement('li');
  liDescricao.textContent = `Quantidade: ${quantidadeInsumo}`;

  const liUnidade = document.createElement('li');
  liDescricao.textContent = `Unidade: ${unidadeInsumo}`;

  listaInsumos.appendChild(liDescricao);
  listaInsumos.appendChild(liValor);
  listaInsumos.appendChild(liQuantidade);
  listaInsumos.appendChild(liUnidade);


  // Criando o objeto com as informações
  const meuInsumo = {
    descricaoInsumo,
    valorinsumo,
    quantidadeInsumo,
    unidadeInsumo,
  };

  localStorage.setItem('meuInsumo', JSON.stringify(meuInsumo));

  // Exibindo as informações no console
  console.log("Insumo: ", meuInsumo);
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

