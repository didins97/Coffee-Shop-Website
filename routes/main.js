const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')

router.get('/home', mainController.homePage);
router.get('/blog', mainController.blogPage);
router.get('/menu', mainController.menuPage);

module.exports = router
