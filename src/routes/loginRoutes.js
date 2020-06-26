const express = require('express');
const loginRouter = express.Router();
const Logindata = require('../model/Logindata');
loginRouter.get('/',function(req,res){
    res.render("login", 
    {
        nav:[{link:'/books', name:'BOOKS'},{link:'/authors', name:'AUTHORS'},{link:'/login', name:'LOGIN'},{link:'/signup', name:'SIGNUP'}],
        title:'Library',
        
    });
});

loginRouter.get('/submit',function(req,res){
    var item = {
       email: req.query.email,
        lname: req.query.password
    }
      var login =Logindata(item);
      login.save();
      res.redirect('/login');
})

module.exports = loginRouter;