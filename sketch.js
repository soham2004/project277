const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ball, bar, string;
var backgroundImg,platform;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var options= {
        isStatic:true
    }
    bar=Bodies.rectangle(200,70,120,30, options)
World.add(world,bar)
var options= {
    restitution:1
}
ball=Bodies.circle(200,200,30, options)
 World.add(world,ball)



var options={
    bodyA: bar,
    bodyB: ball,
    stiffness: 0.04,
    length: 25
}
var Chain = Constraint.create(options)
World.add(world,Chain)
}
function draw(){
    background(0000);
    Engine.update(engine);
rectMode(CENTER)
rect(bar.position.x, bar.position.y, 120,30)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,30,30)

strokeWeight(3)
stroke("blue")
line(bar.position.x,bar.position.y,ball.position. x,ball.position.y);
if (keyCode===32) {
  ball.position.x=mouseX,
  ball.position.y=mouseY
}
else if (keyCode===ENTER) {
    ball.position.x=200
}
}