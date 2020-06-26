const express = require('express');
//const addbooksRouter = express.Router();
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){
    adminRouter.get('/',function(req,res){
        res.render("addbooks",
        {
            nav:[{link:'/books', name:'BOOKS'},{link:'/addbooks', name:'ADD BOOKS' },{link:'/authors', name:'AUTHORS' },{link:'/login', name:'LOGIN'},{ link:'/signup', name:'SIGNUP' }],
            title:'ADD BOOKS',
            
        });
    });

    adminRouter.post('/add', function(req,res){
        var item = {
            title:req.body.title,
            author:req.body.author,
            gener:req.body.gener,
            image:req.body.image
        }

        var book = Bookdata(item);
        book.save();
        res.redirect('/books')
    });

    adminRouter.get('/delete',function(req,res){
        res.send("delete books");
    })
   

   // return addbooksRouter;
   return adminRouter;

}


module.exports = router;