var express = require('express');
var router = express.Router();
var ProviderModel = require('../models/providers.js');
var FacultyModel = require('../models/faculties.js');
var PatientRequest = require('../models/patientrequest.js');

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
  console.log("error",err);
  res.send("POSTED!");
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

    res.send('UPDATED THAT SH*T!');
  });
});

// /* GET list of all faculty*/
// router.get('/faculty/:facultyId', function(req, res){
//   FacultyModel.findById(req.params.facultyId, function(err, faculty){
//     if (err) console.log(err);
//
//     res.json(faculty);
//     console.log(faculty);
//   });
// });

/* GET a faculty member*/
router.get('/faculty/:facultyId', function(req, res){
  var facultyId = req.user.aud;
  FacultyModel.findById(facultyId, function(err, faculty){
    if (err) console.log(err);

    res.json(faculty);
    console.log(faculty);
  });
});

//GET a patient request
router.get('/patientrequest',function(req,res,next){
  PatientRequest.find({},'',function( err,posts ){
    if(err) console.error('Error gettting posts: ', err);
    res.json(posts);
  });
});

// POST a patient request
router.post('/patientrequest',function(req,res,next){

  var postPatientRequest = {
    studentName: req.body.studentName,
    studentDob: req.body.studentDob,
    studentGender: req.body.studentGender,
    allergies: req.body.allergies,
    symptoms: req.body.symptoms
  };

var newPost = new PatientRequest(postPatientRequest);

newPost.save(function(err,success){
  console.log("error",err);
  res.send("POSTED!");
  });
});

// GET patient requests by Faculty ID



module.exports = router;
