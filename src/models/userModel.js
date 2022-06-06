const mongoose = require('mongoose');


 const bookschema = new mongoose.Schema({
                bookName : String,
              authorName : String,
               category  : String,
                Year     : Number,
                tags : [String],
                date  : {
                     type :  Date,
                     default : Date.now
                },
                isPublished  : Boolean

 }, {timestamps : true});
module.exports = mongoose.model('Books', bookschema) 



