class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }

  car1=createSprite(100,200)
  car2=createSprite(300,200)
  car3=createSprite(500,200)
  car4=createSprite(700,200)
  car=[car1,car2,car3,car4]
  }

  play(){
    Player.getPlayerinfo()
    form.hide()
    if(allPlayers!==undefined){
    var index=0
    var x=0
    var y

    for(var plr in allPlayers){
      index=index+1
      x=x+200
      y=displayHeight-allPlayers[plr].distance
      car[index-1].x=x
      car[index-1].y=y


    if(plr===player.index){
      car[index-1].shapeColor="red"
      camera.position.x=displayWidth/2
      camera.position.y=car[index-1].y
    
    
    }
    else{
      fill("black")
    }
    
    }

    
    }
    if(keyIsDown(UP_ARROW)&& player.index!== null){
      player.distance+=50
      player.update()
    }
  }
}
