const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const res = require('express/lib/response');

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Arindam','Suman']
    res.send(candidates)
})
// router.get('/movies' , function(req, res){
//           let movies = ["the dark night" , "intersteller" , "siccin" , "haunted"]
//           res.send(movies)
// })
// router.get("/movies/:indexNumber" , function(req, res){
//               let movies = ["the dark night" , "intersteller" , "siccin" , "haunted"]
//                 res.send(movies[req.params.indexNumber])
//           })
          router.get("/movies/:indexNumber" , function(req, res){
            let movies = ["the dark night" , "intersteller" , "siccin" , "haunted"]
            if (req.params.indexNumber<movies.length){
              res.send(movies[req.params.indexNumber])
            }else {
                res.send("tells the user to use a valid index")
            }
        })
       router.get("/films" , function(req, res){
      let cinema =   [ {
            "id": 1,
            "name": "The Shining"
           }, {
            "id": 2,
            "name": "Incendies"
           }, {
            "id": 3,
            "name": "Rang de Basanti"
           }, {
            "id": 4,
            "name": "Finding Nemo"
           }]
        res.send(cinema)
        })  

      

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason