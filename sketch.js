const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber ;
var iron ;
var other


function setup(){
    var canvas = createCanvas(windowWidth,windowHeight,500);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height-20,2000,20)
    hammer = new Hammer(10,100);

    rubber = new Rubber(800,200,(100-20)/2);

    iron = new Iron(200,200,100,100)

    other = new Other(700,200,80,50)

    c1=new Circle(600,200,(40-20)/2)
    c2=new Circle(620,200,(40-20)/2)
    c3=new Circle(640,200,(40-20)/2)
    c4=new Circle(660,200,(40-20)/2)
    c5=new Circle(680,200,(40-20)/2)
    c6=new Circle(740,200,(40-20)/2)
    c7=new Circle(700,200,(40-20)/2)
    c8=new Circle(720,200,(40-20)/2)
    c9=new Circle(760,200,(40-20)/2)
    c10=new Circle(780,200,(40-20)/2)
}

function draw(){
    background("lightBlue");

   
   
    Engine.update(engine);


    plane.display();
    hammer.display();

    iron.display()
    other.display()
    rubber.display()
    c1.display()
    c2.display()
    c3.display()
    c4.display()
    c5.display()
    c6.display()
    c7.display()
    c8.display()
    c9.display()
    c10.display()
}