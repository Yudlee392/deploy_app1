class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }
    //[GET] /news/:slug
    show(req, res) {
        console.log(req.params);
        res.send('NEWS DETAIL');
    }
}
module.exports = new NewsController();
