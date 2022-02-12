let myFont = new FontFace(
  "Pangolin",
  "url(https://fonts.gstatic.com/s/pangolin/v6/cY9GfjGcW0FPpi-tWMfN79z4i6BH.woff2)"
);


var tela = document.querySelector('#forca');
var pincel = tela.getContext('2d');

desenhaTela();

function desenhaTela() {
  myFont.load().then((font) => {
  document.fonts.add(font);
});
  var tela = document.querySelector('canvas');
  var pincel = tela.getContext('2d');
  pincel.fillStyle = 'white';
  pincel.fillRect(0, 0, 800, 600);
  pincel.font = "30px Pangolin";
  pincel.fillStyle = '#000000';
  pincel.strokeStyle = '#000000';
  pincel.fillText('Letras erradas: ', 450, 80);

  desenhaForca();
  desenhaLinhas();
}


function desenhaForca() {
  pincel.fillStyle = 'black';
  pincel.fillRect(80, 100, 10, 400);
  pincel.fillRect(80, 100, 250, 10);
  pincel.fillRect(330, 100, 10, 100);
}

function desenhaLinhas() {
  var palavraSecreta = sorteiaPalavra();
  var separa = palavraSecreta.split('');
  qtdLinhas = separa.length;
  var x = 100;
  var x2 = 150;

  for (var i = 0; i < qtdLinhas; i++) {
    pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.moveTo(x, 500);
    pincel.lineTo(x2, 500);

    x = x + 60;
    x2 = x2 + 60;

    pincel.fill();
    pincel.closePath();
    pincel.stroke();
  }

  console.log(palavraSecreta);
}

function escreverLetraCerta(letra, pos) {
  n=40;
  var tela = document.querySelector('#forca');
    var pincel = tela.getContext('2d');
    pincel.font = '48px Pangolin';
    if (pos > 1) {

        pincel.fillText(letra, 62*pos+n, 500);
    }else {
        pincel.fillText(letra, 110*pos, 500);
    }

    n += 40;

    pincel.closePath();
    console.log(pos);
    console.log(60*pos+n);
}
