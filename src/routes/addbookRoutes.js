const express = require('express');
const addbooksRouter = express.Router();
addbooksRouter.get('/',function(req,res){
        res.render("addbooks",
        {
            nav:[{link:'/books', name:'BOOKS'},{link:'/addbooks', name:'ADD BOOKS' },{link:'/authors', name:'AUTHORS' },{link:'/login', name:'LOGIN'},{ link:'/signup', name:'SIGNUP' }],
            title:'ADD BOOKS',
            
        });
    }); 




module.exports = addbooksRouter;