const express = require('express');
const loginRouter = express.Router();
loginRouter.get('/',function(req,res){
    res.render("login",
    {
        nav:[{link:'/books', name:'BOOKS'},{link:'/authors', name:'AUTHORS'},{link:'/login', name:'LOGIN'},{link:'/signup', name:'SIGNUP'}],
        title:'Library',
        
    });
});

module.exports = loginRouter;