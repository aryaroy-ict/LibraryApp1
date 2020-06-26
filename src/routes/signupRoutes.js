const express = require('express');
const signupRouter = express.Router();
const Signupdata = require('../model/Signupdata');
//function router(nav){
    signupRouter.get('/',function(req,res){
        res.render("signup",
        {
           // nav,
            nav:[{link:'/books', name:'BOOKS'},{link:'/authors', name:'AUTHORS'},{link:'/login', name:'LOGIN'},{link:'/signup', name:'SIGNUP'}],
            title:'Library',
            
        });
    });

    signupRouter.get('/submit',function(req,res){
       
       var item2 = {
            fname: req.body.first,
            lname: req.body.last,
           // username: req.body.username,
          //  password: req.body.password,
          //  Confirmpassword: req.body.conpassword,
          //  Phonenumber: req.body.phonenumber,
          //  comment: req.body.address

        }
          var signup = Signupdata(item2);
          signup.save();
          res.redirect('/signup');
    });

  //  return signupRouter;
//}

module.exports = signupRouter;