
// Variáveis
palavras = [
'macaco', 'tartaruga', 'caracol', 'hiena', 'elefante', 'gato', 'bode',
'livro', 'chave', 'relogio', 'mochila', 'espelho', 'janela', 'tesoura',
'cebola', 'framboesa', 'queijo', 'banana', 'arroz', 'biscoito', 'lasanha'];

var animais = palavras.slice(0, 7);
var objetos = palavras.slice(7, 14);
var alimentos = palavras.slice(14, 21);

palavraSecreta = '';
erros = 0;
acertos = 0;
letrasCertas = [];
letrasErradas = [];
letraTempQtd = 0;
const regex = new RegExp("^[a-z \b]+$");

var botaoJogar = document.querySelector('#inicia-jogo');
botaoJogar.addEventListener('click', iniciaJogo);

var botaoDica = document.querySelector('#dica');
botaoDica.addEventListener('click', function(){

  if (animais.indexOf(palavraSecreta) > -1) {
    alert('é um animal');
  }

  if (objetos.indexOf(palavraSecreta) > -1) {
    alert('é um objeto');
  }

  if (alimentos.indexOf(palavraSecreta) > -1) {
    alert('é um alimento');
  }

})


function iniciaJogo() {
  desenhaTela();
  document.addEventListener('keypress', validaLetra);
  erros = 0;
  acertos = 0;
  letrasCertas = [];
  letrasErradas = [];
  letraTempQtd = 0;

}


function validaLetra(event) {


  if (!regex.test(event.key)) {

        alert('Apenas letras');
    }else {
      var letra = event.key;

        verificaLetra(letra);
    }
}

function sorteiaPalavra() {
  qtdPalavras = palavras.length;
  sorteio = Math.floor(Math.random() * qtdPalavras);
  palavraSecreta = palavras[sorteio];

  return palavraSecreta;
}


function verificaLetra(letra) {
  var letraTemp = palavraSecreta.split('');
  letraTempQtd = letraTemp.length;
  if (letrasCertas.includes(letra) == false && letrasErradas.includes(letra) == false) {
    if (letraTemp.includes(letra) == true) {
      for (var i = 0; i < letraTempQtd; i++) {
        if (letraTemp[i] == letra) {
          escreverLetraCerta(letra,i+1);
          letrasCertas.push(letra);
          acertos = acertos+1;
          verificaFim();
        }
      }

    }else {
      escreverLetraErrada(letra, 15);
      letrasErradas.push(letra);
      erros = erros+1;
      verificaFim();
    }
  }else {
    alert('Você já digitou essa letra!')
  }

}


function verificaFim() {
  if (erros == 1) {
    desenhaCabeca();
  }
  if (erros == 2) {
    desenhaTronco();
  }
  if (erros == 3) {
    desenhaBracoEsq();
  }
  if (erros == 4) {
    desenhaBracoDir();
  }
  if (erros == 5) {
    desenhaPernaEsq();
  }
  if (erros == 6) {
    desenhaPernaDir();
    escrevePerdeu();

  }
  if (acertos >= letraTempQtd) {
    escreverGanhou();

  }
}
