/**
*   Resources
*   Class which is initializing 
*   all image and sound resouces of game engine
*
*   @author fet1sov <prodaugust21@gmail.com>
*/

class Resources {
    constructor() {
        this.toLoad = {
          bush: "/assets/bush.png",
          player: "/assets/player.png"
        };

        this.images = {};
        Object.keys(this.toLoad).forEach(key => {
          const img = new Image();
          img.src = this.toLoad[key];
          this.images[key] = {
            image: img,
            isLoaded: false
          }
          img.onload = () => {
            this.images[key].isLoaded = true;
          }
        });
  }
}

export const resources = new Resources();