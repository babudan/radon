const mongoose = require('mongoose');
const schema = mongoose.schema
const bookSchema = new mongoose.Schema( { 
    name: String,
    author_id: Number,
    price: Number,
    ratings: Number
}, { timestamps: true });
module.exports = mongoose.model('books new collections', bookSchema)