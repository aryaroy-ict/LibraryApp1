const express = require('express');
//const addbooksRouter = express.Router();
const addauthorRouter = express.Router();
const Authordata = require('../model/Authordata');
function router(nav){
    addauthorRouter.get('/',function(req,res){
        res.render("addauthors",
        {
            nav,
            title:'ADD AUTHORS',
            
        });
    });

    addauthorRouter.post('/include', function(req,res){
        var item1 = {
            author:req.body.author,
            gener:req.body.gener,
            image:req.body.image
        }

        var author = Authordata(item1);
        author.save();
        res.redirect('/authors')
    });

    
   

   // return addbooksRouter;
   return addauthorRouter;

}


module.exports = router;