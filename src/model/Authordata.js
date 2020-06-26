
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
    author:String,
    gener:String,
    image:String
});

var Authordata = mongoose.model('Authordata',AuthorSchema);

module.exports = Authordata;