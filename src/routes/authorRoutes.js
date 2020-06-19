const express = require('express');
const authorsRouter = express.Router();
function field(nav)
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
        res.render("authors",
        {
           nav,
            title:'Library',
            authors
            
    
        });
    }); 
    
    authorsRouter.get('/:i',function(req,res){
        const i = req.params.i
        res.render("author",
        {
            nav,
            title:'Library',
            author: authors[i]
        });
    });
    
    return authorsRouter;
}



module.exports = field;