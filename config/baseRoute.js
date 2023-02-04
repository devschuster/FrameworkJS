const  Router  = require('express');

class BaseRoute {
    constructor() {
        this.router = Router();
    }
}
module.exports = BaseRoute;