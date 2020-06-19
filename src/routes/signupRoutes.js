const express = require('express');
const signupRouter = express.Router();

signupRouter.get('/',function(req,res){
    res.render("signup",
    {
        nav:[{link:'/books', name:'BOOKS'},{link:'/authors', name:'AUTHORS'},{link:'/login', name:'LOGIN'},{link:'/signup', name:'SIGNUP'}],
        title:'Library',
        
    });
});
 module.exports = signupRouter;