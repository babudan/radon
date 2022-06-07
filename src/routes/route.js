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
router.post("/getXINRBooks", BookController.pricetagbooks)
router.post("/getRandomBooks" , BookController.randombooks)

module.exports = router;