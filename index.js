import p5 from 'p5';
import Particle from './src/Particle';
import Snowflake from './src/Snowflake';
import intersects from './src/service/intersects';
import { WIDTH, HEIGHT, DEFAULT_PARTICLE_RADIUS } from './src/config/constants';

const sketch = (p) => {
    let currentParticle;
    let snowflake;

    p.setup = function() {
        p.createCanvas(WIDTH, HEIGHT);
        p.fill(255);

        snowflake = new Snowflake();
        currentParticle = new Particle(WIDTH / 2, 0, DEFAULT_PARTICLE_RADIUS);
    };

    p.draw = function() {
        p.translate(WIDTH / 2, HEIGHT / 2);
        p.rotate(p.PI/6);
        p.background(0);
        let updated = false;

        while (!currentParticle.isFinished() && !intersects(currentParticle, snowflake)) {
            currentParticle.update();
            updated = true;
        }
        if (!updated) {
            p.noLoop();
        }

        snowflake.addParticle(currentParticle);
        currentParticle = new Particle(WIDTH / 2, 0, 3);

        for (let k = 0; k < 6; k++) {
            p.rotate(p.PI/3);
            snowflake.show();

            p.push();
            p.scale(1, -1);
            snowflake.show();
            p.pop();
        }
    };
};

window.p = new p5(sketch, document.getElementById('container'));
