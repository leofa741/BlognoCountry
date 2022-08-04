'use strict'

const express = require('express');
const ArticleController = require('../controllers/article');
const multer = require('multer');

var router = express.Router();

// const multipart = require('multer');
// const md_upload = multipart({ uploadDir: './upload/articles'});

//server.js
 
 
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload/articles')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ '.'+file.originalname.split('.')[file.originalname.split('.').length -1])
    }
  })
   
  var upload = multer({ storage: storage })


// Rutas de prueba
router.post('/datos-prueba', ArticleController.datosPrueba);
router.get('/test-de-controlador', ArticleController.test);

// Rutas útiles
router.post('/save', ArticleController.save);
router.get('/articles/:last?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.put('/article/:id', ArticleController.update);
router.delete('/article/:id', ArticleController.delete);
router.post('/upload-image/:id?', upload.single('file0'), ArticleController.upload);
router.get('/get-image/:image', ArticleController.getImage);
router.get('/search/:search', ArticleController.search);



module.exports = router;