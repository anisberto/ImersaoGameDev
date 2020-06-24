class Personagem extends Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprit, alturaSprit) {
    super(matriz, imagem, x, largura, altura, larguraSprit, alturaSprit)

    this.yInicial = height - this.altura
    this.y = this.yInicial;

    this.velocidadePulo = 0;
    this.gravidade = 3;
  }
  pular() {
    this.velocidadePulo = - 25;
  }

  aplicarGravidade() {
    this.y = this.y + this.velocidadePulo;
    this.velocidadePulo = this.velocidadePulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial
    }
  }
  colisao(inimigo) {
    const precisao = .7;
    const colid = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao)
    return colid;
  }
}