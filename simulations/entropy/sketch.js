let engine;

let redParticles = []
let blueParticles = []
let boundaries = []

let zone1;
let zone2;

let slider;

function setup() {
  createCanvas(800, 600);var canvas = createCanvas(800, 600);
  canvas.parent('canvas');

  slider = document.getElementById("slider");

  // create an engine
  engine = Engine.create();
  engine.gravity.scale = 0

  // run the engine
  Runner.run(engine);

  for(let i=0; i<50; i++) {
    redParticles.push(new Particle(engine, random(100, 300), random(100, 500), 10, random(-5, 5), random(-5, 5), color(255,0,0)))
    blueParticles.push(new Particle(engine, random(500, 700), random(100, 500), 10, random(-5, 5), random(-5, 5), color(0,0,255)))
  }

  boundaries.push(new Boundary(engine, 400, 5, 800, 10, 0))
  boundaries.push(new Boundary(engine, 400, 595, 800, 10, 0))
  boundaries.push(new Boundary(engine, 5, 300, 10, 600, 0))
  boundaries.push(new Boundary(engine, 795, 300, 10, 600, 0))

  boundaries.push(new Boundary(engine, 400, 125, 10, 300, 0))
  boundaries.push(new Boundary(engine, 400, 475, 10, 300, 0))

  zone1 = new Zone(0, 0, 400, 600);
  zone2 = new Zone(400, 0, 400, 600);
}

function draw() {
  background(255);

  boundaries[4].setPosition(400, map(slider.value, 0, 100, 160, -150))
  boundaries[5].setPosition(400, map(slider.value, 0, 100, 440, 750))

  for(particle of redParticles) {
    particle.display()
  }
  for(particle of blueParticles) {
    particle.display()
  }

  for(boundary of boundaries) {
    boundary.display()
  }

  textSize(32);
  textAlign(CENTER, CENTER);

  fill(255, 0, 0)
  text(zone1.particlesInZoneCount(redParticles), 160, 550)
  fill(0, 0, 255)
  text(zone1.particlesInZoneCount(blueParticles), 240, 550)

  fill(255, 0, 0)
  text(zone2.particlesInZoneCount(redParticles), 560, 550)
  fill(0, 0, 255)
  text(zone2.particlesInZoneCount(blueParticles), 640, 550)
}
