

class UserController {
    // [GET] /user
    index(req, res) {
        res.render('users');
    }

    // [GET] /user/:slug
    show(req, res) {
        res.send('USER DETAIL');
    }
}

module.exports = new UserController();
