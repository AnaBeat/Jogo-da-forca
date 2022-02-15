var botaoAdiciona = document.querySelector('#btn-nova-palavra');

botaoAdiciona.addEventListener('click', function(e){
  e.preventDefault();

  var novaPalavra = document.querySelector('#input-nova-palavra').value;

  palavras.push(novaPalavra);
  alert('A palavra ' + novaPalavra + ' foi adicionada');
});
