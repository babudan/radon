const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],
    
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10}
// }, { timestamps: true });

const bookSchema = new mongoose.Schema( {
    bookName: {
        type : String,
        require : true
    }, 
    authorName: String, 
    tags: [String],
    year : {
        type : Number,
        default : 2021
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
   totalPages : Number,
//    stockAvailable : Bollean
}, { timestamps: true });
module.exports = mongoose.model('Book', bookSchema) //users

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
