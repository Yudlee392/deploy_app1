const newsRouter = require('./news'); // ./news.js
const siteRouter = require('./site');
const adminRouter = require('./admin');
const loginRouter = require('./login');
// Middleware
const authMiddleware = require("../middlewares/authMiddleware");


function route(app) {

    app.use('/admin',authMiddleware, adminRouter);

    app.use('/login',loginRouter)

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}
module.exports = route;
