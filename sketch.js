let campoIdade;
let campoMpb;
let campoPop;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de músicas");
  createSpan("Sua idade:");
  campoIdade = createInput("14");
  campoMpb = createCheckbox("Gosta de MPB?");
  campoPop = createCheckbox("Gosta de Pop?");
}

function draw() {
  background("#5A3D8D");
  let idade = campoIdade.value();
  let gostaDeMpb = campoMpb.checked();
  let gostaDePop = campoPop.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeMpb, gostaDePop);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeMpb, gostaDePop) {
  if (idade >= 14) {
    if (idade >= 20) {
      return "Oceano- Djavan";
    } else {
      if (idade >= 12) {
        if(gostaDeMpb || gostaDePop) {
          return "Tenha Calma/Sem você- Djavan";          
        } else{
         return "Snap- Rosa Linn";
        }
      } else {
        if (gostaDeMpb) {
          return "O velho e a flor- Toquinho, Vinícius de Moraes";
        } else {
          return "Oceano- Djavan";
        }
      }
    }
  } else {
    if (gostaDePop) {
      return "Water- Tyla";
    } else {
      return "Die with a smile- Bruno Mars, Lady Gaga";
    }
  }
}
