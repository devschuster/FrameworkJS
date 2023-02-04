class Game {
  constructor() {
    const MapsLoader = require("./mapsLoader");
    this.mapsLoader = new MapsLoader();
  }

  start() {
    const mapName = "map1";
    const map = this.mapsLoader.getMap(mapName);
    const emojis = this.mapsLoader.getEmojis();
    // Render map using map and emojis
    console.log(map);
    console.log(emojis);
  }
}

const game = new Game();
game.start();