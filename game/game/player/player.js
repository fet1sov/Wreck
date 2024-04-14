import { GameObject } from "../objects/gameObject.js";

/**
*   Player class
*   Class of game character
*
*   @author fet1sov <prodaugust21@gmail.com>
*/

export class Player extends GameObject {

    constructor(x, y, attributes = {})
    {
        super(x, y);
        this.attributes = attributes;
    }

    /**
     * Rendering method of Player
     * @param {CanvasRenderingContext2D} ctx 2D context of canvas
     * @param {Resources} resources Game assets class
     */  
    render(ctx, resources)
    {
        ctx.drawImage(resources.images.player.image, this.x, this.y);
    }

    /**
     * Keyboard input for the player 
     */ 
    keyboardInput(keyCode)
    {
        switch (keyCode)
        {
            case 'KeyW':
                this.y -= this.attributes.velocity ? this.attributes.velocity : 10;
                break;

            case 'KeyS':
                this.y += this.attributes.velocity ? this.attributes.velocity : 10;
                break;

            case 'KeyA':
                this.x -= this.attributes.velocity ? this.attributes.velocity : 10;
                break;

            case 'KeyD':
                this.x += this.attributes.velocity ? this.attributes.velocity : 10;
                break;

            // TODO: Additional 4 directions 
        }
    }
}