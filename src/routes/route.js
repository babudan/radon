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
    // let candidates = req.query.candidates
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    // res.send(candidates)
    let candidates = ['Arindam','Suman']
    res.send(candidates)
    // res.json({"name" : "arindam" , "age" : 23})
})
router.get('/candidates/:canidatesName', function(req, res){
    // console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})
      

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason