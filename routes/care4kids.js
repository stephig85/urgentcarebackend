var express = require('express');
var router = express.Router();
var ProviderModel = require('../models/providers.js');
var FacultyModel = require('../models/faculties.js');

//Doctor GET
router.get('/doctors',function(req,res,next){
  ProviderModel.find({},'',function( err,posts ){
    if(err) console.error('Error gettting posts: ', err);
    res.json(posts);
  });
});

//Doctor Signup POST

router.post('/doctors',function(req,res,next){

  var postDocInfo = {
    fullName: req.body.fullName,
    title: req.body.title,
    phone: req.body.phone,
    email: req.body.email,
    specialty: req.body.specialty
  };

var newPost = new ProviderModel(postDocInfo);


newPost.save(function(err,success){
  // res.redirect('/care4kids');
  console.log("error",err);
  });
});

//Doctor PUT (Update)

router.put('/doctors',function(req,res,next){
  var id = req.body.id;
  var updateInfo = {
    fullName: req.body.fullName,
    title: req.body.title,
    phone: req.body.phone,
    email: req.body.email,
    specialty: req.body.specialty
  };

  ProviderModel.findByIdAndUpdate(id, updateInfo,function(err,post){
    if(err) console.log(err);

    res.send('SUCCESS!');
  });
});

//Faculty GET

router.get('/faculty',function(req,res,next){
  FacultyModel.find({},'',function( err,posts ){
    if(err) console.error('Error gettting posts: ', err);
    res.json(posts);
  });
});

//Faculty Signup POST

router.post('/faculty',function(req,res,next){

  var postFacultyInfo = {
    fullName: req.body.fullName,
    phone: req.body.phone,
    email: req.body.email,
    schoolName: req.body.schooName,
    schoolPhone: req.body.schoolPhone
  };

var newPost = new FacultyModel(postFacultyInfo);

newPost.save(function(err,success){
  // res.redirect('/dashboard');
  console.log("error",err);
  res.send("POSTED BITCH");
  });
});

//Faculty Update (PUT)

router.put('/faculty',function(req,res,next){
  var id = req.body.id;
  var updateInfo = {
    fullName: req.body.fullName,
    phone: req.body.phone,
    email: req.body.email,
    schoolName: req.body.schooName,
    schoolPhone: req.body.schoolPhone
  };

  FacultyModel.findByIdAndUpdate(id, updateInfo,function(err,post){
    if(err) console.log(err);

    res.send('UPDATED THAT SHIT!');
  });
});

module.exports = router;