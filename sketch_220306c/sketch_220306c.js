
var x;

var y;

var sx;

var sy;

var speed;

var score;

var alive;

var life;

function setup() {
    initializeFields();
    createCanvas(800, 400);
    var theta = random(-60, 60) * PI / 180;
    sx = int((speed * cos(theta)));
    sy = int((speed * sin(theta)));
}

function keyPressed() {
    x = 400;
    y = 200;
    var theta = random(-60, 60) * PI / 180;
    sx = int((speed * cos(theta)));
    sy = int((speed * sin(theta)));
    alive = true;
}

function draw() {
    background(255);
    // <>//
    fill(255, 0, 0);
    circle(x, y, 20);
    fill(0, 0, 255);
    rect(800 - 40, mouseY - 50, 20, 100);
    rect(20, y - 50, 20, 100);
    x = x + sx;
    y = y + sy;
    if (x < 40) {
        sx = -sx;
    }
    if (x > 780) {
        sx = 0;
        sy = 0;
        if (alive) {
            life = life - 1;
        }
        alive = false;
    }
    if (x > 760 && y > (mouseY - 50) && y < (mouseY + 50)) {
        sx = -sx;
        if (alive) {
            score = score + 10;
        }
    }
    if (y > 400 || y < 0) {
        sy = -sy;
    }
    textSize(10);
    text("Score:" + score + " Life:" + life, 360, 20);
    if (life <= 0) {
        textSize(50);
        fill(255, 0, 0);
        text("Game Over", 300, 200);
    }
}

function initializeFields() {
    x = 400;
    y = 200;
    sx = 5;
    sy = 5;
    speed = 10;
    score = 0;
    alive = true;
    life = 3;
}
