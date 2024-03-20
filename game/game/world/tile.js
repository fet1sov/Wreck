/**
*   Tile
*   Class of tiles in world
*
*   @author fet1sov <prodaugust21@gmail.com>
*/

export class Tile {
    /**
     * Create a Tile
     * @param {number} x - Coordinate by X
     * @param {number} y - Coordinate by Y
     */    
    constructor(type, x, y) {
        this.type = type;
        this.x = x;
        this.y = y;
    }

    /**
     * Get X coordinate of Tile
     * @return {number} X coordinate
     */    
    getX()
    {
        return this.x;
    }

    /**
     * Get Y coordinate of Tile
     * @return {number} Y coordinate
     */  
    getY()
    {
        return this.y;
    }

    /**
     * Rendering method of Tile
     * @param {CanvasRenderingContext2D} ctx 2D context of canvas
     * @param {Resources} resources Game assets class
     */  
    render(ctx, resources)
    {
        if (this.type == "bush")
        {
            ctx.drawImage(resources.images.bush.image, this.x * 32, this.y * 32);
        }
    }
}