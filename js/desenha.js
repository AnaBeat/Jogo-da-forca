let myFont = new FontFace(
  "Pangolin",
  "url(https://fonts.gstatic.com/s/pangolin/v6/cY9GfjGcW0FPpi-tWMfN79z4i6BH.woff2)"
);

function desenhaTela() {
  myFont.load().then((font) => {
  document.fonts.add(font);
});
  var tela = document.querySelector('canvas');
  var pincel = tela.getContext('2d');
  pincel.fillStyle = 'white';
  pincel.fillRect(0, 0, 1200, 800);
  pincel.font = "48px Pangolin";
  pincel.fillStyle = '#000000';
  pincel.strokeStyle = '#000000';
  pincel.fillText('Letras erradas: ', 650, 280);
}


function desenhaLinhas(palavraSorteada){
  var tela = document.querySelector('canvas');
  var pincel = tela.getContext('2d');
  var qtdLetras = palavraSorteada.split('');
  qtdLinha = qtdLetras.length;
  var x = 50;
  var x2 =100;

  for (var i = 0; i < qtdLinha; i++) {
    pincel.fillStyle = 'black';
        pincel.beginPath();
        pincel.moveTo(x,700);
        pincel.lineTo(x2,700);
        x = x + 60;
        x2 = x2 + 60;
        pincel.fill();
        pincel.closePath();
        pincel.stroke();

  }
}
