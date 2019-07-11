function Bird() {
  this.y=height/2;
  this.x= 64;
  this.velocity = 0;
  this.gravity = 1;

  this.show = function (){
      fill(255)
      ellipse(this.x, this.y, 52, 52)
  }

  this.update = function (){
      this.velocity+=this.gravity;
      this.y +=this.velocity;
  }
}
var bird;
function setup() {
  createCanvas(400,500)
  bird = new Bird();
}

function draw() {
  background(0)
  bird.show();
  bird.update();
  // put drawing code here
}