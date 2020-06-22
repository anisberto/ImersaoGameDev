class Cenario{
  constructor(image, velocidade){
    this.image = image;
    this.velocidade = velocidade;
    this.eixoX1 = 0;
    this.eixoX2 = width;
  }
  
  exibir(){
    image(this.image, this.eixoX1, 0, width,height);
    image(this.image, this.eixoX2, 0, width,height);
  }
  move(){
    this.eixoX1 = this.eixoX1 - this.velocidade;
    this.eixoX2 = this.eixoX2 - this.velocidade;
    
    if(this.eixoX1 < -width){
      this.eixoX1 = width;
    }
    if(this.eixoX2 < -width){
      this.eixoX2 = width;
    }
  }
}