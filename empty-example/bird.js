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