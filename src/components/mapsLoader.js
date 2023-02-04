class MapsLoader {
  constructor() {
    const Maps = require("./../scenes/maps");
    this.emojis = {
      "-": " ",
      O: "🚪",
      X: "💣",
      I: "🎁",
      PLAYER: "💀",
      BOMB_COLLISION: "🔥",
      GAME_OVER: "👎",
      WIN: "🏆",
    };
    this.mapLoader = new Maps();
  }

  getEmojis() {
    return this.emojis;
  }

  getMap(mapName) {
    return this.mapLoader.getMap(mapName);
  }

  addMap(mapName, map) {
    this.mapLoader.addMap(mapName, map);
  }

  removeMap(mapName) {
    this.mapLoader.removeMap(mapName);
  }
}

module.exports = MapsLoader;