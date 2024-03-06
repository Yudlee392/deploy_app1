const Course= require('../models/Course')
const {mutipleMongooseToObjects}= require('../../util/mongoose')
const session = require('express-session');
class SiteController {
    //[GET] /
    index(req, res, next) {
        var ss=req.session
        req.session.role='khoa ko khon'
        console.log(req.session)

        //  Course.find({},function(err,courses){
        //     if(!err) res.json(courses);
        //     else res.status(400).json({error: 'ERROR!!!'})
        //  })
        // res.render('home');

        Course.find({})
            .then(courses =>res.render('home',{
                activePage: 'home',
                courses : mutipleMongooseToObjects(courses)
            }))
            .catch(error => next(error))
    }
    //[GET] /search
    search(req, res) {
        var ss=req.body;
        req.session.username='khoa ngu'
        console.log(req.session)
        res.render('search',{activePage:'search'});
    }

        //[post] /search
    searchpost(req, res) {
        res.send(req.body);
    }
}
module.exports = new SiteController();
