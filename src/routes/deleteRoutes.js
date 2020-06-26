const express = require('express');
const deleteRouter = express.Router();

const Bookdata =  require('../model/Bookdata');

function routes(){
    deleteRouter.get('/:id',function(req,res){
        const id = req.params.id
        Bookdata.findByIdAndDelete({_id:id},function(req,res){

        })
        res.redirect('/books');
    })
    return deleteRouter;
}

module.exports = routes;