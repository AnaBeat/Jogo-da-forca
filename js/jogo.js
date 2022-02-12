// Variáveis
palavras = ['macaco', 'tartaruga', 'caracol', 'hiena', 'livro',
'correio', 'mochila', 'cebola', 'framboesa', 'queijo', 'chave', 'relogio'];
palavraSecreta = '';
erros = 0;
acertos = 0;
letrasCertas = [];
letrasErradas = [];
letraDigitada = [];
letraQtde = 0;
const regex = new RegExp("^[a-z \b]+$");

// Funções
function sorteiaPalavra() {
  qtdPalavras = palavras.length;
  sorteio = Math.floor(Math.random() * qtdPalavras);
  palavraSecreta = palavras[sorteio];

  return palavraSecreta;
}

//verifica se é letra
document.addEventListener('keypress', function(event) {

  if (!regex.test(event.key)) {

        console.log('apenas letras');
    }else {

        verificaLetra(event.key);
    }

})


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
        }
      }

    }else {
      escreverLetraErrada(letra, 15);
      letrasErradas.push(letra);
      erros = erros+1;
    }
  }else {
    alert('Você já digitou essa letra!')
  }

}
