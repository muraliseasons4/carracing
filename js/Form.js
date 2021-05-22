class Form {

  constructor() {
 this.input = createInput("").attribute("placeholder", "𝓝𝓐𝓜𝓔");
    this.button = createButton('𝓟𝓛𝓐𝓨');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset=createButton('𝓡𝓔𝓢𝓔𝓣');
    // resetimg=loadImage("images/reset.png");
    // reset = createSprite(10,20);
    // reset.addImage("reset",resetimg);

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("𝓒𝓪𝓻 𝓡𝓪𝓬𝓲𝓷𝓰 𝓖𝓪𝓶𝓮");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("𝓗𝓔𝓛𝓛𝓞 " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
