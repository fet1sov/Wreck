import { World } from "./world/world.js";

/**
*   Game
*   Main game class
*
*   @author fet1sov <prodaugust21@gmail.com>
*/

export class Game {
    
    /**
     * Game instance constructor
     * It creating the world and initialize basic resource
     * @param {any} canvas Canvas document element
     * @param {CanvasRenderingContext2D} ctx 2D context of canvas
     * @param {Resources} resources Game assets class
     */  
    constructor(canvas, ctx, resources) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.resources = resources;

        this.world = new World("#60BC23", 16);
        this.world.generateWorld();
    }

    /**
     * Resize game window method
     * This method resize canvas window in body of DOM Tree
     * @param {number} Width of the window
     * @param {number} Height of the window
     */  
    resizeWindow(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    /**
     * Game rendering method
     */  
    render() {
        this.world.render(this.ctx, this.resources);
    }
}