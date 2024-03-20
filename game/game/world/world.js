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
        this.worldSize = worldSize;
        this.chunk = new Chunk(this.worldSize);
        this.biomeColor = biomeColor;
    }

    /**
     * Get the tile from chunk
     * @param {number} x - Coordinate by X
     * @param {number} y - Coordinate by Y
     */    
    getTile(x, y) {
        return this.chunk[x][y];
    }

    /**
     * Randomly generates tiles in the world
     */
    generateWorld() {
        for (let i = 0; i < this.worldSize; i++) {
            for (let j = 0; j < this.worldSize; j++) {
                let tileTypeRandom = Math.random() * (15 - 1) + 1;

                if (tileTypeRandom >= 14)
                {
                    this.chunk.setTile(i, j, new Tile("bush", i, j));
                }
            }
        }
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