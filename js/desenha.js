let myFont = new FontFace(
  "Pangolin",
  "url(https://fonts.gstatic.com/s/pangolin/v6/cY9GfjGcW0FPpi-tWMfN79z4i6BH.woff2)"
);


var tela = document.querySelector('#forca');
var pincel = tela.getContext('2d');


function desenhaTela() {
  myFont.load().then((font) => {
  document.fonts.add(font);
});
  var tela = document.querySelector('canvas');
  var pincel = tela.getContext('2d');
  pincel.fillStyle = 'white';
  pincel.fillRect(0, 0, 800, 600);

  desenhaForca();
  desenhaLinhas();

  console.log(palavraSecreta);

}


function desenhaForca() {
  pincel.fillStyle = 'black';
  //linha maior
  pincel.fillRect(80, 100, 10, 400);

  //linha meio
  pincel.fillRect(80, 100, 250, 10);

  // linha menor
  pincel.fillRect(330, 100, 10, 50);
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

}



function desenhaCabeca() {
  pincel.lineWidth = 4;
  pincel.beginPath();
  pincel.arc(335, 180, 30, 0, 2 * Math.PI);
  pincel.fillStyle = '#fff';
  pincel.strokeStyle = '#F50b26';
  pincel.stroke();
  pincel.fill();
  pincel.closePath();
  pincel.lineWidth = 1;
  pincel.fillStyle = 'black';
  pincel.strokeStyle = 'black';

}

function desenhaTronco() {
  pincel.lineWidth = 2;
  pincel.beginPath();
  pincel.moveTo(335, 210);
  pincel.lineTo(335, 330);
  pincel.fillStyle = '#D885A3';
   pincel.strokeStyle = '#F50b26';
   pincel.fill();
   pincel.stroke();
   pincel.closePath();
   pincel.lineWidth = 1;
   pincel.fillStyle = 'black';
   pincel.strokeStyle = 'black';
}

function desenhaBracoEsq() {
  pincel.lineWidth = 2;
  pincel.beginPath();
  pincel.moveTo(335, 230);
  pincel.lineTo(280, 270);
  pincel.fillStyle = '#D885A3';
   pincel.strokeStyle = '#F50b26';
   pincel.fill();
   pincel.stroke();
   pincel.closePath();
   pincel.lineWidth = 1;
   pincel.fillStyle = 'black';
   pincel.strokeStyle = 'black';
}

function desenhaBracoDir() {
  pincel.lineWidth = 2;
  pincel.beginPath();
  pincel.moveTo(335, 230);
  pincel.lineTo(400, 270);
  pincel.fillStyle = '#D885A3';
   pincel.strokeStyle = '#F50b26';
   pincel.fill();
   pincel.stroke();
   pincel.closePath();
   pincel.lineWidth = 1;
   pincel.fillStyle = 'black';
   pincel.strokeStyle = 'black';
}


function desenhaPernaEsq() {
  pincel.lineWidth = 2;
  pincel.beginPath();
  pincel.moveTo(335, 330);
  pincel.lineTo(280, 370);
  pincel.fillStyle = '#D885A3';
   pincel.strokeStyle = '#F50b26';
   pincel.fill();
   pincel.stroke();
   pincel.closePath();
   pincel.lineWidth = 1;
   pincel.fillStyle = 'black';
   pincel.strokeStyle = 'black';
}

function desenhaPernaDir() {
  pincel.lineWidth = 2;
  pincel.beginPath();
  pincel.moveTo(335, 330);
  pincel.lineTo(400, 370);
  pincel.fillStyle = '#D885A3';
   pincel.strokeStyle = '#F50b26';
   pincel.fill();
   pincel.stroke();
   pincel.closePath();
   pincel.lineWidth = 1;
   pincel.fillStyle = 'black';
   pincel.strokeStyle = 'black';
}

function escreverLetraCerta(letra, pos) {
  n=40;

    pincel.font = '48px Pangolin';

    if (pos > 1) {

        pincel.fillText(letra, 62*pos+n, 500);
        pincel.closePath();
    }else {
        pincel.fillText(letra, 110*pos, 500);
        pincel.closePath();
    }
    n += 40;
}

function escreverLetraErrada(letra, pos) {

  pincel.font = '30px Pangolin';

  pincel.fillText('Letras erradas', 500, 80);
  var qtdErradas = letrasErradas.length;
  pincel.strokeText(letra, 500+(qtdErradas*32), 120);
}

function escrevePerdeu() {

    pincel.beginPath();
    pincel.font = '25px Pangolin';
    pincel.fillStyle = '#F50b26';
    pincel.fillText('Você perdeu!', 280, 550);
    pincel.fillText("A palavra era " + palavraSecreta, 280 ,580);
    pincel.closePath();
    document.removeEventListener('keypress', validaLetra);

}

function escreverGanhou() {
  pincel.beginPath();
  pincel.font = '48px Pangolin';
  pincel.fillStyle = '#3fd447';
  pincel.fillText('Você Ganhou!', 280, 550);
  pincel.closePath();
  document.removeEventListener('keypress', validaLetra);
}
