// JavaScript source code
class Box {
    constructor(x, y) {
        this.pos = { x: x, y: y };
        this.body = Bodies.rectangle(x, y, 10, 20);
        World.add(world, this.body);
    }

    display(color) {
        fill(color);
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rect(0, 0, 10, 20);
        pop();
        fill("white");
    }
}