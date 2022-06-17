const { count } = require("console")
const BookModel= require("../models/booksmodel")
const mongoose = require('mongoose');

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookData= async function (req, res) {
    let databooks = req.body.author_id
    res.send({msg:req.body})
}
module.exports.createBook= createBook