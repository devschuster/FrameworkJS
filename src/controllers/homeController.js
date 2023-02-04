const Controller = require('./../../config/baseRoute');

class HomeController extends Controller {
    constructor() {
        super();
        this.router.get('/', this.index);
    }
    index(req, res) {
        res.render('pages/home');
    }
}
module.exports = new HomeController().router;