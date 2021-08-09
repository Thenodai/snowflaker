import React from 'react';
import Sketch from 'react-p5';
import p5Types, { Vector } from 'p5';
import Line from './Line';
import { generateSnowflake } from './generator';

const KochSnowflake = () => {
    let flake: Array<Line> = [];
    const setup = (p5: p5Types, canvasParentRef: any) => {
        p5.createCanvas(600, 800).parent(canvasParentRef);
        p5.fill(255);

        const a = p5.createVector(0, 600);
        const b = p5.createVector(600, 600);
        const c = p5.createVector(300, 300);

        const d = new Line(p5, a, b);
        const e = new Line(p5, a, c);
        flake.push(d);
        flake.push(e);

        addEventListener('mousedown', () => generate(p5));
    };

    const generate = (p5: any) => {
        const nextGeneration: Array<Line> = [];

        for (let i = 0; i < flake.length; i++) {
            generateSnowflake(p5, flake[i], nextGeneration);
        }

        flake = nextGeneration;
    };

    const draw = (p5: p5Types) => {

        for (let i = 0; i < flake.length; i++) {
            flake[i].draw();
        }
    };

    return (
        <Sketch setup={setup} draw={draw} />
    )
};

export default KochSnowflake;
