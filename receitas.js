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

// Selecionar o label de opções onde você quer imprimir os insumos
const labelOpcoes = document.getElementById('UnidadeInsumo');

// Função para adicionar as opções ao label de opções
function adicionarOpcoesInsumos() {
  // Limpar as opções anteriores, se houver
  labelOpcoes.innerHTML = '';

  // Percorrer todas as chaves do localStorage
  for (let i = 0; i < localStorage.length; i++) {
    const chave = localStorage.key(i);

    // Verificar se a chave corresponde aos insumos (meuInsumoX)
    if (chave.startsWith('meuInsumo')) {
      const valorChave = localStorage.getItem(chave);
      const insumo = JSON.parse(valorChave);

      // Criar um elemento option para cada insumo
      const option = document.createElement('option');
      option.text = `${insumo.descricaoInsumo}`;
      
      // Adicionar a chave como valor do option (pode ser útil para futuras referências)
      option.value = chave;

      // Adicionar a option ao label de opções
      labelOpcoes.appendChild(option);
    }
  }
}

// Chamar a função para adicionar as opções ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  adicionarOpcoesInsumos();
});

