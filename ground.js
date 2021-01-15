class Ground {
    constructor(x, y, width) {
      var options = {
        isStatic: true,
        density: 20,
        friction: 7
      }
      this.body = Bodies.rectangle(x, y, width, 50, options)
      this.width = width
      this.height = 50
  
      //loading the image
      this.image= loadImage('images/ground.png')
  
      World.add(world, this.body)
  
    }
    display() {
      var pos = this.body.position;
       imageMode(CENTER)
      rectMode(CENTER)
      fill("blue");
     
  
      image(this.image,pos.x, pos.y, 2000, 50);
    }
  }