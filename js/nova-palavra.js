

var campoPalavra = document.querySelector('#input-nova-palavra');
var botaoAdiciona = document.querySelector('#btn-nova-palavra');
var RegExpressionPalavras = /^[A-Za-z]*$/;

botaoAdiciona.addEventListener('click', function(){
  var palavraDigitada = campoPalavra.value;

  if (palavraDigitada.length >= 3) {
    if (RegExpressionPalavras.test(palavraDigitada)) {
      palavras.push(palavraDigitada);
      console.log(palavras);
    }else {
      campoPalavra.value = 'Apenas letras!';
    }

  }else {
    campoPalavra.value = 'Digite uma palavra com três caracteres ou mais!';
  }

});
