class Zone {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  isParticleInZone(particle) {
    let x_ = particle.body.position.x;
    let y_ = particle.body.position.y;
    return x_ >= this.x && y_ >= this.y && x_ < this.x + this.w && y_ < this.y + this.h;
  }

  particlesInZoneCount(particles) {
    let count = 0;

    for(particle of particles) {
      if(this.isParticleInZone(particle)) {
        count++;
      }
    }

    return count;
  }
}
