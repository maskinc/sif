var mongoose = require('mongoose');

var currencySchema = new mongoose.Schema({
      currency_code:  String
    , name: String
    });

module.exports = mongoose.model('currencies', currencySchema);