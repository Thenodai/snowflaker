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

    show() {
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].show();
        }
    }
}

export default Snowflake;