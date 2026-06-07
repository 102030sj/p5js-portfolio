function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  fill(0);
  ellipse(300, 88, 104, 88); // head
 
  fill(255, 240, 220);
  noStroke();
  ellipse(300, 120, 88, 112); // face
  ellipse(252, 116, 24, 24); // left ear
  ellipse(348, 116, 24, 24); // right ear
  rect(276, 168, 48, 32); // neck
  
  fill(0);
  quad(265, 105 , 287, 107, 288 ,112, 263, 110); //eyebrows1
  quad(335, 105 , 313, 107, 312 ,112, 337, 110); //eyebrows2
  
  
  fill(255, 240, 220);
  triangle(236, 200, 276, 200, 276, 188); // 승모근1
  triangle(364, 200, 324, 200, 324, 188); // 승모근2
  quad(172, 356, 200, 336, 252, 420, 244, 448); // left arm2
  quad(428, 356, 400, 336, 348, 420, 356, 448); // right arm2
  ellipse(188, 352, 32, 32); // 왼쪽 팔꿈치
  ellipse(412, 352, 32, 32); // 오른쪽 팔꿈치
  
  fill(0); // top color
  quad(196, 200, 404, 200, 356, 400, 244, 400); // body
  ellipse(201, 220, 40, 40); // left shoulder
  ellipse(399, 220, 40, 40); // right shoulder
  triangle(236, 200, 252, 194, 268, 200); // 승모근 위 옷1
  triangle(364, 200, 348, 194, 332, 200); // 승모근 위 옷2
  
  quad(181, 216, 236, 200, 208, 352, 172, 352); // left arm1
  quad(419, 216, 364, 200, 392, 352, 428, 352); // right arm1
  
  fill(235, 210, 185) // shadow
  triangle(290, 111, 295, 121, 280, 111);
  triangle(310, 111, 305, 121, 320, 111);
  quad(295, 121, 300, 124, 300, 145, 292, 140);
  triangle(300, 142, 300, 145, 308, 140);
  ellipse(252, 116, 10, 12); // left ear
  ellipse(348, 116, 10, 12); // right ear
  
  fill(200, 120, 115); //lip color
  arc(300, 152, 30, 14, 0, PI);
  
  fill(255); //eye
  arc (278 ,115, 25, 14, 0, PI);
  arc (322 ,115, 25, 14, 0, PI);
  fill(150, 100, 70);
  ellipse(278, 117, 9, 9);
  ellipse(322, 117, 9, 9);
  fill(0);
  ellipse(278, 117, 4, 4);
  ellipse(322, 117, 4, 4);
  stroke(0);
  strokeWeight(2);
  line(266, 114, 289, 114);
  line(334, 114, 311, 114);
  
  noStroke();
  fill(235, 210, 185); // 피부 그림자색

  arc(278, 123, 18, 7, 0, PI); // 왼쪽 애굣살
  arc(322, 123, 18, 7, 0, PI); // 오른쪽 애굣살
  
  fill(0); //hair detail
  ellipse(300, 80, 70,40);
  fill(255, 240, 220);
  ellipse(300, 85, 40, 50);
  fill(0);
  ellipse(300, 75, 40, 40);
  fill(255, 240, 220);
  ellipse(300, 85, 12, 20);
  
  noFill(); // necklace
  stroke(180);
  strokeWeight(2);
  arc(300, 192, 70, 40, 0, PI);
}