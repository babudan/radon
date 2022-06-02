const express = require('express');
const res = require('express/lib/response');
const lodash = require("lodash")
const logger = require("../logger/logger")
const helper = require("../util/helper")
const formatter = require("../validator/formatter")
const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('The constant in logger route has a value '+externalModule.endpoint)
    // console.log('The current batch is '+externalModule.batch)

    logger.welcome()
    helper.printDate()
    helper.printMonth()
    helper.getbatchinfo()
    formatter.alo()
    formatter.lulu()
    formatter.clu()
      res.send('My first ever api!')
});
router.get("/hello" , function (req, res){
       const arr = ["january","february","march","april","may","june","july","august","september","october","november","december"]
       console.log(lodash.chunk(arr,3))
       res.send("my name is arindam")
});
  router.get("/didi", function (req,res){
            const numbers = [1,3,5,7,9,11,13,15,17,19]
            console.log(lodash.tail(numbers));
            res.send("my name is ruchira")
  });
     router.get("/nono" , function (req,res){
            const num1 = [1,3,5,7,9]
            const num2 = [2,3,4,6,8]
            const num3 = [1,4,13,8,14]
            const num4 = [1,3,5,7,18]
            const num5 = [0,10,15,7,12]
            console.log(lodash.union(num1,num2,num3,num4,num5))
            res.send("my name is nono")
             })
             router.get("/ari" , function (req,res){
               const movies =([["Horror","Siccin"],["Fiction","intersteller"],["Thriller","Vincida"],["Comedy","Homealone"]])
                    console.log(lodash.fromPairs(movies))
                   res.send("my name is ari")
             });

module.exports = router;
// adding this comment for no reason