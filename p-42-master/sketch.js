var hr, mn, sec;
var hourAngle, minAngle, secAngle;

function setup() {
  createCanvas(800,400);
}

function draw() {
  background("black");  

  hr = hour();
  mn = minute();
  sec = second();
  angleMode(DEGREES);
  translate(400, 200);
  rotate(-90);

  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(mn, 0, 60, 0, 360);
  hourAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(secAngle);
  stroke("red");
  strokeWeight(8);
  line(0, 0, 100, 0);
  
  
  pop();

  push();
  rotate(minAngle);
  stroke("purple");
  strokeWeight(8);
  line(0, 0, 75, 0);
  
  
  pop();

  push();
  rotate(hourAngle);
  stroke("orange");
  strokeWeight(8);
  line(0, 0, 50, 0);
  
  
  pop();
}