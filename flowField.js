var inc = 0.2;
var scl = 10;
var cols, rows;
var fr;

var zoff = 0;

function setup() {
    createCanvas(400, 400);
    cols = floor(width / scl);
    rows = floor(height / scl);
    fr = createP('');
}

function draw() {
    background(255);
    var yoff = 0;
    for (var y = 0; y < rows; y++){
        var xoff = 0;
        for (var x = 0; x < cols; x++){
            var index = (x + y * width) * 4;
            var angle = noise(xoff, yoff, zoff) * TWO_PI;
            xoff += inc;
            //fill(r);
            // create vector here
            var v = p5.Vector.fromAngle(angle);
            //rect(x * scl, y * scl, scl, scl);
            stroke(0);
            push();
            translate(x * scl, y * scl);
            rotate(v.heading());
            line(0, 0, scl, 0);
            pop();
        }
        yoff += inc;
        zoff += 0.0005;

    }


    fr.html(floor(frameRate()));
}