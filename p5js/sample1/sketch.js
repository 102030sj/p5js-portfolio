function setup() {
  createCanvas(600, 400);
}

function draw() {
  //space
  background(50);
  noStroke();
  fill(60);
  ellipse(300, 200, 670, 670)
  fill(80);
  
  //rainbowBackground
  ellipse(300, 200, 600, 600)
  fill(220, 120, 120);//red
  ellipse(300, 200, 450, 450)
  fill(230, 160, 110);//orange
  ellipse(300, 200, 400, 400);
  fill(240, 220, 130);//yellow
  ellipse(300, 200, 350, 350);
  fill(150, 200, 140);//green
  ellipse(300, 200, 300, 300);
  fill(130, 170, 220);//blue
  ellipse(300, 200, 250, 250);
  fill(140, 140, 200);//indigo
  ellipse(300, 200, 200, 200);
  fill(180, 140, 200);//purple
  ellipse(300, 200, 150, 150);
  
  //sparkles 
  stroke(255, 240, 180, 150); 
  strokeWeight(5); 
  noFill();
  ellipse(65, 50, 100, 100);
  ellipse(700, -100, 500, 500);
  ellipse(600, 400, 400, 400);
  ellipse(300, 50, 200, 200);
  ellipse(150, 300, 300, 300);
  ellipse(450, 200, 50, 50);
  
  //spaceship
  //body
  stroke(80,120);
  strokeWeight(5);
  fill(120);
  ellipse(300, 200, 170, 100);

  //glass
  stroke(255, 255, 255, 120);
  strokeWeight(5);
  fill(190, 230, 255);
  ellipse(300, 170, 110, 60);

  //glass(reflects)
  fill(255, 255, 255, 120);
  ellipse(280, 155, 25, 10);
  
  //body2
  stroke(255, 240, 180, 120);
  strokeWeight(5);
  fill(100);
  ellipse(300, 255, 100, 20);
 
  //body3
  stroke(80,120);
  strokeWeight(5);
  fill(100);
  ellipse(300, 225, 260, 60);
  
  //line1
  stroke(90,120);
  line(215, 195, 385, 195);

  //lights
  noStroke();
  fill(200, 180, 100);
  ellipse(240, 225, 30, 30);
  ellipse(300, 230, 30, 30);
  ellipse(360, 225, 30, 30);

  fill(255, 240, 180);
  ellipse(240, 225, 15, 15);
  ellipse(300, 230, 15, 15);
  ellipse(360, 225, 15, 15);

  //beams
  fill(255, 240, 180, 120);
  quad(260, 265, 340, 265, 400, 400, 200, 400);

} 