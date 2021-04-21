class Particle {
  constructor(engine, x, y, radius, vx, vy, color) {
    this.radius = radius
    this.color = color

    this.body = Bodies.circle(x, y, radius, {
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
      //inverseInertia: 0,
      restitution: 1,
      inertia: Infinity,
    });
    Body.setVelocity(this.body, {x: vx, y: vy});
    World.add(engine.world, this.body);
  }

  display() {
    noStroke()
    fill(this.color)
    drawBody(this.body)
  }
}
