import { IParticle } from '../Particle';
import { P5 } from '../Snowflake';
import {DEVIATION} from '../config/constants';

const intersects = (currentParticle: IParticle, snowflake: IParticle[]) => {
    let intersects = false;
    for (let i = 0; i < snowflake.length; i++) {
        const particle = snowflake[i];
        let distance = P5.getP5().dist(particle.vector.x, particle.vector.y, currentParticle.vector.x, currentParticle.vector.y);
        if (distance < currentParticle.radius * 3) {
            intersects = true;
            break
        }
    }

    return intersects;
}

const snow = (snowflake: IParticle[]) => {
    for (let i = 0; i < snowflake.length; i++) {
        const particle = snowflake[i];

        const p5 = P5.getP5();
        p5.fill(0, 0, particle.vector.x * particle.radius);
        p5.stroke(255);
        p5.ellipse(particle.vector.x, particle.vector.y, particle.radius * 2, particle.radius * 2);
    }
}

const update = (particle: any) => {
    particle.vector.x -= 1;
    particle.vector.y += P5.getP5().random(-DEVIATION, DEVIATION);
}

export {
    intersects,
    snow,
    update,
};
