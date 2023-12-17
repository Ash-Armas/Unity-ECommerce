const mongoose = require('mongoose');
const {Products} = require('./Products');

var catalogSchema = mongoose.Schema({
    seller_id:{
        type:String,
        required:true
    },
    products: [String]
})
module.exports = mongoose.model('Catalogs',catalogSchema);