import p5Types, {Vector} from "p5";

class Line {
    private p5: any;
    private startVector: any;
    private endVector: any;

    constructor(p5: any, startVector: any, endVector: any) {
        this.p5 = p5;
        this.startVector = startVector;
        this.endVector = endVector;
    }

    draw = () => {
        this.p5.line(this.startVector.x, this.startVector.y, this.endVector.x, this.endVector.y);
    }
}

export default Line;
