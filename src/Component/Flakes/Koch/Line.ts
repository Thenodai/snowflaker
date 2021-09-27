import p5Types from 'p5'

class Line {
  public startVector: p5Types.Vector
  public endVector: p5Types.Vector

  constructor(startVector: p5Types.Vector, endVector: p5Types.Vector) {
    this.startVector = startVector
    this.endVector = endVector
  }
}

export default Line
