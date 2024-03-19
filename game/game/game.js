export class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
    }

    resizeWindow(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    render() {
        this.ctx.fillStyle = "#60BC23";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}