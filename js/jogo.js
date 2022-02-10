// Variáveis
palavras = ['macaco', 'tartaruga', 'caracol', 'hiena', 'livro',
'correio', 'mochila', 'cebola', 'framboesa', 'queijo', 'chave', 'relogio'];
palavraSorteada = '';
erros = 0;
acertos = 0;
letrasCertas = [];
letrasErradas = [];
letrasDigitadas = [];
letraQtde = 0;


// Funções
function sorteiaPalavra() {
  qtdPalavras = palavras.length;
  sorteio = Math.floor(Math.random() * qtdPalavras);
  palavraSecreta = palavras[sorteio];

  console.log(palavraSecreta);

  return palavraSecreta;


}

var botaoIniciar = document.querySelector('#iniciar');
botaoIniciar.addEventListener('click', function(){
  event.preventDefault();
  var div = document.querySelector("#canvas");

  if(div.style.display === "none") {
        div.style.display = "block";
    } else {
      div.style.display = "none";
  }
  letrasCertas = [];
  letrasErradas = [];
  acertos = 0;
  erros = 0;
  letrasDigitadas = [];
  palavraSorteada = sorteiaPalavra();
  desenhaTela();
  desenhaLinhas(palavraSorteada);
  //desenhaForca();
  return palavraSorteada;
})
