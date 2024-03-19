import { Game } from "./game.js";
import { resources } from "./resources.js";

window.onload = function () {
    const canvas = document.createElement("canvas");
    canvas.id = "gameWindow";
    canvas.width = window.innerWidth;
    canvas.height =  window.innerHeight;

    const ctx = canvas.getContext("2d");

    let game = new Game(canvas, ctx, resources);
    document.body.append(canvas);

    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        game.resizeWindow(window.innerWidth, window.innerHeight);
    }

    function draw() {
        game.render();
        requestAnimationFrame(draw);
    }
      
    draw();
}