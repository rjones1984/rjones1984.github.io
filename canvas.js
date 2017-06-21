function draw() {
  // canvas with id="myCanvas"
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.beginPath(); // note usage below

    // triangle 1, at left
    var radGrad = ctx.createRadialGradient(275,250,5,290,260,100);
    ctx.fillStyle=radGrad;
    radGrad.addColorStop(0,"red");
    radGrad.addColorStop(1,"orange");
    ctx.beginPath();
    ctx.moveTo(0, 0); // start at top left corner of canvas
    ctx.lineTo(200, 0); // go 200px to right (x), straight line from 0 to 0
    ctx.lineTo(100, 200); // go to horizontal 100 (x) and vertical 200 (y)
    ctx.closePath();
    ctx.fill(); // connect and fill

  }
}

draw();
