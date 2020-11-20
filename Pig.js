class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    // 255 -> completely visible
    this.visibility = 255;
  }

  display(){
//  we wanted to see continuous change in speed of the pig and whatever is in draw() gets called over and over -> found that display() of pig is in draw()
     
    
    console.log(this.body.speed);
    // reducing visibility by 5 everytime
   
    if(this.body.velocity.x< 3){
      super.display(); // parents display for rest of the code
    }else{

      World.remove(world, this.body);
      push(); // applying below settings to body such that only pig disappears
      this.visibility -= 5;
      tint(255, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop(); // restoring the original settings
    }
  }

};