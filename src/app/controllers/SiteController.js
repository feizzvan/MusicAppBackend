

class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home');
    }

    // [GET] /site/:slug
    show(req, res) {
        res.send('SITE DETAIL');
    }
}

module.exports = new SiteController();
