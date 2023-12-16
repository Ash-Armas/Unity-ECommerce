const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    seller:{
        type:Boolean,
        required:true
    }
})
module.exports = mongoose.model('Users',userSchema);