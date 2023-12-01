// Criação de um objeto para armazenar informações
var meuInsumo = {
  descricao: '',
  quantidade: 0,
  unidademedida: '',
  valor: 0,
};

// Função para salvar as informações no objeto
function salvarInformacoes() {
  meuInsumo.descricao = prompt('Digite sua descrição:');
  meuInsumo.quantidade = parseInt(prompt('Digite à quantidade:'));
  meuInsumo.unidademedida = prompt('Digite à unidade de medida:');
  meuInsumo.valor = parseInt('Digite o valor:');
}

// Função para apresentar as informações na tela
function apresentarInformacoes() {
  console.log('descricao: ' + meuInsumo.descricao);
  console.log('quantidade: ' + meuInsumo.quantidade);
  console.log('unidademedida: ' + meuInsumo.unidademedida);
  console.log('Profissão: ' + meuInsumo.valor);
}

// Chama a função para salvar as informações
salvarInformacoes();

// Chama a função para apresentar as informações
apresentarInformacoes();
