const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  password2:{
    type: String,
    required: true
  },
  availbalance:{
    type: Number,
    default: 00
  },
  totaldeposit:{
    type: Number,
    default: 00
  },
  withdrawal:{
    type: Number,
    default: 00
  },
  totalprofit:{
    type: Number,
    default: 00
  },
  totallinvestment:{
    type: Number,
    default: 00
  },
  referalcount :{
    type: Number,
    default: 1
  },
  refaralsbonus:{
    type: Number,
    default: 00
  },
 code:{
    type: String,
    required: true
 },
  referalcode:{
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
