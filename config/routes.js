const Home = require('./../src/controllers/homeController');

class Routes {
    constructor() {
        this.home = Home;
    }
}

module.exports = new Routes();