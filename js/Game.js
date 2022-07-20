class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }



  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

//função que adiciona controle para o jogador

//se apertar para cima, aumentar a posição no eixo X do player e atualizar a posicao do player




    play() {
      this.handleElements();
      //pegando informações do banco de dados
     
      //verificando se os players são diferentes de indefinido
      
        image(track, 0, -height * 5, width, height * 6);
        
        //variavel indice = 0
       
        //percorrer todos os elementos de allPlayers
        
    
      
     
      //chamar a função que controle o jogador
      drawSprites();
    }

  
  
}
