class Snowflake {
    constructor() {
        this.particles = [];
    }

    addParticle(particle) {
        this.particles.push(particle);
    }

    getParticles() {
        return this.particles;
    }

    show(p5) {
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].show(p5);
        }
    }
}

export default Snowflake;
