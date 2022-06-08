const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )
router.get("/bookList", BookController.getBooksData  )
router.post("/getParticularBooks" , BookController.particularBooks)
router.post("/getBooksInYear" , BookController.booksyeardata)
router.post("/getXINRBooks", BookController.pricetagbooks)
router.get("/getRandomBooks" , BookController.randombooks)

module.exports = router;