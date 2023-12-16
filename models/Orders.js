const mongoose = require('mongoose');
const Products = require('./Products');

var ordersSchema = mongoose.Schema({
   products:{
    type:[Products],
    default:[]
   }
})
module.exports = mongoose.model('Orders',ordersSchema);