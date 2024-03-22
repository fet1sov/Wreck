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
     * Sets X coordinate of Tile
     * @param {number} X coordinate
     */  
    setX(x)
    {
        this.x = x;
    }

    /**
     * Sets Y coordinate of Tile
     * @param {number} Y coordinate
     */  
    setY(y)
    {
        this.y = y;
    }

    /**
     * Get a Type of the Tile
     * @return {string} Type of tile
     */
    getType()
    {
        return this.type;
    }

    /**
     * Set a Type of the Tile
     * @param {string} Type of tile
     */
    setType(type)
    {
        this.type = type;
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