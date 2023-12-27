function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const botaoCadastrosReceita = document.getElementById('btnCadastrosReceitas');
const formCadastrosReceita = document.getElementById('frmReceitas');
const botaoCadastrosInsumos = document.getElementById('btnCadastros');
const formCadastrosInsumos = document.getElementById('frmInsumos');
const btnCancelarIn = document.getElementById('btnCancelarIn');

function carregarScript3() {
  const script = document.createElement('script');
  script.src = 'meuInsumo.js'; // Substitua pelo caminho correto do seu arquivo script2.js
  document.head.appendChild(script);
}

// Chamando a função para carregar o script2.js
carregarScript3();

// Deixa o form de receitas oculto ao acessar a aba
formCadastrosReceita.style.display = 'none';


// Deixa o form de insumos oculto ao acessar a aba
formCadastrosInsumos.style.display = 'none';

// Mostra o form de receitas ao clicar no botão de cadastro de receitas
botaoCadastrosReceita.addEventListener('click', (event) => {
  event.preventDefault();
  formCadastrosReceita.style.display = 'flex';
});

// Mostra o form de insumos ao clicar no botão de cadastro de insumos
botaoCadastrosInsumos.addEventListener('click', (event) => {
  event.preventDefault();
  formCadastrosInsumos.style.display = 'flex';
});


// Oculta o form de receitas ao clicar no botão Cancelar
document.getElementById('btnCancelarIn').addEventListener('click', (event) => {
  event.preventDefault();
  formCadastrosReceita.style.display = 'none';
});

// Oculta o form de insumos ao clicar no botão Cancelar
document.getElementById('btnCancelar').addEventListener('click', (event) => {
  event.preventDefault();
  formCadastrosInsumos.style.display = 'none';
});

// Selecionar o elemento UL onde você quer exibir a lista de insumos
const listaInsumos = document.getElementById('listaInsumos');
const btnAdicionarTodos = document.getElementById('btnAdicionarTodos');

// Função para adicionar a lista de insumos
function adicionarListaInsumos() {
  // Limpar a lista de insumos anterior, se houver
  listaInsumos.innerHTML = '';

  // Percorrer todas as chaves do localStorage
  for (let i = 0; i < localStorage.length; i++) {
    const chave = localStorage.key(i);

    // Verificar se a chave corresponde aos insumos (meuInsumoX)
    if (chave.startsWith('meuInsumo')) {
      const valorChave = localStorage.getItem(chave);
      const insumo = JSON.parse(valorChave);

      // Criar um elemento li para cada insumo
      const listItem = document.createElement('li');

      // Criar um checkbox para o insumo
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = chave; // Chave como valor do checkbox (pode ser útil para futuras referências)

      // Criar um label para o checkbox com o nome do insumo
      const label = document.createElement('label');
      label.textContent = insumo.descricaoInsumo;

      // Adicionar o checkbox e o label ao listItem
      listItem.appendChild(checkbox);
      listItem.appendChild(label);

      // Adicionar o listItem à lista de insumos
      listaInsumos.appendChild(listItem);
    }
  }
}

// Adicionar evento de clique no botão "Adicionar à Receita"
btnAdicionarTodos.addEventListener('click', () => {
  adicionarTodosOsInsumos();
});

// Função para adicionar todos os insumos selecionados à receita com o nome e a quantidade
function adicionarTodosOsInsumos() {
  const nomeReceita = document.getElementById('nomeReceita').value; // Obtém o nome da receita do formulário
  const quantidadeRendimento = document.getElementById('quantidadeRendimento').value; // Obtém a quantidade do rendimento do formulário

  const checkboxes = document.querySelectorAll('#listaInsumos input[type="checkbox"]:checked');
  const insumosSelecionados = Array.from(checkboxes).map(checkbox => {
    const valorChave = checkbox.value;
    const valorInsumo = localStorage.getItem(valorChave);
    return JSON.parse(valorInsumo);
  });

  // Criando um objeto para representar a receita com nome, quantidade e insumos
  const receita = {
    nome: nomeReceita,
    quantidade: quantidadeRendimento,
    insumos: insumosSelecionados
  };

  // Salvando a receita no localStorage com uma chave única
  const chaveReceita = `receita_${Date.now()}`;
  localStorage.setItem(chaveReceita, JSON.stringify(receita));
  console.log('Receita adicionada:', receita);
}

// Chamar a função para adicionar a lista de insumos ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  adicionarListaInsumos();
});


