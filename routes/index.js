var express = require('express');
var router = express.Router();
var passport = require('passport');
var Users = require('../models/users.js');
var Terms = require('../models/payterms.js');
var Currency = require('../models/currency.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/api/login', passport.authenticate('local'), function(req, res) {
  console.log('api-login called');
  res.cookie('user', JSON.stringify(req.user));
  res.send(req.user);
});


router.get('/pterms', function(req, res, next) {
  Terms.find(function (err, terms) {
    if (err) return next(err);
    res.json(terms);
  });
});

router.get('/currency', function(req, res, next) {
  Currency.find(function (err, cur) {
    if (err) return next(err);
    res.json(cur);
  });
});


router.post('/api/signup', function(req, res, next) {
  var user = new Users({
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  });
  user.save(function(err) {
    if (err) return next(err);
    res.send(200);
  });
});

router.get('/api/logout', function(req, res, next) {
  res.cookie('user', JSON.stringify(''));
  res.send(req.user);
});


module.exports = router;
