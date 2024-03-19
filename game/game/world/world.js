import { Tile } from "./tile.js";

/**
*   World
*   Class of World
*
*   @author fet1sov <prodaugust21@gmail.com>
*/

export class World {

    
    constructor(biomeColor, worldSize) {
        this.chunks = [];
        this.biomeColor = biomeColor;

        this.chunks[0] = new Tile(0, 0);
        this.chunks[1] = new Tile(32, 32);
        this.chunks[2] = new Tile(64, 64);
    }

    /**
     * Get the Tile object
     * @param {number} x - Coordinate by X
     * @param {number} y - Coordinate by Y
     */    
    getTile(x, y) {
        return this.chunks[x][y];
    }

    /**
     * Rendering method of Tile
     * @param {CanvasRenderingContext2D} 2D context of canvas
     * @param {Resources} Game assets class
     */  
    render(ctx, resources) {
        ctx.fillStyle = this.biomeColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        this.chunks.forEach(tile => {
            tile.render(ctx, resources);
        });
    }
}