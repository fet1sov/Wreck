import { Tile } from "./tile.js";

/**
*   Chunks
*   Class of world's chunks
*
*   @author fet1sov <prodaugust21@gmail.com>
*/

export class Chunk {
    /**
     * Creates a world chunk
     * @param {number} chunkSize The size of the chunk
     */    
    constructor(chunkSize) {
        this.chunkList = new Array(chunkSize);
        for (let i = 0; i < this.chunkList.length; i++) {
            this.chunkList[i] = new Array(chunkSize);
        }
    }

    /**
     * Setting up the tile object by coordinate
     * Inside of chunk
     * @param {number} x X coordinate of tile
     * @param {number} y Y coordinate of tile
     * @param {Tile} tile Tile object
     */
    setTile(x, y, tile) {
        this.chunkList[x][y] = tile;
    }

    /**
     * Rendering method of Tile
     * @param {CanvasRenderingContext2D} ctx 2D context of canvas
     * @param {Resources} resources Game assets class
     */  
    render(ctx, resources)
    {
        for (let i = 0; i < this.chunkList.length; i++) {
            for (let j = 0; j < this.chunkList[i].length; j++) {
                if (typeof this.chunkList[i][j] !== "undefined")
                {
                    this.chunkList[i][j].render(ctx, resources);
                }
            }
        }
    }
}