const newsRouter = require('./news'); // ./news.js
const siteRouter = require('./site');
const adminRouter = require('./admin');

function route(app) {

    app.use('/admin', adminRouter);

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}
module.exports = route;
