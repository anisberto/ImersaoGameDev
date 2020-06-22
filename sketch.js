let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;

function preload() {
  imagemCenario = loadImage('imagens/floresta.png');
  imagemPersonagem = loadImage('imagens/correndo.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  frameRate(30);
  somDoJogo.loop();
}

function draw() {
  cenario.exibir();
  cenario.move();
  personagem.exibir();
}