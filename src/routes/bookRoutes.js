const express = require('express');
const booksRouter = express.Router();
function router(nav)
{
    var books = [
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
    ]
    // For group of books page //
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
    
        });
    }); 
    
    // For single book listing //
    booksRouter.get('/:i',function(req,res){
        const i = req.params.i
        res.render("book",
        {
            nav,
            title:'Library',
            book: books[i]
        });
    });

    return booksRouter;


}



module.exports = router;