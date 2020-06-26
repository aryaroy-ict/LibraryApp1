const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav)
{
    /*var books = [
        {
            title:'The God of Small Things',
            author:'Arundathi Roy',
            gener:'Drama',
            image:'gost1.jpg'
        },
    
        {
            title:'The story of my Experiments by Truth',
            author:'Mahathma Gandhi',
            gener:'Autobiography',
            image:'g3.jpg'
        },
    
        {
            title:'AAdujeevitham',
            author:'Benyamin',
            gener:'Drama',
            image:'aadu.jpg'
        }
    ]*/

    // For group of books page //
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'Library',
                books
        
            });
        });
       
    }); 
    
    // For single book listing //
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        Bookdata.findOne({_id: id})
        .then(function(book){
            res.render("book",
            {
            nav,
            title:'Library',
            book
            });
        
        
    });
});

    return booksRouter;


}



module.exports = router;