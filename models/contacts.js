var mongoose = require('mongoose');

var ContactSchema = mongoose.Schema(
    {
        first_name:{
            type:String,
            required:true
        },
        last_name:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            required:true,
            default:Date.now
        }
    }
);


var Contact = module.exports = mongoose.model('Contact', ContactSchema);