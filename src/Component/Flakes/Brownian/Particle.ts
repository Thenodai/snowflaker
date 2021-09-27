import p5Types from 'p5';

interface IParticle {
    radius: number;
    vector: p5Types.Vector;
}

class Particle {
    private vector: p5Types.Vector;
    private radius: number;

    constructor(vector: p5Types.Vector) {
        this.vector = vector;
        this.radius = 3;
    }

    isFinished() {
        return this.vector.x < 0;
    }
}

export {
    IParticle
};

export default Particle;
