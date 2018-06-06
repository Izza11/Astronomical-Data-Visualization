function ShapeClass()
{
  this.merX = 0;

}

var Shape = new ShapeClass();

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background(0);
  noStroke();
  fill(255);
  
  var toText = Shape.merX.toString(); //convert to string
  var lastChar = toText.slice(-1); //gets last character
  var lastDigit = +(lastChar);
  
  text("Mercury Hx:", 50, 300);
  text(Shape.merX, 150, 300);
  
  rect(100,100,70+lastDigit,70+lastDigit);
  
  
  
  
}
