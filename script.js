
//botões de cadastros para abrir e fechar
const botaoCadastros = document.getElementById('btnCadastros');
const formCadastros = document.getElementById('frmInsumos');
const btnCancelar = document.getElementById ('btnCancelar');


//deixa o form oculto ao acessar a aba
formCadastros.style.display = 'none';

//mostra o formulário e não tira
botaoCadastros.addEventListener('click', () => {
  formCadastros.style.display = 'flex';
});

//apenas tira o formulário
btnCancelar.addEventListener('click', () => {
  formCadastros.style.display = 'none';
});


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}