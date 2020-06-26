const express = require('express');
const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');
function router(nav)
{
    var authors = [
        {
            title:"Arundathi Roy",
            image:"a1.jpg"
        },
        {
            title:"Benyamin",
            image:"a2.jpg"
        },
        {
            title:"Chethan Bhagat",
            image:"a3.jpg"
        }
    ]
    
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",{
                nav,
                title:'Library',
                authors
            
    
             });
        })
        
    }); 
    
    authorsRouter.get('/:id',function(req,res){
       const id = req.params.id
       Authordata.findOne({_id: id})
      .then(function(author){
        res.render("author",
        {
            nav,
            title:'Library',
            author
        });
    });
    });
    
    return authorsRouter;
}



module.exports = router;