// JavaScript source code
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//All Variables
var boxes = [],ground1,ground2,hexagon,hasDragged = false;

function setup() {

    createCanvas(800, 500);

    engine = Engine.create();
    world = engine.world;

    //Give values to variables
    ground1 = new Ground(300, 200, 100, 20);

    hexagon = new Hexagon(100, 100);

    var center = { x: 310, y: 160 };
    var colors = {}; 

    var index = 0;

    for (var x = 0; x < 6; x++) {
        for (var y = 0; y < x; y++) {
            boxes[index] = new Box(center.x + (x*10), center.y - (y*20));
            index++;
            boxes[index] = new Box(center.x - (x * 10), center.y - (y * 20));
            index++;
        }
    }
    
}

function draw() {
    background("white");
    Engine.update(engine);

    //display objects
    ground1.display();

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].display("red");
    }

    hexagon.display();
}

function keyPressed() {
    //catch key presses
}

function mouseDragged() {
    if (hasDragged)
        return;
    Body.setPosition(this.hexagon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    hasDragged = true;
    this.hexagon.fly();
}
