var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Suppliers = require('../models/suppliers.js');



/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Suppliers.find(function (err, suppliers) {
    if (err) return next(err);
    res.json(suppliers);
  });
});

router.post('/', function(req, res, next) {
  //console.log(req.body.name);
  Suppliers.create(req.body, function (err, supplier) {
    if (err) return next(err);
    res.json(supplier);
  });
});

router.get('/:id', function(req, res, next) {

  Suppliers.findById(req.params.id, function (err, supplier) {
    if (err) return next(err);
    console.log('Returning '  + supplier);
    res.json(supplier);
  });
});


router.put('/:id', function(req, res, next) {
  Suppliers.findByIdAndUpdate(req.params.id, req.body, function (err, supplier) {
    if (err) return next(err);
    res.json(supplier);
  });
});

router.delete('/:id', function(req, res, next) {
  Suppliers.findByIdAndRemove(req.params.id, req.body, function (err, supplier) {
    if (err) return next(err);
    res.json(supplier);
  });
});




module.exports = router;
