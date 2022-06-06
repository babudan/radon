const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const  UserController  = require("../controllers/userController")

router.post("/allbooks", UserController.booksdetails)
router.get("/allbooks-1", UserController.getBooksData )

module.exports = router;