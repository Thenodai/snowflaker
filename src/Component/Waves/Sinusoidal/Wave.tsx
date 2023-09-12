import React from 'react'
import Sketch from 'react-p5'
import p5Types from 'p5'
import { makeNoise3D } from 'open-simplex-noise'

let seed: number
let width: number = 800
let height: number = 300

const SinusoidalWave = () => {
  const setup = (p5: p5Types, canvasParentRef: any) => {
    p5.createCanvas(width, height).parent(canvasParentRef)
    p5.background(0)
    seed = p5.random(10, 1000)
    p5.stroke(255, 75)
  }

  const draw = (p5: p5Types) => {
    let t: number = Math.random()
    p5.background(0);
    const noise = makeNoise3D(Date.now())
    const m = 2000
    const rad = 1.5
    const nperiod = 4.0
    // p5.beginShape()
    // p5.noFill()
    for (let i = 0; i < m; i++) {
      const p = i / m
      const dx = 25 * noise(seed + rad * p5.cos(p5.TWO_PI * (nperiod * p - t)), rad * p5.sin(p5.TWO_PI * (nperiod * p - t)), 4.0 * p)
      const dy = 25 * noise(2 * seed + rad * p5.cos(p5.TWO_PI * (nperiod * p - t)), rad * p5.sin(p5.TWO_PI * (nperiod * p - t)), 4.0 * p)

      // p5.vertex(p * width + dx, height / 2 + dy)
      p5.point(p * width + dx, height / 2 + dy)
    }
    // p5.endShape()
  }

  return (
    <Sketch setup={setup} draw={draw} />
  )
}

export default SinusoidalWave
