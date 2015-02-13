var express = require('express');
var router = express.Router();
var passport = require('passport');

var mongoose = require('mongoose');
var Users = require('../models/users.js');



/* GET /todos listing. */
router.get('/',  function(req, res, next) {
  console.log('users get method called....');
  Users.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

router.post('/', function(req, res, next) {
  console.log(req.body.name);
  Users.create(req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

router.get('/:id', function(req, res, next) {

  Users.findById(req.params.id, function (err, user) {
    if (err) return next(err);
    console.log('Returning '  + user);
    res.json(user);
  });
});


router.put('/:id', function(req, res, next) {
  Users.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

router.delete('/:id', function(req, res, next) {
  Users.findByIdAndRemove(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});




module.exports = router;
