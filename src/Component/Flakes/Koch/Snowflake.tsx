import React  from 'react'
import Sketch from 'react-p5'
import p5Types from 'p5'
import Line from './Line'
import { generateSnowflake } from './service/generator'

const KochSnowflake = () => {
  let flake: Line[] = []
  let depth: number = 0
  let sideLength: number = 300;

  const setup = (p5: p5Types, canvasParentRef: any) => {
    p5.createCanvas(600, 600).parent(canvasParentRef)
    p5.fill(255)

    const h = sideLength * (3 ** 0.5) / 2;

    const a = p5.createVector(-sideLength / 2 , h)
    const b = p5.createVector(sideLength / 2 , h)
    const c = p5.createVector(0, 0)

    const bottom = new Line(b, a)
    const left = new Line(a, c)
    const right = new Line(c, b)
    flake.push(bottom);
    flake.push(left)
    flake.push(right);

    addEventListener('mousedown', () => generate(p5))
  }

  const generate = (p5: any) => {
    if (depth > 5) {
      return
    }
    const nextGeneration: Array<Line> = []

    for (let i = 0; i < flake.length; i++) {
      generateSnowflake(p5, flake[i], nextGeneration)
    }
    depth++

    flake = nextGeneration
  }

  const draw = (p5: p5Types) => {
    p5.translate(300, 100)

    p5.push()
    p5.beginShape();
    for (let i = 0; i < flake.length; i++) {
      const line = flake[i]
      p5.vertex(line.startVector.x, line.startVector.y)
      p5.vertex(line.endVector.x, line.endVector.y)
    }
    p5.endShape();
    p5.pop()
  }

  return (
    <Sketch setup={setup} draw={draw} />
  )
}

export default KochSnowflake
