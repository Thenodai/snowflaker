import { Vector } from 'p5'
import p5Types from 'p5'
import Line from '../Line'

const generateSnowflake = (p5: p5Types, line: Line, list: Array<Line>) => {
  const length = Vector.sub(line.endVector, line.startVector)
  length.div(3)
  const a1 = Vector.add(line.startVector, length)
  const b1 = Vector.sub(line.endVector, length)

  length.rotate(-p5.PI / 3)
  const c1 = Vector.add(a1, length)

  const a = new Line(line.startVector, a1)
  const c = new Line(a1, c1)
  const c2 = new Line(c1, b1)
  const b = new Line(b1, line.endVector)

  p5.stroke(255)
  p5.line(a1.x, a1.y, b1.x, b1.y)
  p5.stroke(0)

  list.push(a, c, c2, b)

  return list
}

export {
  generateSnowflake
}
