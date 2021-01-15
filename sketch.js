const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world;
var player,ground;
function setup() {
  createCanvas(800,400);
  engine = Engine.create()

  world = engine.world
  player = new Player(100, 10, 20, 50)

  realGround = new Ground(400,380,2000)
}

function draw() {
  background(0,255,255);
  Engine.update(engine)  
  player.display()
  realGround.display()
  if (keyIsDown(RIGHT_ARROW)) {
    Matter.Body.setVelocity(player.body, { x: 10, y: 10 })
    //pos.y=pos.y;
  }
  else if (keyIsDown(LEFT_ARROW)) {
    Matter.Body.setVelocity(player.body, { x: -10, y: 0 })
    //pos.y=pos.y;
  }
  else if (keyIsDown(UP_ARROW)) {
    Matter.Body.setVelocity(player.body, { x: 0, y: -10 });
    //pos.y=pos.y;
  }


}