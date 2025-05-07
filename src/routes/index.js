const userRouter = require('./users');
const siteRouter = require('./site');

function route(app) {

    app.use('/users', userRouter);

    app.use('/', siteRouter);  

    // app.get('/songs', (req, res) => {
    //     res.render('songs');
    // });
}

module.exports = route;
