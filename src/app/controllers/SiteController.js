
class SiteConTroller {

    // [GET] /
    home(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteConTroller;