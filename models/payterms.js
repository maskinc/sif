var mongoose = require('mongoose');

var ptermsSchema = new mongoose.Schema({
      name:  String
    , description: String
    });

module.exports = mongoose.model('pay_terms', ptermsSchema);