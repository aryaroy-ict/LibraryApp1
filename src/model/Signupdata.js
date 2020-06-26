const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

const signSchema = new Schema({
        fname: String,
        lname: String,
      //  username: String,
      //  password: String,
      //  Confirmpassword: String, 
     //   Phonenumber: Number,
     //   comment: String
});

var Signupdata = mongoose.model('signupdata',signSchema);
module.exports = Signupdata;
