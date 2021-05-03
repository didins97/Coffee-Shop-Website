module.exports = {

    homePage: (req, res) => {
        res.render('home.ejs',req.context)
    },

    blogPage: (req, res) => {
        res.render('blog.ejs',req.context)
    },

    menuPage: (req, res) => {
        res.render('menu.ejs',req.context)
    }

}