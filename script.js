let c = 0;
let listo = true;
let points = 1000;
let pointin = 0;
let rad = 400;
function setup() {
  createCanvas(400, 400);
  frameRate(500);
}
function drawPoint(){
  stroke('purple'); 
  strokeWeight(5);
  let random1 = random(401);
  let random2 = random(401);
  point(random1, random2);
  if(sqrt((random1-200)**2+(random2-200)**2)<=200){
    pointin+=1;
  }

}
function draw() {

  noFill();
  stroke('black'); 
  strokeWeight(2);
  circle(width/2, height/2, rad);
  if(c<points){
    drawPoint();
  }
  else{
    listo = false;
  }
  let pi = 4*(pointin/points);
    textSize(25);
    fill(255);
    text('Approximation of pi with \n'+points+' points is: '+pi,70,200);
  if(listo){
    c+=1;
  }
}
