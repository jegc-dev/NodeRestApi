'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CustomerSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the customer name'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['looker', 'bargain hunter', 'buyer', 'new']
    }],
    default: ['new']
  }
});

module.exports = mongoose.model('Customers', CustomerSchema);