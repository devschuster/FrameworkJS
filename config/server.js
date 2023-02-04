const express = require('express');
const path = require('path');
const routes = require('./routes');

class Server {
    constructor() {
        this.app = express();
        this.app.use(routes.home);
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.set('view engine', 'ejs');
        this.app.use(express.static(path.join(__dirname, '../public')));
        this.port = 8080;
        this.app.set('port', process.env.PORT || this.port);
    }

    start() {
        this.app.listen(process.env.PORT || this.port, () => {
            console.log(`Server is listening on port ${this.port}`);
        });
    }
}

module.exports = Server;
