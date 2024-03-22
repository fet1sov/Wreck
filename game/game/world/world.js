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

        this.chunks = new Array(this.worldSize);
        for (let i = 0; i < this.chunks.length; i++) {
            this.chunks[i] = new Array(this.worldSize);
        }

        for (let x = 0; x < this.worldSize; x++) {
            for (let y = 0; y < this.worldSize; y++) {
                this.chunks[x][y] = new Chunk(16);
            }
        }

        this.biomeColor = biomeColor;
    }

    /**
     * Get the chunk
     * @param {number} x - Coordinate by X
     * @param {number} y - Coordinate by Y
     */    
    getChunk(x, y) {
        return this.chunks[x][y];
    }

    /**
     * Randomly generates tiles in the world
     */
    generateWorld() {
        for (let x = 0; x < this.worldSize; x++) {
            for (let y = 0; y < this.worldSize; y++) {
                let tileTypeRandom = Math.random() * (15 - 1) + 1;

                if (tileTypeRandom >= 14)
                {
                    this.chunks[x][y].setTile(x, y, new Tile("bush", x, y));
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

        for (let x = 0; x < this.worldSize; x++) {
            for (let y = 0; y < this.worldSize; y++) {
                this.chunks[x][y].render(ctx, resources);
            }
        }
    }
}