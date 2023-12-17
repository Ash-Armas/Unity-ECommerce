const mongoose = require('mongoose');
const Products = require('./Products');

var ordersSchema = mongoose.Schema({
   buyer_id:{
      type:String
   },
   seller_id:{
      type:String
   },
   products:{
    type:[String],
    default:[]
   }
})
module.exports = mongoose.model('Orders',ordersSchema);