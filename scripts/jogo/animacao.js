class Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprit, alturaSprit) {
        this.matriz = matriz;
        this.imagem = imagem;
        this.largura = largura;
        this.altura = altura;
        this.x = x;
        this.y = height - altura;
        this.larguraSprit = larguraSprit;
        this.alturaSprit = alturaSprit;

        this.currentMatrizpoint = 0;
    }

    exibir() {
        image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.currentMatrizpoint][0],
            this.matriz[this.currentMatrizpoint][1], this.larguraSprit, this.alturaSprit);
        this.animation();
    }

    animation() {
        this.currentMatrizpoint++;

        if (this.currentMatrizpoint >= this.matriz.length - 1) {
            this.currentMatrizpoint = 0;
        }
    }
    
    move() {
        this.x = this.x - 12
        if (this.x < -this.largura) {
            this.x = width;
        }
    }
}