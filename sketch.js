//namespacing
var Engine = Matter.Engine
var World = Matter.World
var Bodies = Matter.Bodies

var en, wo
var b1, g, b2

function setup(){
  createCanvas(600,600);

  en = Engine.create()
  wo = en.world

  b1 = new Box(200,50)
  b2 = new Box(220,150)
  g = new Ground()
 
}

function draw(){
    background(0);
    Engine.update(en)
    rectMode(CENTER)

    b1.display()
    b2.display()
    g.display()



}