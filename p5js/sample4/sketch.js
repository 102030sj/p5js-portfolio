function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100, 100);
  
  frameRate(30)
}

function draw() {
  background(230, 20, 20);
  let t = millis() * 0.001;

  // 우주선 움직임
  let shipX = 300 + sin(t * 1.5) * 40;
  let shipY = 200 + cos(t * 2) * 15;

  // 우주선 크기 변화
  let shipScale = 1 + sin(t * 2) * 0.08;

  // 무지개 배경 색 변화
  let rainbowHue = (frameCount * 0.5) % 360;

  // =========================
  // SPACE
  // =========================
  noStroke();

  fill(220, 20, 25);
  ellipse(300, 200, 670, 670);

  fill(220, 10, 35);
  ellipse(300, 200, 600, 600);
  
  fill((rainbowHue + 0) % 360, 70, 90);
  ellipse(300, 200, 450, 450);

  fill((rainbowHue + 40) % 360, 70, 90);
  ellipse(300, 200, 400, 400);

  fill((rainbowHue + 80) % 360, 70, 90);
  ellipse(300, 200, 350, 350);

  fill((rainbowHue + 120) % 360, 70, 90);
  ellipse(300, 200, 300, 300);

  fill((rainbowHue + 180) % 360, 70, 90);
  ellipse(300, 200, 250, 250);

  fill((rainbowHue + 240) % 360, 70, 90);
  ellipse(300, 200, 200, 200);

  fill((rainbowHue + 300) % 360, 70, 90);
  ellipse(300, 200, 150, 150);
  noFill();
  stroke(60, 30, 100, 40);
  strokeWeight(4);

  ellipse(65, 50, 100 + sin(t * 2) * 20);
  ellipse(700, -100, 500 + cos(t) * 30);
  ellipse(600, 400, 400 + sin(t * 1.5) * 25);
  ellipse(300, 50, 200 + cos(t * 2) * 15);
  ellipse(150, 300, 300 + sin(t) * 20);
  ellipse(450, 200, 50 + sin(t * 4) * 10);
  push();

  translate(shipX, shipY);
  scale(shipScale);

  // body
  stroke(0, 0, 40, 50);
  strokeWeight(5);
  fill(0, 0, 70);
  ellipse(0, 0, 170, 100);

  // glass
  stroke(200, 20, 100, 50);
  fill(200, 30, 100);

  // 유리창 크기 변화
  let glassSize = 110 + sin(t * 3) * 8;
  ellipse(0, -30, glassSize, 60);

  // glass reflect
  noStroke();
  fill(0, 0, 100, 40);
  ellipse(-20, -45, 25, 10);

  // body2
  stroke(50, 30, 100, 40);
  fill(0, 0, 60);
  ellipse(0, 55, 100, 20);

  // body3
  stroke(0, 0, 40, 50);
  fill(0, 0, 60);
  ellipse(0, 25, 260, 60);

  // line
  stroke(0, 0, 50);
  line(-85, -5, 85, -5);
  noStroke();

  let lightHue = (frameCount * 3) % 360;

  fill(lightHue, 80, 100);
  ellipse(-60, 25, 30, 30);

  fill((lightHue + 120) % 360, 80, 100);
  ellipse(0, 30, 30, 30);

  fill((lightHue + 240) % 360, 80, 100);
  ellipse(60, 25, 30, 30);

  fill(60, 10, 100);
  ellipse(-60, 25, 15, 15);
  ellipse(0, 30, 15, 15);
  ellipse(60, 25, 15, 15);
  fill(50, 30, 100, 30);

  let beamWidth = 60 + sin(t * 3) * 20;

  quad(
    -beamWidth, 65,
    beamWidth, 65,
    100, 200,
    -100, 200)
}
function keyPressed() {
  if (key === 's') {
    saveGif("spaceship", 5);
  }
}
