
class NewsConTroller {

    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /:slug
    show(req, res) {
        res.send('show page');
    }

}

module.exports = new NewsConTroller;