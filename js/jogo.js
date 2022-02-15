
// Variáveis
palavras = ['macaco', 'tartaruga', 'caracol', 'hiena', 'elefante',
'livro', 'chave', 'relogio', 'mochila', 'espelho',
'cebola', 'framboesa', 'queijo', 'banana', 'arroz'];
palavraSecreta = '';
erros = 0;
acertos = 0;
letrasCertas = [];
letrasErradas = [];
letraDigitada = [];
letraTempQtd = 0;
const regex = new RegExp("^[a-z \b]+$");

var botaoJogar = document.querySelector("#inicia-jogo");
botaoJogar.addEventListener("click", iniciaJogo);




function iniciaJogo() {
  desenhaTela();
  document.addEventListener('keypress', validaLetra);
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
    document.removeEventListener('keypress', validaLetra);

  }
  if (acertos >= letraTempQtd) {
    escreverGanhou();
    document.removeEventListener('keypress', validaLetra);

  }
}
