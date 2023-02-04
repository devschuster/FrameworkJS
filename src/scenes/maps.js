class Maps {
  constructor() {
    this.maps = [
      {
        name: 'map1',
        map: `
          IXXXXXXXXX
          -XXXXXXXXX
          -XXXXXXXXX
          -XXXXXXXXX
          -XXXXXXXXX
          -XXXXXXXXX
          -XXXXXXXXX
          -XXXXXXXXX
          -XXXXXXXXX
          OXXXXXXXXX
      `
      },
      {
        name: 'map2',
        map: `
        O--XXXXXXX
        X--XXXXXXX
        XX----XXXX
        X--XX-XXXX
        X-XXX--XXX
        X-XXXX-XXX
        XX--XX--XX
        XX--XXX-XX
        XXXX---IXX
        XXXXXXXXXX
        `
      },
      {
        name: 'map3',
        map: `
        I-----XXXX
        XXXXX-XXXX
        XX----XXXX
        XX-XXXXXXX
        XX-----XXX
        XXXXXX-XXX
        XX-----XXX
        XX-XXXXXXX
        XX-----OXX
        XXXXXXXXXX
      `
      }
    ];
  }

  getMap(mapName) {
    return this.maps.find(map => map.name === mapName).map;
  }

  addMap(map) {
    this.maps.push(map);
  }

  removeMap(mapName) {
    this.maps = this.maps.filter(map => map.name !== mapName);
  }
}

module.exports = Maps;