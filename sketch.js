var car, wall, Speed, Weight, Deformation;

function setup() {
  createCanvas(1600, 400);

  Speed = random(55, 90)
  Weight = random(400, 1500)
  Deformation = (0.5 * Weight * Speed * Speed) / 22500;
  car = createSprite(100, 200, 50, 50);
  car.velocityX = Speed;
  car.shapeColor = "blue";

  wall = createSprite(1500, 200, 30, 150);
  wall.shapeColor = "white";
}

function draw() {
  background(0);
  fill("cyan");
  textSize(20);
  text("Speed: " + Math.round(Speed), 20, 30);
  text("Weight: " + Math.round(Weight), 120, 30);
  text("Deformation: " + Math.round(Deformation), 250, 30);

  if (wall.x - car.x < (car.width + wall.width) / 2) {
    car.velocityX = 0;
    if (Deformation < 100) {
      car.shapeColor = color(0, 255, 0);
      fill("Green");
      textSize(80);
      text("GOOD", 700, 200)
    }
      if (Deformation > 100 && Deformation <= 180){
        car.shapeColor = color(230, 230, 0);
        fill("yellow");
        textSize(80);
        text("AVERAGE", 600, 200)
        }

  if (Deformation > 180) {
    car.shapeColor = color(255, 0, 0);
    fill("Red");
    textSize(80);
    text("LETHAL", 700, 200)
  }
}
  drawSprites();
}