const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type : String,
        require : true
           },      
    authorName: String, 
    tags  : [String],
    year : {
        type : Number,
        default : 2021
    },
    prices: {
        indianPrice: String,
        europePrice: String
    },
    totalPages : Number,
    stockAvailable : Boolean
}, { timestamps: true });


module.exports = mongoose.model('Books collection', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
