const siteRouter = require('./site');
const adminRouter = require('./admin');
const loginRouter = require('./login');
// Middleware
const authMiddleware = require("../middlewares/authMiddleware");


function route(app) {

    app.use('/admin',authMiddleware, adminRouter);

    app.use('/login',loginRouter);

    app.use('/', siteRouter);
 
    app.get('/logout', (req, res) => {
        // Destroy the current session
        req.session.destroy(err => {
            if (err) {
                console.error('Error destroying session:', err);
                res.status(500).send('Internal Server Error');
            } else {
                // Redirect the user to the desired page after logout
                res.redirect('/login'); // Redirect to login page or any other page
            }
        });
    });
    
}
module.exports = route;
