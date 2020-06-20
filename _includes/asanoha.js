var incrementX = new Point(60, 0);
var incrementY = incrementX.rotate(60);

var pattern = new Group();

function drawTriangle(pointA, pointsRight) {
  var pointB = pointA + incrementY;
  var pointC = pointsRight
    ? pointA + incrementX
    : pointA + incrementY - incrementX;

  pattern.addChild(new Path([pointA, pointB, pointC]));

  var center = new Point(
    (pointA.x + pointB.x + pointC.x) / 3,
    (pointA.y + pointB.y + pointC.y) / 3
  );

  pattern.addChild(new Path.Line(center, pointA));
  pattern.addChild(new Path.Line(center, pointB));
  pattern.addChild(new Path.Line(center, pointC));
}

var origin = new Point(-240, 150);

for (var i = 0; i < 20; i++) {
  for (var j = 0; j < 20; j++) {
    var point = origin + incrementX * i + incrementY * j;
    drawTriangle(point, false);
    drawTriangle(point, true);
  }
}

pattern.strokeColor = "thistle";
pattern.strokeWidth = 2;
pattern.rotate(-30, origin);
