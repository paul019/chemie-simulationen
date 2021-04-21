class Boundary {
  constructor(engine, x, y, w, h, color) {
    this.color = color

    this.body = Bodies.rectangle(x, y, w, h, {
      isStatic: true,
      friction: 0,
      frictionAir: 0,
      restitution: 1,
    });
    World.add(engine.world, this.body);
  }

  display() {
    noStroke()
    fill(this.color)
    drawBody(this.body)
  }

  setPosition(x, y) {
    Body.setPosition(this.body, {x, y});
  }
}
