const UserModel= require("../models/userModel")

const booksdetails = async function (req, res) {
    let bookdata= req.body
    let bookSavedData= await UserModel.create(bookdata)
    console.log("these are the all book details")
    res.send({msg: bookSavedData})
    console.log(bookSavedData)
}

const getBooksData= async function (req, res) {
    let newbooks = await UserModel.find()
    res.send({msg: newbooks})
    console.log(newbooks)
}

module.exports.booksdetails = booksdetails
module.exports.getBooksData= getBooksData