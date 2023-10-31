var xoff = 0;
var yoff = 0;
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);
    //var x = random(width);
    var x = map(noise(xoff), 0, 1, 0, width);
    var y = map(noise(yoff), 0, 1, 0, width)
    xoff += 0.01;
    yoff += 0.02;
    ellipse(x, y, 24, 24);
}