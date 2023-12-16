const mongoose = require('mongoose');

var catalogSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:BigInt,
        require:true
    }
})
module.exports = mongoose.model('Catalogs',catalogSchema);