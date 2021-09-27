import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';
import { HEIGHT, WIDTH } from './config/constants';
import Particle, { IParticle } from './Particle';
import { intersects, snow, update } from './service/manager';

class P5 {
    static internal: p5Types;
    constructor(p5: p5Types) {
        P5.internal = p5;
    }
    static getP5 = () => P5.internal;
}

const BrownianSnowflake = () => {
    let currentParticle: any;
    let snowflake: IParticle[] = [];
    const setup = (p5: p5Types, canvasParentRef: any) => {
        new P5(p5);
        p5.createCanvas(WIDTH, HEIGHT).parent(canvasParentRef);
        p5.fill(255);

        currentParticle = new Particle(p5.createVector(WIDTH / 2, 0));
    };

    const draw = (p5: p5Types) => {
        p5.translate(WIDTH / 2, HEIGHT / 2);
        p5.rotate(p5.PI/6);
        p5.background(0);
        let updated = false;

        while (!currentParticle.isFinished() && !intersects(currentParticle, snowflake)) {
            update(currentParticle);
            updated = true;
        }
        if (!updated) {
            p5.noLoop();
        }

        snowflake.push(currentParticle);
        currentParticle = new Particle(p5.createVector(WIDTH / 2, 0));

        for (let k = 0; k < 6; k++) {
            p5.rotate(p5.PI/3);
            snow(snowflake);

            p5.push();
            p5.scale(1, -1);
            snow(snowflake)
            p5.pop();
        }
    };
    return (
        <Sketch setup={setup} draw={draw} />
    )
};
export { P5 };

export default BrownianSnowflake;
