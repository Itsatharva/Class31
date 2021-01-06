class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.projectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var positions = [this.body.position.x,this.body.position.y];
      this.projectory.push(positions);

    }
    for (var i = 0; i<this.projectory.length;i++){
      image(this.smokeimage,this.projectory[i][0],this.projectory[i][1]);
    }
  }
}
