import React from 'react';
import Sketch from "react-p5";
import p5Types from 'p5';
import {DEFAULT_PARTICLE_RADIUS, HEIGHT, WIDTH} from "../../../config/constants";
import Snowflake from "../../../Snowflake";
import Particle from "../../../Particle";
import intersects from "../../../service/intersects";

const BrownianSnowflake = () => {
    let currentParticle: any;
    let snowflake: any;
    const setup = (p5: p5Types, canvasParentRef: any) => {
        p5.createCanvas(WIDTH, HEIGHT).parent(canvasParentRef);
        p5.fill(255);

        snowflake = new Snowflake();
        currentParticle = new Particle(WIDTH / 2, 0, DEFAULT_PARTICLE_RADIUS);
    };

    const draw = (p5: p5Types) => {
        p5.translate(WIDTH / 2, HEIGHT / 2);
        p5.rotate(p5.PI/6);
        p5.background(0);
        let updated = false;

        while (!currentParticle.isFinished() && !intersects(currentParticle, snowflake, p5)) {
            currentParticle.update(p5);
            updated = true;
        }
        if (!updated) {
            p5.noLoop();
        }

        snowflake.addParticle(currentParticle);
        currentParticle = new Particle(WIDTH / 2, 0, 3);

        for (let k = 0; k < 6; k++) {
            p5.rotate(p5.PI/3);
            snowflake.show(p5);

            p5.push();
            p5.scale(1, -1);
            snowflake.show(p5);
            p5.pop();
        }
    };
    return (
        <Sketch setup={setup} draw={draw} />
    )
};

export default BrownianSnowflake;
