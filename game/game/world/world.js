import { Chunk } from "./chunk.js";
import { Tile } from "./tile.js";

/**
*   World
*   Class of World
*
*   @author fet1sov <prodaugust21@gmail.com>
*/

export class World {

    /**
     * Get the Tile object
     * @param {String} biomeColor - Coordinate by X
     * @param {number} worldSize - Size of the world
     */  
    constructor(biomeColor, worldSize) {
        this.chunk = new Chunk(worldSize);
        this.biomeColor = biomeColor;

        this.chunk.setTile(0, 0, new Tile("bush", 1, 1));
        this.chunk.setTile(1, 0, new Tile("bush", 1, 2));
    }

    /**
     * Get the tile from chunk
     * @param {number} x - Coordinate by X
     * @param {number} y - Coordinate by Y
     */    
    getTile(x, y) {
        return this.chunks[x][y];
    }

    /**
     * World rendering method
     * @param {CanvasRenderingContext2D} ctx 2D context of canvas
     * @param {Resources} resources Game assets class
     */  
    render(ctx, resources) {
        ctx.fillStyle = this.biomeColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        this.chunk.render(ctx, resources);
    }
}