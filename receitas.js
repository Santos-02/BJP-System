const botaoCadastrosReceita = document.getElementById('btnCadastrosReceitas');
const formCadastrosReceita = document.getElementById('frmReceitas');

// Deixa o form de receitas oculto ao acessar a aba
formCadastrosReceita.style.display = 'none';

// Mostra o form de receitas ao clicar no botão de cadastro de receitas
botaoCadastrosReceita.addEventListener('click', (event) => {
  event.preventDefault();
  formCadastrosReceita.style.display = 'flex';
});

// Oculta o form de receitas ao clicar no botão Cancelar
document.getElementById('btnCancelarReceitas').addEventListener('click', (event) => {
  event.preventDefault();
  formCadastrosReceita.style.display = 'none';
});

const botaoCadastrosInsumos = document.getElementById('btnCadastros');
const formCadastrosInsumos = document.getElementById('frmInsumos');

// Deixa o form de insumos oculto ao acessar a aba
formCadastrosInsumos.style.display = 'none';

// Mostra o form de insumos ao clicar no botão de cadastro de insumos
botaoCadastrosInsumos.addEventListener('click', (event) => {
  event.preventDefault();
  formCadastrosInsumos.style.display = 'flex';
});

// Oculta o form de insumos ao clicar no botão Cancelar
document.getElementById('btnCancelarInsumos').addEventListener('click', (event) => {
  event.preventDefault();
  formCadastrosInsumos.style.display = 'none';
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }