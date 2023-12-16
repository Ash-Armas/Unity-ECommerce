const mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:BigInt,
        require:true
    }
})
module.exports = mongoose.model('Products',productSchema);