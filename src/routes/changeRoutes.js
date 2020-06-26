const express = require('express');
const changeRouter = express.Router();
const title = "Update Author";
const Authordata = require('../model/Authordata');

function routes(nav){
    changeRouter.get('/:id',function(req,res){
        const id = req.params.id
        Authordata.findById({_id:id})
        .then(function(author){
            res.render("change",{
                nav,
                title,
                author
            })
        })
    })

    changeRouter.post('/:id',function(req,res){
        const id = req.params.id
        var item1 = {
            
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
        }
        Authordata.findByIdAndUpdate({_id:id},item1,function(req,res){

        });
        res.redirect('/authors')
    })
    return changeRouter;
}

module.exports = routes;
