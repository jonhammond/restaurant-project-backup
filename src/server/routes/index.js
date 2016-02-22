var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'gTables' });
});

router.get('/restaurants', function(req, res, next) {
  res.render('index', { title: 'gTables' });
});

router.get('/restaurants/new', function(req, res, next) {
  res.render('newrest', { title: 'New Restaurant' });
});

router.get('/restaurants/:id', function(req, res, next) {
  res.render('showrest', { title: 'Restaurant Info' });
});

router.get('/restaurants/:id/edit', function(req, res, next) {
  res.render('editrest', { title: 'Edit Restaurant' });
});

module.exports = router;
