import { STANDARD_DEVIATION } from './config/constants';

class Particle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r
    }

    update() {
        this.x -= 1;
        this.y += p.random(-STANDARD_DEVIATION, STANDARD_DEVIATION);
    };

    show() {
        p.fill(0, 0, this.x * this.r);
        p.stroke(255);
        p.ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    isFinished() {
        return this.x < 0;
    }
}

export default Particle;
