const mongoose = require('mongoose');


 const bookschema = new mongoose.Schema({
                bookName : String,
              authorName : String,
               category  : String,
                Year     : Number
 }, {timestamps : true});
module.exports = mongoose.model('Books', bookschema) 



