const express = require('express');
const removeRouter = express.Router();

const Authordata =  require('../model/Authordata');

function routes(){
    removeRouter.get('/:id',function(req,res){
        const id = req.params.id
        Authordata.findByIdAndDelete({_id:id},function(req,res){

        })
        res.redirect('/authors');
    })
    return removeRouter;
}

module.exports = routes;